import type { GalleryItem } from "@/content/site";
import { SiteImage } from "@/components/ui/SiteImage";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={`${item.caption}-${index}`}
          className="aspect-[3/2] overflow-hidden rounded-lg bg-brand-grey-900"
        >
          <SiteImage
            src={item.photo}
            alt={item.caption}
            width={600}
            height={400}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
