import type { Metadata } from "next";
import Link from "next/link";
import { ContactCards } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us & Book a Physiotherapist",
  description: `Book physiotherapy at home or in clinic in Rawalpindi & Islamabad. Call ${site.phone}, WhatsApp us or email ${site.email}.`,
  alternates: { canonical: "/contact-us/" },
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / Contact</div>
          <h1>Book your physiotherapist</h1>
          <p className="lead">Call, WhatsApp or send the form. We confirm your appointment and send a physiotherapist to your home, or see you at one of our clinics.</p>
        </div>
      </section>
      <section className="block" style={{ paddingTop: 50 }}>
        <div className="wrap split">
          <ContactCards />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
