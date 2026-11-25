import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { fmtDate, posts } from "@/lib/blogs";
import { site } from "@/lib/site";

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
          <p className="lead">Practical advice from our physiotherapists on pain relief, rehab after surgery and staying active at home.</p>
        </div>
      </section>
      <section className="block" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="posts">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blogs/${p.slug}/`} className="post-card">
                <div className="pimg"><Image src={p.image} alt="" fill sizes="(max-width: 760px) 100vw, 380px" /></div>
                <div className="pbody">
                  <span className="pmeta">{p.category} · {fmtDate(p.date)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="more">Read article <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
