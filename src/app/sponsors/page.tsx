import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Sponsors | ${site.meta.name}`,
  description: site.meta.description,
};

const totalPartners = site.sponsors.reduce((sum, tier) => sum + tier.sponsors.length, 0);

export default function SponsorsPage() {
  return (
    <>
      <Section tone="black" className="py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Our Partners</p>
        <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Current Sponsors
        </h1>
        <p className="mt-4 max-w-2xl text-brand-grey-300">
          {`${site.meta.name} wouldn't be possible without the generous support of our ${totalPartners}+ sponsors and partners.`}
        </p>
      </Section>

      <Section tone="white">
        <SponsorGrid tiers={site.sponsors} />
      </Section>

      <Section tone="red">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Become a Sponsor
          </h2>
          <p className="max-w-xl text-brand-white/90">
            Partner with {site.meta.name} and put your brand on a competitive Formula SAE program.
            Reach out to learn about our sponsorship packages.
          </p>
          {site.social.email && (
            <Button href={site.social.email} variant="outline-light">
              Contact Us
            </Button>
          )}
        </div>
      </Section>
    </>
  );
}
