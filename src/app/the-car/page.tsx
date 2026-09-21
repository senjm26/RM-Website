import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { CarSpecCard } from "@/components/car/CarSpecCard";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: `The Car | ${site.meta.name}`,
  description: site.meta.description,
};

export default function TheCarPage() {
  const car = site.cars[0];

  return (
    <>
      <div className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden bg-brand-black">
        <SiteImage
          src={car?.heroPhoto ?? ""}
          alt={`${car?.name ?? site.meta.name} on track`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          labelAlign="top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {car?.category} &middot; {car?.year}
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-brand-white sm:text-6xl">
            The Car
          </h1>
        </div>
      </div>

      {car && (
        <Section tone="white">
          <CarSpecCard car={car} />
        </Section>
      )}

      {car?.systems && car.systems.length > 0 && (
        <Section tone="grey">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Under the Skin
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-black sm:text-4xl dark:text-brand-white">
              Systems Breakdown
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {car.systems.map((system) => (
              <div
                key={system.name}
                className="border-t-4 border-brand-red bg-brand-white p-6 dark:bg-brand-black"
              >
                <h3 className="text-lg font-bold uppercase tracking-wide text-brand-black dark:text-brand-white">
                  {system.name}
                </h3>
                <p className="mt-2 text-sm text-brand-grey-500">{system.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section tone="black">
        <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-brand-white">
          In the Shop
        </h2>
        <GalleryGrid items={site.gallery.slice(0, 3)} />
      </Section>
    </>
  );
}
