import type { GalleryItem } from "@/content/site";
import { SiteImage } from "@/components/ui/SiteImage";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <figure key={`${item.caption}-${index}`} className="group">
          <div className="aspect-square overflow-hidden bg-brand-grey-100 dark:bg-brand-grey-900">
            <SiteImage
              src={item.photo}
              alt={item.caption}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2 text-sm text-brand-grey-500">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
