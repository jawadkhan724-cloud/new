import type { Metadata } from "next";
import Link from "next/link";
import { CTA, ServiceCards } from "@/components/Blocks";
import { children, getPage, paras } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Rawalpindi & Islamabad",
  description: "Home physiotherapy, pre and post-operative rehab, women’s health, pediatric, neurological rehabilitation and hijama in Rawalpindi & Islamabad.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  const specialties = children(getPage("home"), "Our Comprehensive");
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / Services</div>
          <h1>Physiotherapy services in {site.cities}</h1>
          <p className="lead">Six dedicated services and 13 physiotherapy specialties, delivered at your home or in our clinics by certified physiotherapists.</p>
        </div>
      </section>
      <section className="block" style={{ paddingTop: 60 }}>
        <div className="wrap"><ServiceCards /></div>
      </section>
      <section className="block tint">
        <div className="wrap">
          <div className="head"><div><div className="eyebrow">Specialties</div><h2>Everything our physiotherapists treat</h2></div></div>
          <div className="grid g3">
            {specialties.map((s, i) => (
              <div className="card mini" key={s.heading}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.heading}</h3>
                <p>{paras(s)[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={{ height: 96 }} />
      <CTA />
    </>
  );
}
