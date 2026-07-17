import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  getFeaturedReviews,
  getGalleryImages,
  reviewSummary,
} from "@/lib/hospital";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <Reviews
          reviews={getFeaturedReviews()}
          rating={reviewSummary.rating}
          count={reviewSummary.count}
        />
        <Gallery images={getGalleryImages()} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
