export const site = {
  name: "Home Physio Pro",
  url: "https://homephysiopro.com",
  phone: "0313 6127383",
  phoneIntl: "+923136127383",
  whatsapp: "923136127383",
  email: "info@homephysiopro.com",
  facebook: "https://www.facebook.com/share/3SJE7W6t7qC1atEc/",
  price: "Rs 3,000",
  sessionLength: "50 minutes",
  years: "8",
  cities: "Rawalpindi & Islamabad",
  locations: [
    { name: "Hayat Wali Medical Center", detail: "Alqaim Hospital" },
    { name: "Hayat Wali Physiotherapy Clinic", detail: "Health Tree Medical Complex" },
  ],
};

export const wa = (text = "Hello Home Physio Pro, I would like to book a physiotherapy session.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type IconName = "home" | "scalpel" | "woman" | "child" | "brain" | "cup";

export const services: { slug: string; path: string; name: string; short: string; blurb: string; icon: IconName }[] = [
  { slug: "physiotherapy-home-services", path: "/physiotherapy-home-services-in-rawalpindi-and-islamabad/", name: "Physiotherapy Home Services", short: "Home physiotherapy",
    blurb: "A certified physiotherapist comes to your home with the equipment needed, for elderly patients, post-surgery recovery and chronic pain.", icon: "home" },
  { slug: "pre-post-operative-physiotherapy", path: "/pre-and-post-operative-physiotherapy/", name: "Pre & Post Operative Physiotherapy", short: "Pre & post surgery",
    blurb: "Prepare your body before surgery and recover strength, movement and confidence safely afterwards.", icon: "scalpel" },
  { slug: "women-health-physiotherapy", path: "/women-health-physiotherapy/", name: "Women’s Health Physiotherapy", short: "Women’s health",
    blurb: "Pelvic floor care, pregnancy and postnatal recovery and osteoporosis, treated by female physiotherapists.", icon: "woman" },
  { slug: "pediatric-physiotherapy", path: "/pediatric-physiotherapy-in-rawalpindi-and-islamabad/", name: "Pediatric Physiotherapy", short: "Pediatric",
    blurb: "Gentle, play-based therapy that supports children with developmental, neurological and orthopedic needs.", icon: "child" },
  { slug: "neurological-rehabilitation", path: "/neurological-rehabilitation-in-rawalpindi-and-islamabad/", name: "Neurological Rehabilitation", short: "Neuro rehab",
    blurb: "Rehabilitation after stroke, brain injury, Parkinson’s and multiple sclerosis to rebuild balance and movement.", icon: "brain" },
  { slug: "hijama-cupping-therapy", path: "/hijama-cupping-center-in-rawalpindi-and-islamabad/", name: "Hijama / Cupping Therapy", short: "Hijama / cupping",
    blurb: "Hygienic hijama by a qualified therapist for headaches, back and neck pain, fatigue and arthritis.", icon: "cup" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/product/soothex-pain-relief-oil/", label: "Shop" },
  { href: "/about-us/", label: "About" },
  { href: "/blogs/", label: "Blogs" },
  { href: "/contact-us/", label: "Contact" },
];
