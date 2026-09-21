import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-grey-100 bg-brand-white/95 backdrop-blur dark:border-brand-grey-900 dark:bg-brand-black/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src={site.meta.logo}
            alt={site.meta.name}
            width={900}
            height={300}
            className="h-9 w-auto dark:hidden"
            priority
          />
          <Image
            src={site.meta.logoDark}
            alt={site.meta.name}
            width={900}
            height={300}
            className="hidden h-9 w-auto dark:block"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-brand-grey-700 transition-colors hover:text-brand-red dark:text-brand-grey-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href={site.donateCta.href} className="text-xs sm:text-sm">
          {site.donateCta.label}
        </Button>
      </div>

      <nav className="flex items-center gap-4 overflow-x-auto border-t border-brand-grey-100 px-6 py-2 lg:hidden dark:border-brand-grey-900">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-brand-grey-700 dark:text-brand-grey-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
