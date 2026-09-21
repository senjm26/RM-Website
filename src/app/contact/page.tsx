import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${site.meta.name}`,
  description: site.meta.description,
};

const socialLinks = [
  { platform: "instagram", href: site.social.instagram },
  { platform: "facebook", href: site.social.facebook },
  { platform: "linkedin", href: site.social.linkedin },
  { platform: "youtube", href: site.social.youtube },
  { platform: "tiktok", href: site.social.tiktok },
] as const;

export default function ContactPage() {
  return (
    <>
      <Section tone="black" className="py-24">
        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-brand-grey-300">{site.contact.intro}</p>
      </Section>

      <Section tone="white">
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">Email</h2>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-2 block text-lg font-semibold text-brand-black hover:text-brand-red dark:text-brand-white"
            >
              {site.contact.email}
            </a>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-widest text-brand-red">
              Location
            </h2>
            <p className="mt-2 text-brand-grey-700 dark:text-brand-grey-300">
              {site.contact.address}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Follow Along
            </h2>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks
                .filter((link) => link.href)
                .map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="text-brand-grey-500 transition-colors hover:text-brand-red"
                  >
                    <SocialIcon platform={link.platform} className="h-6 w-6" />
                  </a>
                ))}
            </div>

            <div className="mt-10">
              <Button href={site.donateCta.href} variant="outline">
                {site.donateCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="grey">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black sm:text-3xl dark:text-brand-white">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-brand-grey-500">
              Let us know whether you're interested in joining or looking to sponsor the team.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Come By</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-brand-black sm:text-4xl dark:text-brand-white">
            Weekly Schedule
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {site.contact.meetings.map((meeting) => (
            <div
              key={meeting.title}
              className="flex flex-col gap-3 border border-brand-grey-100 border-t-4 border-t-brand-red bg-brand-white p-6 shadow-sm dark:border-brand-grey-800 dark:bg-brand-black"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {meeting.day}
              </p>
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-black dark:text-brand-white">
                {meeting.title}
              </h3>
              <p className="text-sm text-brand-grey-500">{meeting.description}</p>
              <div className="mt-auto flex flex-col gap-1 border-t border-brand-grey-100 pt-3 text-sm font-semibold text-brand-black dark:border-brand-grey-800 dark:text-brand-white">
                <span>{meeting.time}</span>
                <span className="text-brand-grey-500">{meeting.location}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
