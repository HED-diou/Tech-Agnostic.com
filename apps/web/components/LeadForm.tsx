'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { formOptions, site } from '@/lib/site';
import { Button, ArrowRight, Check } from './ui';

/**
 * Three-step lead form.
 *
 * The split is deliberate and is the funnel: step 1 asks for a choice (cheap,
 * high commitment), step 2 qualifies the deal, step 3 asks for the contact
 * details only once the visitor has already invested two clicks.
 *
 * There is no backend in this project. Submission POSTs JSON to
 * NEXT_PUBLIC_FORM_ENDPOINT (Formspree, Basin, Web3Forms, a webhook — anything
 * that accepts JSON). If that variable is unset, or the request fails, the
 * form degrades to a pre-filled mailto: so a lead is never silently dropped.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Fields = {
  intent: string;
  teamSize: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  message: string;
  /** Honeypot — bots fill it, humans never see it. */
  website: string;
};

const EMPTY: Fields = {
  intent: '',
  teamSize: '',
  timeline: '',
  budget: '',
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
};

const STEPS = ['What you need', 'Context', 'Your details'] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto'>(
    'idle',
  );
  const headingRef = useRef<HTMLParagraphElement>(null);
  const uid = useId();

  // Deep links from the pricing table: /contact?intent=audit
  //
  // This deliberately syncs from an external system (the URL) in an effect
  // rather than during render. Reading `window.location` in a state
  // initialiser would produce a hydration mismatch, and Next's
  // `useSearchParams` would force this component behind a Suspense boundary —
  // which would ship the contact page's HTML without a form in it, costing us
  // crawlers and anyone whose JS has not loaded yet. A one-shot patch after
  // hydration is the correct trade for a lead-capture form.
  useEffect(() => {
    const intent = new URLSearchParams(window.location.search).get('intent');
    if (intent && formOptions.intent.some((o) => o.value === intent)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFields((f) => ({ ...f, intent }));
    }
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (target: number): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};

    if (target === 0 && !fields.intent) {
      next.intent = 'Pick the closest option.';
    }
    if (target === 1) {
      if (!fields.teamSize) next.teamSize = 'Required.';
      if (!fields.timeline) next.timeline = 'Required.';
    }
    if (target === 2) {
      if (!fields.name.trim()) next.name = 'Required.';
      if (!EMAIL_RE.test(fields.email.trim())) {
        next.email = 'Enter a valid email address.';
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goTo = (target: number) => {
    setStep(target);
    // Move focus so screen readers announce the new step.
    window.requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => {
    if (validate(step)) goTo(step + 1);
  };

  const mailtoFallback = () => {
    const label = (group: keyof typeof formOptions, value: string) =>
      formOptions[group].find((o) => o.value === value)?.label ?? '—';

    const body = [
      `Name: ${fields.name}`,
      `Company: ${fields.company || '—'}`,
      `Email: ${fields.email}`,
      '',
      `Need: ${label('intent', fields.intent)}`,
      `Team size: ${label('teamSize', fields.teamSize)}`,
      `Timeline: ${label('timeline', fields.timeline)}`,
      `Budget: ${label('budget', fields.budget)}`,
      '',
      fields.message || '(no additional context)',
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Technical review — ${fields.company || fields.name}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatus('mailto');
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate(2)) return;
    if (fields.website) return; // honeypot tripped

    if (!ENDPOINT) {
      mailtoFallback();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...fields,
          website: undefined,
          source: site.domain,
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('sent');
    } catch {
      mailtoFallback();
    }
  };

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="rounded-card border border-ink-600 bg-ink-800 p-8 lg:p-10">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-signal text-ink-900">
          <Check />
        </span>
        <h3 className="mt-6 text-h2">
          {status === 'sent' ? 'Received.' : 'Your email client is open.'}
        </h3>
        <p className="mt-4 text-steel-400 measure">
          {status === 'sent'
            ? `Thanks ${fields.name.split(' ')[0] ?? ''}. We read every one of these ourselves and reply within one business day — usually with a first opinion attached.`
            : `We have pre-filled a message to ${site.email}. Send it and we will reply within one business day.`}
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-steel-400">
          No sequences. No drip campaigns.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative rounded-card border border-ink-600 bg-ink-800 p-6 sm:p-8 lg:p-10"
    >
      {/* Progress */}
      <div className="flex items-center gap-3">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <span
              aria-hidden="true"
              className={`h-0.5 w-full rounded-full transition-colors duration-150 ease-out ${
                i <= step ? 'bg-signal' : 'bg-ink-600'
              }`}
            />
            <span
              className={`font-mono text-[0.625rem] uppercase tracking-[0.12em] ${
                i === step ? 'text-paper' : 'text-steel-400'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <p
        ref={headingRef}
        tabIndex={-1}
        aria-live="polite"
        className="mt-8 font-mono text-eyebrow uppercase text-steel-400 outline-none"
      >
        Step {step + 1} of {STEPS.length}
      </p>

      {/* ── Step 1 ─────────────────────────────────────────────────────── */}
      {step === 0 ? (
        <fieldset className="mt-5">
          <legend className="text-h2">What brings you here?</legend>
          <p className="mt-3 text-sm text-steel-400">
            Closest match is fine. We will get to the detail on the call.
          </p>

          <div
            className="mt-7 space-y-2"
            role="radiogroup"
            aria-describedby={errors.intent ? `${uid}-intent-err` : undefined}
          >
            {formOptions.intent.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-field border px-4 py-3.5 text-sm transition-colors duration-150 ease-out ${
                  fields.intent === option.value
                    ? 'border-signal bg-ink-900 text-paper'
                    : 'border-ink-600 text-steel-200 hover:border-steel-400'
                }`}
              >
                <input
                  type="radio"
                  name="intent"
                  value={option.value}
                  checked={fields.intent === option.value}
                  onChange={() => set('intent', option.value)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                    fields.intent === option.value
                      ? 'border-signal'
                      : 'border-ink-500'
                  }`}
                >
                  {fields.intent === option.value ? (
                    <span className="h-2 w-2 rounded-full bg-signal" />
                  ) : null}
                </span>
                {option.label}
              </label>
            ))}
          </div>

          {errors.intent ? (
            <p id={`${uid}-intent-err`} className="mt-3 text-sm text-err">
              {errors.intent}
            </p>
          ) : null}
        </fieldset>
      ) : null}

      {/* ── Step 2 ─────────────────────────────────────────────────────── */}
      {step === 1 ? (
        <div className="mt-5 space-y-8">
          <h3 className="text-h2">A little context.</h3>

          <ChipGroup
            uid={uid}
            name="teamSize"
            label="How big is the engineering team?"
            options={formOptions.teamSize}
            value={fields.teamSize}
            error={errors.teamSize}
            onChange={(v) => set('teamSize', v)}
          />
          <ChipGroup
            uid={uid}
            name="timeline"
            label="When do you need this solved?"
            options={formOptions.timeline}
            value={fields.timeline}
            error={errors.timeline}
            onChange={(v) => set('timeline', v)}
          />
          <ChipGroup
            uid={uid}
            name="budget"
            label="Budget range"
            hint="Optional. It helps us propose something realistic."
            options={formOptions.budget}
            value={fields.budget}
            onChange={(v) => set('budget', v)}
          />
        </div>
      ) : null}

      {/* ── Step 3 ─────────────────────────────────────────────────────── */}
      {step === 2 ? (
        <div className="mt-5 space-y-6">
          <h3 className="text-h2">Where do we reply?</h3>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              uid={uid}
              name="name"
              label="Name"
              value={fields.name}
              error={errors.name}
              autoComplete="name"
              onChange={(v) => set('name', v)}
            />
            <Field
              uid={uid}
              name="company"
              label="Company"
              optional
              value={fields.company}
              autoComplete="organization"
              onChange={(v) => set('company', v)}
            />
          </div>

          <Field
            uid={uid}
            name="email"
            label="Work email"
            type="email"
            value={fields.email}
            error={errors.email}
            autoComplete="email"
            onChange={(v) => set('email', v)}
          />

          <div>
            <label
              htmlFor={`${uid}-message`}
              className="block text-sm font-medium text-paper"
            >
              What is stuck?{' '}
              <span className="font-normal text-steel-400">(optional)</span>
            </label>
            <textarea
              id={`${uid}-message`}
              name="message"
              rows={4}
              value={fields.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder="Two or three sentences is plenty."
              className="mt-2 w-full rounded-field border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-paper transition-colors duration-150 ease-out placeholder:text-ink-500 hover:border-steel-400 focus:border-steel-400 focus:outline-none"
            />
          </div>

          {/* Honeypot */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor={`${uid}-website`}>Website</label>
            <input
              id={`${uid}-website`}
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={fields.website}
              onChange={(e) => set('website', e.target.value)}
            />
          </div>

          <p className="text-xs leading-relaxed text-steel-400">
            We use your details to reply to this enquiry and nothing else. No
            newsletter, no third-party sharing. See our{' '}
            <a
              href="/privacy"
              className="text-paper underline underline-offset-2"
            >
              privacy note
            </a>
            .
          </p>
        </div>
      ) : null}

      {/* ── Controls ───────────────────────────────────────────────────── */}
      <div className="mt-9 flex items-center gap-3">
        {step > 0 ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => goTo(step - 1)}
          >
            Back
          </Button>
        ) : null}

        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next} className="flex-1 sm:flex-none">
            Continue
            <ArrowRight />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={status === 'sending'}
            className="flex-1 sm:flex-none"
          >
            {status === 'sending' ? 'Sending…' : 'Send and book a slot'}
            {status === 'sending' ? null : <ArrowRight />}
          </Button>
        )}
      </div>
    </form>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────── */

function ChipGroup({
  uid,
  name,
  label,
  hint,
  options,
  value,
  error,
  onChange,
}: {
  uid: string;
  name: string;
  label: string;
  hint?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-paper">{label}</legend>
      {hint ? <p className="mt-1 text-xs text-steel-400">{hint}</p> : null}

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer rounded-field border px-3.5 py-2 text-sm transition-colors duration-150 ease-out ${
              value === option.value
                ? 'border-signal bg-ink-900 text-paper'
                : 'border-ink-600 text-steel-200 hover:border-steel-400'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>

      {error ? (
        <p id={`${uid}-${name}-err`} className="mt-2 text-sm text-err">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function Field({
  uid,
  name,
  label,
  type = 'text',
  optional = false,
  value,
  error,
  autoComplete,
  onChange,
}: {
  uid: string;
  name: string;
  label: string;
  type?: string;
  optional?: boolean;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}) {
  const id = `${uid}-${name}`;
  const errorId = `${id}-err`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-paper">
        {label}{' '}
        {optional ? (
          <span className="font-normal text-steel-400">(optional)</span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 h-12 w-full rounded-field border bg-ink-900 px-4 text-sm text-paper transition-colors duration-150 ease-out placeholder:text-ink-500 focus:outline-none ${
          error
            ? 'border-err'
            : 'border-ink-600 hover:border-steel-400 focus:border-steel-400'
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-err">
          {error}
        </p>
      ) : null}
    </div>
  );
}
