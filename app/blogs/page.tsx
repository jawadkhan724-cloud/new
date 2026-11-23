import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Physiotherapy Blog & Health Tips",
  description: `Physiotherapy guides and recovery tips from the Home Physio Pro team in ${site.cities}.`,
  alternates: { canonical: "/blogs/" },
};

export default function BlogsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / Blogs</div>
          <h1>Physiotherapy guides &amp; recovery tips</h1>
          <p className="lead">Practical advice from our physiotherapists on pain relief, rehab after surgery, women’s health and staying active at home.</p>
        </div>
      </section>
      <section className="block" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="grid g3">
            {services.map((s) => (
              <Link key={s.slug} href={s.path} className="card">
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <span className="more">Read guide <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
