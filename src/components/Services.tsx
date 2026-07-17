import { services, type Service } from "@/config/services";

const icons: Record<Service["icon"], React.ReactNode> = {
  emergency: (
    <path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4zm-1 5v3H8v2h3v3h2v-3h3v-2h-3V8h-2z" />
  ),
  stethoscope: (
    <path d="M6 3v7a4 4 0 008 0V3h-2v7a2 2 0 11-4 0V3H6zm12 8a2 2 0 100 4c.3 0 .7-.1 1-.3V16a4 4 0 01-8 0v-1.1a6 6 0 01-2 0V16a6 6 0 0012 0v-1.3A2 2 0 0018 11z" />
  ),
  lungs: (
    <path d="M11 3h2v7.6l2 1.2V6.5c2.6.8 5 4.3 5 9V20c0 1-1 2-2.2 1.8L14 21v-7l-2-1.2L10 14v7l-3.8.8C5 22 4 21 4 20v-4.5c0-4.7 2.4-8.2 5-9v5.3l2-1.2V3z" />
  ),
  baby: (
    <path d="M12 2a3 3 0 013 3c0 .4-.1.7-.2 1H16a5 5 0 015 5c0 1.5-.7 2.9-1.8 3.8A7 7 0 015 15.2 5 5 0 013 11a5 5 0 015-5h1.2A3 3 0 0112 2zm-3 9a1.2 1.2 0 100 2.4A1.2 1.2 0 009 11zm6 0a1.2 1.2 0 100 2.4A1.2 1.2 0 0015 11zm-5.5 4.5c.9.9 2.1 1.5 2.5 1.5s1.6-.6 2.5-1.5l1 1.1A5.4 5.4 0 0112 18.5a5.4 5.4 0 01-3.5-1.9l1-1.1z" />
  ),
  syringe: (
    <path d="M20 3l1 1-2 2 1 1-1.5 1.5L17 7l-7.5 7.5V17H12l7.5-7.5-1.5-1.5L19.5 6.5 20.5 7.5l1-1L20 3zM8 15l-4 4-1 3 3-1 4-4-2-2z" />
  ),
  heart: (
    <path d="M12 21C6.4 16.8 3 13.4 3 9.5A4.5 4.5 0 017.5 5c1.7 0 3.4 1 4.5 2.5C13.1 6 14.8 5 16.5 5A4.5 4.5 0 0121 9.5c0 3.9-3.4 7.3-9 11.5z" />
  ),
};

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-bold text-brand-600 uppercase tracking-wide text-sm">What we do</p>
        <h2 id="services-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-900">
          Pediatric care, all under one roof
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-brand-800/80">
          From routine wellness visits to specialised treatment, our team is here
          for your child at every stage.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                aria-hidden="true"
                className="inline-grid place-items-center size-12 rounded-2xl bg-brand-50 text-brand-600"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  {icons[s.icon]}
                </svg>
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-brand-800/80">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
