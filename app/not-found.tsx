import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="spotlight flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
        This scene got cut.
      </h1>
      <p className="mt-4 max-w-md text-paper-dim">
        The page you&apos;re looking for isn&apos;t in this edit. The good stuff is still on the reel, though.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Back to the opening</ButtonLink>
        <ButtonLink href="/work" variant="secondary">
          Browse case studies
        </ButtonLink>
      </div>
    </div>
  );
}
