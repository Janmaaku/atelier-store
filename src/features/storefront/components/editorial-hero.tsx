import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";

export function EditorialHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="editorial-hero"
      id="top"
    >
      <Image
        alt="Model wearing a refined neutral look in an editorial setting"
        className="object-cover object-[center_30%]"
        fill
        preload
        sizes="100vw"
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2400&q=90"
      />
      <div className="editorial-hero__scrim" />
      <div className="editorial-hero__content">
        <p className="eyebrow">The Autumn Edit · 2026</p>
        <h1 id="hero-title">A study in presence.</h1>
        <p className="max-w-md text-sm leading-6 text-white/80">
          Essential silhouettes, tactile finishes, and considered pieces made
          to move beyond the season.
        </p>
        <ButtonLink
          className="mt-2 min-w-44 border-white text-white"
          href="#new-arrivals"
          variant="secondary"
        >
          Explore the edit
        </ButtonLink>
      </div>
      <p className="editorial-hero__caption">Campaign No. 01 / New season</p>
    </section>
  );
}
