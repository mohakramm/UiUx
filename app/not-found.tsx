import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="spotlight flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
        This page isn&apos;t on the itinerary.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        A wrong turn. It happens on the best trips. Everything worth seeing is still a click away.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Back to the start</ButtonLink>
        <ButtonLink href="/notes" variant="secondary">
          Read the field notes
        </ButtonLink>
      </div>
    </div>
  );
}
