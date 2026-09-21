import type { GalleryItem } from "@/content/site";
import { SiteImage } from "@/components/ui/SiteImage";

export function MasonryGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
      {items.map((item, index) => (
        <figure
          key={`${item.photo}-${index}`}
          className="group relative mb-4 overflow-hidden break-inside-avoid rounded-lg bg-brand-grey-900"
        >
          <SiteImage
            src={item.photo}
            alt={item.caption}
            width={item.width}
            height={item.height}
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8 text-sm text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
