import { hospital } from "@/lib/hospital";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 bg-brand-900 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-brand-300 uppercase tracking-wide text-sm">
          Visit us
        </p>
        <h2 id="contact-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold">
          Contact &amp; location
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-extrabold text-brand-300">We&apos;re always open</h3>
              <p className="mt-2 text-2xl font-extrabold">
                <span className="inline-block size-3 rounded-full bg-emerald-400 mr-2" aria-hidden="true" />
                Open 24 hours, 7 days a week
              </p>
              <p className="mt-1 text-white/80">
                Emergencies don&apos;t wait for office hours — neither do we.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-brand-300">Phone</h3>
              <a
                href={hospital.phoneHref}
                className="mt-2 inline-block text-2xl font-extrabold hover:text-brand-300"
              >
                {hospital.phoneIntl}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-brand-300">Address</h3>
              <address className="mt-2 not-italic text-white/90 leading-relaxed">
                {hospital.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={hospital.phoneHref}
                className="rounded-full bg-white text-brand-900 font-extrabold px-7 py-3.5 hover:bg-brand-50"
              >
                Call now
              </a>
              <a
                href={hospital.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/60 font-bold px-7 py-3 hover:bg-white/10"
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/15 min-h-80">
            <iframe
              title="Map showing the location of Kaanav Children SuperSpeciality Hospital in Vesu, Surat"
              src={hospital.mapEmbedUrl}
              className="w-full h-full min-h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
