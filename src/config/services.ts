/**
 * Services shown on the homepage. Editable content config — derived from the
 * hospital's Google profile (24-hour children's hospital) and its owner
 * posts/reviews (asthma & allergy care, milk allergy consultation, NICU care).
 * Update freely; the UI renders whatever is listed here.
 */
export interface Service {
  title: string;
  description: string;
  icon: "emergency" | "stethoscope" | "lungs" | "baby" | "syringe" | "heart";
}

export const services: Service[] = [
  {
    title: "24/7 Pediatric Emergency",
    description:
      "Round-the-clock emergency care for children — our doors never close, any day of the week.",
    icon: "emergency",
  },
  {
    title: "General Pediatrics OPD",
    description:
      "Consultations for childhood illnesses, growth and development checks, and preventive care.",
    icon: "stethoscope",
  },
  {
    title: "Asthma & Allergy Care",
    description:
      "Expert diagnosis and long-term management of childhood asthma, milk allergy, and other allergies.",
    icon: "lungs",
  },
  {
    title: "Newborn & NICU Care",
    description:
      "Specialised care for newborns, including support for premature and critically ill infants.",
    icon: "baby",
  },
  {
    title: "Vaccinations",
    description:
      "Complete immunisation schedules for infants and children, with gentle, child-friendly handling.",
    icon: "syringe",
  },
  {
    title: "Child Wellness",
    description:
      "Nutrition guidance, growth monitoring, and wellness programmes for every stage of childhood.",
    icon: "heart",
  },
];
