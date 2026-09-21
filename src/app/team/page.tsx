import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/team/TeamGrid";

export const metadata: Metadata = {
  title: `Team | ${site.meta.name}`,
  description: site.meta.description,
};

export default function TeamPage() {
  return (
    <>
      <Section tone="black" className="py-24">
        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">Our Team</h1>
        <p className="mt-4 max-w-2xl text-brand-grey-300">
          Meet the students designing, building, and racing our car.
        </p>
      </Section>

      <Section tone="white">
        <TeamGrid subteams={site.team} />
      </Section>
    </>
  );
}
