import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Join Us | ${site.meta.name}`,
  description: site.meta.description,
};

export default function JoinPage() {
  return (
    <>
      <Section tone="black" className="py-24">
        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Join {site.meta.name}
        </h1>
        <p className="mt-4 max-w-2xl text-brand-grey-300">{site.join.intro}</p>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 sm:grid-cols-2">
          {site.join.steps.map((step, index) => (
            <div key={step.title}>
              <div className="text-4xl font-black text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-brand-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-brand-grey-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white">
            What We Look For
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {site.join.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2 text-brand-grey-700 dark:text-brand-grey-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-brand-red" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="red">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="max-w-xl text-brand-white/90">
            See our full weekly meeting schedule and shop hours on the Contact page.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${site.join.contact.email}`} variant="outline-light">
              Email {site.join.contact.email}
            </Button>
            <Button href="/contact" variant="outline-light">
              Meeting Schedule
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
