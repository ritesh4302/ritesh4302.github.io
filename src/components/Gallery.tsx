import Image from "next/image";
import type { GalleryImage } from "@/lib/hospital";

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-brand-600 uppercase tracking-wide text-sm">
          Take a look inside
        </p>
        <h2
          id="gallery-heading"
          className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-900"
        >
          Our facility
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-brand-800/80">
          A bright, welcoming space designed to put children — and parents — at ease.
        </p>

        <ul className="mt-10 columns-2 md:columns-3 gap-4 [&>li]:mb-4">
          {images.map((img) => (
            <li key={img.src} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl bg-brand-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {img.attribution && (
                  <figcaption className="sr-only">Photo: {img.attribution}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
