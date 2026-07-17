import { hospital } from "@/lib/hospital";

export default function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-white/10 text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-extrabold text-white text-lg">
            Kaanav Children SuperSpeciality Hospital
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Pediatric superspeciality care in Vesu, Surat. Rated {hospital.rating}/5
            by {hospital.reviewCount}+ parents on Google.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="text-sm">
          <p className="font-extrabold text-white">Quick links</p>
          <ul className="mt-2 space-y-1.5">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li>
              <a
                href={hospital.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Find us on Google Maps
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-extrabold text-white">Reach us</p>
          <ul className="mt-2 space-y-1.5">
            <li>
              <a href={hospital.phoneHref} className="hover:text-white">
                {hospital.phoneIntl}
              </a>
            </li>
            <li>Open 24 hours, all week</li>
            <li>Vesu Canal Rd, Vesu, Surat, Gujarat 395007</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-4 text-xs text-white/60">
          &copy; {new Date().getFullYear()} Kaanav Children SuperSpeciality Hospital, Vesu, Surat.
          Ratings and reviews sourced from Google Maps.
        </p>
      </div>
    </footer>
  );
}
