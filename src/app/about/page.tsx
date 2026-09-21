import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StatBand } from "@/components/ui/StatBand";
import { SiteImage } from "@/components/ui/SiteImage";

export const metadata: Metadata = {
  title: `About | ${site.meta.name}`,
  description: site.meta.description,
};

export default function AboutPage() {
  const sponsorCount = site.sponsors.reduce((sum, tier) => sum + tier.sponsors.length, 0);
  const stats = site.stats.map((stat) =>
    stat.label === "Sponsors & Partners" ? { ...stat, value: `${sponsorCount}+` } : stat,
  );

  return (
    <>
      <div className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden bg-brand-black">
        <SiteImage
          src={site.about.heroImage.src}
          alt={site.about.heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          labelAlign="top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {site.meta.name}
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-brand-white sm:text-6xl">
            About Us
          </h1>
        </div>
      </div>

      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-brand-grey-700 dark:text-brand-grey-300">
            {site.about.aboutUs}
          </p>
        </div>
      </Section>

      <Section tone="grey">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Our Team</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-black sm:text-4xl dark:text-brand-white">
            {site.about.memberCount} Students, One Car
          </h2>
        </div>
        <StatBand stats={stats} />
        <div className="mt-10 text-center">
          <Button href="/team" variant="outline">
            Meet the Team
          </Button>
        </div>
      </Section>

      <Section tone="black">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {site.about.whatIsFsae.title}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-grey-300">
            {site.about.whatIsFsae.body}
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            {site.about.ourWork.title}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-brand-grey-700 dark:text-brand-grey-300">
            {site.about.ourWork.body}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {site.about.values.map((value) => (
            <div
              key={value.title}
              className="border-t-4 border-brand-red bg-brand-grey-50 p-6 dark:bg-brand-grey-900"
            >
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-black dark:text-brand-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-brand-grey-500">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-brand-black sm:text-4xl dark:text-brand-white">
            Our Subsystems
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-brand-grey-500">
            Every part of the car is owned by a dedicated subsystem team.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.about.subsystems.map((subsystem) => (
            <div
              key={subsystem.name}
              className="rounded-xl border border-brand-grey-100 bg-brand-white p-5 dark:border-brand-grey-800 dark:bg-brand-black"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-red">
                {subsystem.name}
              </h3>
              <p className="mt-1.5 text-sm text-brand-grey-500">{subsystem.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white">
            Our History
          </h2>
          <p className="mt-4 text-brand-grey-700 dark:text-brand-grey-300">
            {site.about.history}
          </p>
        </div>
      </Section>
    </>
  );
}
