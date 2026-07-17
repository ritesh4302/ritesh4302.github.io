"use client";

import { useState } from "react";
import { hospital, type Review } from "@/lib/hospital";
import StarRating from "./StarRating";

interface ReviewsProps {
  reviews: Review[];
  rating: number;
  count: number;
}

export default function Reviews({ reviews, rating, count }: ReviewsProps) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const go = (delta: number) =>
    setIndex((i) => (i + delta + reviews.length) % reviews.length);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-16 sm:py-24 bg-brand-50/60"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-brand-600 uppercase tracking-wide text-sm">
          Parent stories
        </p>
        <h2
          id="reviews-heading"
          className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-900"
        >
          Trusted by families across Surat
        </h2>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StarRating rating={rating} size={26} />
          <p className="text-lg font-extrabold text-brand-900">
            {rating} out of 5
            <span className="font-semibold text-brand-800/70">
              {" "}
              &middot; based on {count} Google reviews
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] items-start">
          <figure
            aria-live="polite"
            className="rounded-3xl bg-white border border-brand-100 shadow-sm p-6 sm:p-10"
          >
            <StarRating rating={review.rating} />
            <span className="sr-only">Rated {review.rating} out of 5</span>
            <blockquote className="mt-4 text-lg sm:text-xl text-brand-900 leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid place-items-center size-11 rounded-full bg-brand-100 text-brand-700 font-extrabold"
              >
                {review.author.charAt(0).toUpperCase()}
              </span>
              <span>
                <span className="block font-extrabold text-brand-900">{review.author}</span>
                <span className="block text-sm text-brand-800/70">
                  Google review &middot; {review.relative_time}
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="flex lg:flex-col gap-3" role="group" aria-label="Review navigation">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid place-items-center size-12 rounded-full bg-white border border-brand-200 text-brand-700 hover:bg-brand-600 hover:text-white transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid place-items-center size-12 rounded-full bg-white border border-brand-200 text-brand-700 hover:bg-brand-600 hover:text-white transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Choose review">
            {reviews.map((r, i) => (
              <button
                key={r.time}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Review ${i + 1} of ${reviews.length} by ${r.author}`}
                aria-current={i === index}
                className={`size-3 rounded-full transition-colors ${
                  i === index ? "bg-brand-600" : "bg-brand-200 hover:bg-brand-400"
                }`}
              />
            ))}
          </div>
          <a
            href={hospital.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-700 hover:text-brand-600 underline underline-offset-4"
          >
            Read all {count} reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
