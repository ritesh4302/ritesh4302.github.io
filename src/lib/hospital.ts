/**
 * Data layer for the extracted Google Maps / Places API data.
 *
 * The JSON sources live at the repo root (`/data`) and are copied into
 * `src/data/` by `scripts/sync-assets.mjs` (wired to predev/prebuild), so the
 * UI reflects refreshed data on the next dev run or build.
 */
import details from "@/data/hospital_details.json";
import reviewsDoc from "@/data/reviews.json";
import photosCatalog from "@/data/photos_catalog.json";

export interface Review {
  author: string;
  profile_photo_url: string;
  rating: number;
  relative_time: string;
  text: string;
  time: number;
}

export interface GalleryImage {
  src: string; // public path served by Next
  alt: string;
  width: number;
  height: number;
  attribution: string | null;
}

/** Matches basePath in next.config.ts; next/image doesn't prefix unoptimized srcs. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const IMG_BASE = `${BASE_PATH}/images/hospital`;

export const hospital = {
  name: details.name as string,
  shortName: "Kaanav Children SuperSpeciality Hospital",
  category: details.category as string,
  fullAddress: details.full_address as string,
  addressLines: details.address_lines as string[],
  phone: details.phone as string,
  phoneIntl: details.phone_intl as string,
  phoneHref: `tel:${(details.phone_intl as string).replace(/\s/g, "")}`,
  rating: details.rating as number,
  reviewCount: details.review_count as number,
  hoursStatus: details.hours.status as string,
  weeklyHours: details.hours.weekly as Record<string, string>,
  coordinates: details.coordinates as { lat: number; lng: number },
  placeId: details.place_id as string,
  googleMapsUrl: details.google_maps_canonical_url as string,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${details.coordinates.lat},${details.coordinates.lng}&destination_place_id=${details.place_id}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${details.coordinates.lat},${details.coordinates.lng}&z=16&output=embed`,
};

export function getFeaturedReviews(): Review[] {
  return reviewsDoc.reviews as Review[];
}

export const reviewSummary = {
  rating: reviewsDoc.summary.rating as number,
  count: reviewsDoc.summary.review_count as number,
};

/** Alt text per gallery slot; falls back to a generic description. */
const GALLERY_ALT: Record<string, string> = {
  api_photo_2: "Reception and waiting area of the hospital",
  api_photo_3: "Interior view of the hospital facility",
  api_photo_4: "Hospital ward with patient beds",
  api_photo_5: "Inside the hospital building",
  api_photo_6: "Front exterior of Kaanav Children SuperSpeciality Hospital",
  api_photo_7: "Hospital interior facilities",
  api_photo_8: "Consultation and care area",
  api_photo_9: "Wide view of the hospital premises",
  api_photo_10: "Hospital facility photo",
  hospital_photo_2:
    "Poster for pediatric asthma and allergy checkups at Kaanav Children Hospital",
};

/**
 * Gallery = the 10 Places API photos + the owner-post photo, minus
 * api_photo_1 (duplicate of the hero cover photo hospital_photo_1).
 */
export function getGalleryImages(): GalleryImage[] {
  const apiPhotos = (photosCatalog.api_photos ?? [])
    .filter((p) => !p.local_path.endsWith("api_photo_1.jpg"))
    .map((p) => {
      const file = p.local_path.split("/").pop()!;
      const key = file.replace(".jpg", "");
      const [w, h] = p.original_size.split("x").map(Number);
      return {
        src: `${IMG_BASE}/${file}`,
        alt: GALLERY_ALT[key] ?? "Kaanav Children SuperSpeciality Hospital photo",
        width: Math.min(w, 1600),
        height: Math.round(Math.min(w, 1600) * (h / w)),
        attribution: p.attribution ?? null,
      };
    });

  return [
    ...apiPhotos,
    {
      src: `${IMG_BASE}/hospital_photo_2.jpg`,
      alt: GALLERY_ALT["hospital_photo_2"],
      width: 582,
      height: 709,
      attribution: hospital.shortName,
    },
  ];
}

export const heroImage = {
  src: `${IMG_BASE}/hospital_photo_1.jpg`,
  alt: "Exterior of Kaanav Children SuperSpeciality Hospital in Vesu, Surat",
  // 7360x4912 source, downscaled to 2560px wide by scripts/sync-assets.mjs
  width: 2560,
  height: 1709,
};
