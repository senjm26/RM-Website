import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Donate | ${site.meta.name}`,
  description: site.meta.description,
};

export default function DonatePage() {
  return (
    <>
      <Section tone="black" className="py-24">
        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">Donate</h1>
        <p className="mt-4 max-w-2xl text-brand-grey-300">{site.donate.intro}</p>
      </Section>

      <Section tone="white">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          {site.donate.url ? (
            <Button href={site.donate.url} variant="primary">
              Give Now
            </Button>
          ) : (
            <div className="flex w-full flex-col items-center gap-4 border-2 border-dashed border-brand-grey-300 p-10 dark:border-brand-grey-700">
              <span className="text-xs font-medium uppercase tracking-wide text-brand-grey-500">
                Add your donation processor link in site.ts to activate this button
              </span>
            </div>
          )}
          <p className="text-sm text-brand-grey-500">
            Prefer to sponsor in-kind, or have questions about giving? Reach out at{" "}
            <a href={`mailto:${site.contact.email}`} className="text-brand-red hover:underline">
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
