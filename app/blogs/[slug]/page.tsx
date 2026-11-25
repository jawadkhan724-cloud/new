import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/Blocks";
import { fmtDate, getPost, posts } from "@/lib/blogs";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt, alternates: { canonical: `/blogs/${p.slug}/` } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / <Link href="/blogs/">Blogs</Link> / {p.category}</div>
          <h1>{p.title}</h1>
          <p className="lead">{p.category} · {fmtDate(p.date)}</p>
        </div>
      </section>
      <article className="block article" style={{ paddingTop: 50 }}>
        <div className="wrap narrow">
          <div className="article-img"><Image src={p.image} alt="" fill priority sizes="(max-width: 820px) 100vw, 780px" /></div>
          {p.body.map((b, i) =>
            b.h ? <h2 key={i}>{b.h}</h2> : b.list ? <ul key={i}>{b.list.map((x) => <li key={x}>{x}</li>)}</ul> : <p key={i}>{b.p}</p>,
          )}
          <p style={{ marginTop: 36 }}><Link className="lbtn dark" href="/blogs/">← All articles</Link></p>
        </div>
      </article>
      <CTA />
    </>
  );
}
