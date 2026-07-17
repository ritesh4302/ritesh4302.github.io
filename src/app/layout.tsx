import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { BASE_PATH, hospital } from "@/lib/hospital";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const description =
  "Kaanav Children SuperSpeciality Hospital in Vesu, Surat — 24/7 pediatric emergency, asthma & allergy care, newborn care and vaccinations. Rated 4.9 by 580+ parents on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Kaanav Children SuperSpeciality Hospital | Vesu, Surat",
    template: "%s | Kaanav Children SuperSpeciality Hospital",
  },
  description,
  openGraph: {
    title: "Kaanav Children SuperSpeciality Hospital | Vesu, Surat",
    description,
    type: "website",
    locale: "en_IN",
    images: [
      { url: `${BASE_PATH}/images/hospital/api_photo_1.jpg`, width: 1600, height: 1068 },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: hospital.name,
  image: `${BASE_PATH}/images/hospital/api_photo_1.jpg`,
  telephone: hospital.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: hospital.addressLines.slice(0, 3).join(", "),
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395007",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: hospital.coordinates.lat,
    longitude: hospital.coordinates.lng,
  },
  openingHours: "Mo-Su 00:00-24:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: hospital.rating,
    ratingCount: hospital.reviewCount,
  },
  url: hospital.googleMapsUrl,
  medicalSpecialty: "Pediatric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
