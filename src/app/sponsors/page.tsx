import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SiteImage } from "@/components/ui/SiteImage";
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
      <div className="relative flex h-[40vh] min-h-[280px] items-end overflow-hidden bg-brand-black">
        <SiteImage
          src="/Gallery/car1.jpg"
          alt="Car #86 with the team's competition awards"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          labelAlign="top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12">
          <h1 className="text-4xl font-black uppercase tracking-tight text-brand-white sm:text-5xl">
            Current Sponsors
          </h1>
          <p className="mt-4 max-w-2xl text-brand-grey-300">
            {`${site.meta.name} wouldn't be possible without the generous support of our ${totalPartners}+ sponsors and partners.`}
          </p>
        </div>
      </div>

      <Section tone="white">
        <div className="mb-12 mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white">
            Thank You
          </h2>
          <p className="mt-3 text-brand-grey-700 dark:text-brand-grey-300">
            Every part on our car, every trip to competition, and every hour in the shop is made
            possible by the companies and organizations below. We're proud to build alongside
            partners who believe in student engineering.
          </p>
        </div>
        <SponsorGrid tiers={site.sponsors} />
      </Section>

      <Section tone="grey">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Why Sponsor Us?
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-black sm:text-4xl dark:text-brand-white">
            Sponsorship Tiers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-grey-500">
            All cash donations are tax-deductible — {site.meta.name} is a 501(c)3 organization.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.sponsorBenefitTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-xl border border-brand-grey-100 bg-brand-white p-6 shadow-sm dark:border-brand-grey-800 dark:bg-brand-black"
            >
              <h3 className="text-lg font-black uppercase tracking-wide text-brand-black dark:text-brand-white">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm font-bold text-brand-red">{tier.threshold}</p>
              <p className="mt-3 text-sm text-brand-grey-500">Logo on car: {tier.logoOnCar}</p>
              {tier.perks.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 border-t border-brand-grey-100 pt-4 dark:border-brand-grey-800">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-sm text-brand-grey-700 dark:text-brand-grey-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-red" />
                      {perk}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
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
