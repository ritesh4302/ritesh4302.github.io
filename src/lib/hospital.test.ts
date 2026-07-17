import { describe, expect, it } from "vitest";
import {
  getFeaturedReviews,
  getGalleryImages,
  heroImage,
  hospital,
  reviewSummary,
} from "./hospital";

describe("hospital details", () => {
  it("exposes the core Google profile data", () => {
    expect(hospital.name).toContain("Kaanav Children SuperSpeciality Hospital");
    expect(hospital.rating).toBe(4.9);
    expect(hospital.reviewCount).toBe(580);
    expect(hospital.hoursStatus).toBe("Open 24 hours");
    expect(Object.keys(hospital.weeklyHours)).toHaveLength(7);
    expect(Object.values(hospital.weeklyHours)).toEqual(
      Array(7).fill("Open 24 hours"),
    );
  });

  it("builds a valid tel: href without whitespace", () => {
    expect(hospital.phoneHref).toMatch(/^tel:\+91\d+$/);
  });

  it("builds directions and map-embed URLs from coordinates and place ID", () => {
    expect(hospital.directionsUrl).toContain(`${hospital.coordinates.lat},${hospital.coordinates.lng}`);
    expect(hospital.directionsUrl).toContain(hospital.placeId);
    expect(hospital.mapEmbedUrl).toContain("output=embed");
  });
});

describe("getFeaturedReviews", () => {
  it("returns the 5 Places API reviews with the expected shape", () => {
    const reviews = getFeaturedReviews();
    expect(reviews).toHaveLength(5);
    for (const r of reviews) {
      expect(r.author).toBeTruthy();
      expect(r.rating).toBeGreaterThanOrEqual(1);
      expect(r.rating).toBeLessThanOrEqual(5);
      expect(r.text.length).toBeGreaterThan(0);
      expect(r.relative_time).toBeTruthy();
    }
  });
});

describe("reviewSummary", () => {
  it("matches the aggregate from the Places API", () => {
    expect(reviewSummary).toEqual({ rating: 4.9, count: 580 });
  });
});

describe("getGalleryImages", () => {
  it("excludes api_photo_1 (duplicate of the hero) and includes the owner-post photo", () => {
    const srcs = getGalleryImages().map((i) => i.src);
    expect(srcs).not.toContain("/images/hospital/api_photo_1.jpg");
    expect(srcs).toContain("/images/hospital/hospital_photo_2.jpg");
    expect(srcs).toHaveLength(10); // 9 API photos + owner-post photo
  });

  it("gives every image alt text, public paths, and capped dimensions", () => {
    for (const img of getGalleryImages()) {
      expect(img.alt.length).toBeGreaterThan(0);
      expect(img.src).toMatch(/^\/images\/hospital\/.+\.jpg$/);
      expect(img.width).toBeGreaterThan(0);
      expect(img.width).toBeLessThanOrEqual(1600);
      expect(img.height).toBeGreaterThan(0);
    }
  });
});

describe("heroImage", () => {
  it("points at the full-resolution cover photo with alt text", () => {
    expect(heroImage.src).toBe("/images/hospital/hospital_photo_1.jpg");
    expect(heroImage.width / heroImage.height).toBeCloseTo(7360 / 4912);
    expect(heroImage.alt).toMatch(/Kaanav/);
  });
});
