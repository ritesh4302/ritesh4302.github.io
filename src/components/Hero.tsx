import Image from "next/image";
import { heroImage, hospital } from "@/lib/hospital";
import StarRating from "./StarRating";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/65 to-brand-800/30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40 text-white">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-bold">
          <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
          Open 24 hours &middot; 7 days a week
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Caring for your child, <span className="text-brand-300">every hour of every day</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/90">
          Kaanav Children SuperSpeciality Hospital in Vesu, Surat brings expert
          pediatric care — from everyday checkups to round-the-clock emergencies —
          in a warm, child-friendly environment.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={hospital.phoneHref}
            className="rounded-full bg-white text-brand-900 font-extrabold px-7 py-3.5 text-lg hover:bg-brand-50"
          >
            Call {hospital.phone}
          </a>
          <a
            href={hospital.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/70 text-white font-bold px-7 py-3 text-lg hover:bg-white/10"
          >
            Get directions
          </a>
        </div>

        <a
          href={hospital.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur px-5 py-3 hover:bg-white/20"
        >
          <StarRating rating={hospital.rating} />
          <span className="font-bold">
            {hospital.rating} / 5
            <span className="font-semibold text-white/80">
              {" "}
              &middot; {hospital.reviewCount} Google reviews
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
