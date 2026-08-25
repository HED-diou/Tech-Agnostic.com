import { Button, Eyebrow, ArrowRight } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="container-ta flex min-h-[60vh] flex-col justify-center py-24">
      <Eyebrow>error 404</Eyebrow>
      <h1 className="mt-6 text-h1">This page is not part of the stack.</h1>
      <p className="mt-6 text-body-lg text-muted measure-lead">
        The link is broken or the page moved. Both are our fault, not yours.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/">
          Back to the homepage
          <ArrowRight />
        </Button>
        <Button href="/blog" variant="secondary">
          Read the blog
        </Button>
      </div>
    </section>
  );
}
