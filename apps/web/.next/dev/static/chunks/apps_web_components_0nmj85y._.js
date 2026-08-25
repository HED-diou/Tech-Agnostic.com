(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/LeadForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadForm",
    ()=>LeadForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
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
 */ const ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FORM_ENDPOINT;
const EMPTY = {
    intent: '',
    teamSize: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    message: '',
    website: ''
};
const STEPS = [
    'What you need',
    'Context',
    'Your details'
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function LeadForm() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fields, setFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    // Deep links from the pricing table: /contact?intent=audit
    //
    // This deliberately syncs from an external system (the URL) in an effect
    // rather than during render. Reading `window.location` in a state
    // initialiser would produce a hydration mismatch, and Next's
    // `useSearchParams` would force this component behind a Suspense boundary —
    // which would ship the contact page's HTML without a form in it, costing us
    // crawlers and anyone whose JS has not loaded yet. A one-shot patch after
    // hydration is the correct trade for a lead-capture form.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadForm.useEffect": ()=>{
            const intent = new URLSearchParams(window.location.search).get('intent');
            if (intent && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"].intent.some({
                "LeadForm.useEffect": (o)=>o.value === intent
            }["LeadForm.useEffect"])) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFields({
                    "LeadForm.useEffect": (f)=>({
                            ...f,
                            intent
                        })
                }["LeadForm.useEffect"]);
            }
        }
    }["LeadForm.useEffect"], []);
    const set = (key, value)=>{
        setFields((f)=>({
                ...f,
                [key]: value
            }));
        setErrors((e)=>({
                ...e,
                [key]: undefined
            }));
    };
    const validate = (target)=>{
        const next = {};
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
    const goTo = (target)=>{
        setStep(target);
        // Move focus so screen readers announce the new step.
        window.requestAnimationFrame(()=>headingRef.current?.focus());
    };
    const next = ()=>{
        if (validate(step)) goTo(step + 1);
    };
    const mailtoFallback = ()=>{
        const label = (group, value)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"][group].find((o)=>o.value === value)?.label ?? '—';
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
            fields.message || '(no additional context)'
        ].join('\n');
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].email}?subject=${encodeURIComponent(`Technical review — ${fields.company || fields.name}`)}&body=${encodeURIComponent(body)}`;
        setStatus('mailto');
    };
    const submit = async (event)=>{
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
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    ...fields,
                    website: undefined,
                    source: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].domain
                })
            });
            if (!response.ok) throw new Error(`Request failed: ${response.status}`);
            setStatus('sent');
        } catch  {
            mailtoFallback();
        }
    };
    if (status === 'sent' || status === 'mailto') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-card border border-ink-600 bg-ink-800 p-8 lg:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-signal text-ink-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {}, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/LeadForm.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mt-6 text-h2",
                    children: status === 'sent' ? 'Received.' : 'Your email client is open.'
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/LeadForm.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-steel-400 measure",
                    children: status === 'sent' ? `Thanks ${fields.name.split(' ')[0] ?? ''}. We read every one of these ourselves and reply within one business day — usually with a first opinion attached.` : `We have pre-filled a message to ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].email}. Send it and we will reply within one business day.`
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/LeadForm.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-8 font-mono text-xs uppercase tracking-[0.14em] text-steel-400",
                    children: "No sequences. No drip campaigns."
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/LeadForm.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/LeadForm.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        noValidate: true,
        className: "relative rounded-card border border-ink-600 bg-ink-800 p-6 sm:p-8 lg:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: STEPS.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: `h-0.5 w-full rounded-full transition-colors duration-150 ease-out ${i <= step ? 'bg-signal' : 'bg-ink-600'}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono text-[0.625rem] uppercase tracking-[0.12em] ${i === step ? 'text-paper' : 'text-steel-400'}`,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: headingRef,
                tabIndex: -1,
                "aria-live": "polite",
                className: "mt-8 font-mono text-eyebrow uppercase text-steel-400 outline-none",
                children: [
                    "Step ",
                    step + 1,
                    " of ",
                    STEPS.length
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            step === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-h2",
                        children: "What brings you here?"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-steel-400",
                        children: "Closest match is fine. We will get to the detail on the call."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 space-y-2",
                        role: "radiogroup",
                        "aria-describedby": errors.intent ? `${uid}-intent-err` : undefined,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"].intent.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `flex cursor-pointer items-center gap-3 rounded-field border px-4 py-3.5 text-sm transition-colors duration-150 ease-out ${fields.intent === option.value ? 'border-signal bg-ink-900 text-paper' : 'border-ink-600 text-steel-200 hover:border-steel-400'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "intent",
                                        value: option.value,
                                        checked: fields.intent === option.value,
                                        onChange: ()=>set('intent', option.value),
                                        className: "sr-only"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: `grid h-4 w-4 shrink-0 place-items-center rounded-full border ${fields.intent === option.value ? 'border-signal' : 'border-ink-500'}`,
                                        children: fields.intent === option.value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 rounded-full bg-signal"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/LeadForm.tsx",
                                            lineNumber: 267,
                                            columnNumber: 21
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this),
                                    option.label
                                ]
                            }, option.value, true, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    errors.intent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: `${uid}-intent-err`,
                        className: "mt-3 text-sm text-err",
                        children: errors.intent
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 276,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this) : null,
            step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-h2",
                        children: "A little context."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipGroup, {
                        uid: uid,
                        name: "teamSize",
                        label: "How big is the engineering team?",
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"].teamSize,
                        value: fields.teamSize,
                        error: errors.teamSize,
                        onChange: (v)=>set('teamSize', v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipGroup, {
                        uid: uid,
                        name: "timeline",
                        label: "When do you need this solved?",
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"].timeline,
                        value: fields.timeline,
                        error: errors.timeline,
                        onChange: (v)=>set('timeline', v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipGroup, {
                        uid: uid,
                        name: "budget",
                        label: "Budget range",
                        hint: "Optional. It helps us propose something realistic.",
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formOptions"].budget,
                        value: fields.budget,
                        onChange: (v)=>set('budget', v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this) : null,
            step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-h2",
                        children: "Where do we reply?"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                uid: uid,
                                name: "name",
                                label: "Name",
                                value: fields.name,
                                error: errors.name,
                                autoComplete: "name",
                                onChange: (v)=>set('name', v)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                uid: uid,
                                name: "company",
                                label: "Company",
                                optional: true,
                                value: fields.company,
                                autoComplete: "organization",
                                onChange: (v)=>set('company', v)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        uid: uid,
                        name: "email",
                        label: "Work email",
                        type: "email",
                        value: fields.email,
                        error: errors.email,
                        autoComplete: "email",
                        onChange: (v)=>set('email', v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${uid}-message`,
                                className: "block text-sm font-medium text-paper",
                                children: [
                                    "What is stuck?",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal text-steel-400",
                                        children: "(optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: `${uid}-message`,
                                name: "message",
                                rows: 4,
                                value: fields.message,
                                onChange: (e)=>set('message', e.target.value),
                                placeholder: "Two or three sentences is plenty.",
                                className: "mt-2 w-full rounded-field border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-paper transition-colors duration-150 ease-out placeholder:text-ink-500 hover:border-steel-400 focus:border-steel-400 focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "absolute -left-[9999px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${uid}-website`,
                                children: "Website"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: `${uid}-website`,
                                name: "website",
                                tabIndex: -1,
                                autoComplete: "off",
                                value: fields.website,
                                onChange: (e)=>set('website', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs leading-relaxed text-steel-400",
                        children: [
                            "We use your details to reply to this enquiry and nothing else. No newsletter, no third-party sharing. See our",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy",
                                className: "text-paper underline underline-offset-2",
                                children: "privacy note"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-9 flex items-center gap-3",
                children: [
                    step > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "secondary",
                        onClick: ()=>goTo(step - 1),
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this) : null,
                    step < STEPS.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        onClick: next,
                        className: "flex-1 sm:flex-none",
                        children: [
                            "Continue",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: status === 'sending',
                        className: "flex-1 sm:flex-none",
                        children: [
                            status === 'sending' ? 'Sending…' : 'Send and book a slot',
                            status === 'sending' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 425,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 419,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/LeadForm.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(LeadForm, "cgrRGUdnmMnmy1uYaz9DICHrLE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = LeadForm;
/* ── Sub-components ───────────────────────────────────────────────────── */ function ChipGroup({ uid, name, label, hint, options, value, error, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "text-sm font-medium text-paper",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-steel-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 457,
                columnNumber: 15
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `cursor-pointer rounded-field border px-3.5 py-2 text-sm transition-colors duration-150 ease-out ${value === option.value ? 'border-signal bg-ink-900 text-paper' : 'border-ink-600 text-steel-200 hover:border-steel-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: name,
                                value: option.value,
                                checked: value === option.value,
                                onChange: ()=>onChange(option.value),
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/LeadForm.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this),
                            option.label
                        ]
                    }, option.value, true, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${uid}-${name}-err`,
                className: "mt-2 text-sm text-err",
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 483,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/LeadForm.tsx",
        lineNumber: 455,
        columnNumber: 5
    }, this);
}
_c1 = ChipGroup;
function Field({ uid, name, label, type = 'text', optional = false, value, error, autoComplete, onChange }) {
    const id = `${uid}-${name}`;
    const errorId = `${id}-err`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-sm font-medium text-paper",
                children: [
                    label,
                    ' ',
                    optional ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-steel-400",
                        children: "(optional)"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/LeadForm.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: name,
                type: type,
                value: value,
                autoComplete: autoComplete,
                "aria-invalid": error ? true : undefined,
                "aria-describedby": error ? errorId : undefined,
                onChange: (e)=>onChange(e.target.value),
                className: `mt-2 h-12 w-full rounded-field border bg-ink-900 px-4 text-sm text-paper transition-colors duration-150 ease-out placeholder:text-ink-500 focus:outline-none ${error ? 'border-err' : 'border-ink-600 hover:border-steel-400 focus:border-steel-400'}`
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: errorId,
                className: "mt-2 text-sm text-err",
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/web/components/LeadForm.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/LeadForm.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, this);
}
_c2 = Field;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LeadForm");
__turbopack_context__.k.register(_c1, "ChipGroup");
__turbopack_context__.k.register(_c2, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Reveal({ children, delay = 0, className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            const show = {
                "Reveal.useEffect.show": ()=>{
                    node.dataset.shown = 'true';
                }
            }["Reveal.useEffect.show"];
            // No IntersectionObserver (very old browser, some test runners): show now.
            if (typeof IntersectionObserver === 'undefined') {
                show();
                return;
            }
            const observer = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            show();
                            observer.disconnect();
                        }
                    }
                }
            }["Reveal.useEffect"], {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            });
            observer.observe(node);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${className}`,
        "data-shown": "false",
        style: delay ? {
            transitionDelay: `${delay}ms`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/Reveal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(Reveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_components_0nmj85y._.js.map