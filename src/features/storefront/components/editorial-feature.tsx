import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

export function EditorialFeature() {
  return (
    <section aria-labelledby="journal-title" className="journal" id="journal">
      <Image
        alt="Editorial view of soft natural fabric and tailoring"
        className="object-cover"
        fill
        sizes="100vw"
        src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=2400&q=88"
      />
      <div className="journal__scrim" />
      <Container className="journal__content" width="wide">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Atelier journal · Vol. 01</p>
          <h2 className="heading-1" id="journal-title">
            The texture of restraint.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/80">
            A closer look at proportion, material, and the quiet decisions that
            give an everyday object lasting character.
          </p>
          <ButtonLink
            className="mt-8 min-w-40 border-white text-white"
            href="#collections"
            variant="secondary"
          >
            Read the story
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
