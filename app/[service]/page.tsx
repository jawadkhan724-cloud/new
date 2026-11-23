export const dynamicParams = false;
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, Faq, ServiceCards } from "@/components/Blocks";
import { Clock, Phone, ServiceIcon, Users, Wallet, WhatsApp } from "@/components/Icons";
import Sections from "@/components/Sections";
import { faqs, getPage, paras } from "@/lib/content";
import { services, site, wa } from "@/lib/site";

const CTA_RE = /^(start your|schedule your|get started|contact us)/i;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.path.slice(1, -1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = services.find((x) => x.path === `/${service}/`);
  if (!s) return {};
  const slug = s.slug;
  const p = getPage(slug);
  return { title: p.title.replace(/\s*[-|]\s*Home Physio Pro$/i, "").replace("Isalambad", "Islamabad"), description: p.description || s.blurb, alternates: { canonical: s.path } };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const svc = services.find((s) => s.path === `/${service}/`);
  if (!svc) notFound();
  const slug = svc.slug;
  const page = getPage(slug);
  const h1 = page.sections.find((s) => s.level === 1) ?? page.sections[0];
  const intro = paras(h1);
  const body = page.sections.filter((s) => s !== h1 && !CTA_RE.test(s.heading));
  const ctaSec = [...page.sections].reverse().find((s) => CTA_RE.test(s.heading));
  const qa = faqs(page);

  const schema = qa.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qa.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / <Link href="/services/">Services</Link> / {svc.name}</div>
          <div className="ph-grid">
            <div>
              <span className="ico" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: 20, background: "#fff" }}><ServiceIcon name={svc.icon} /></span>
              <h1>{h1.heading.replace("Isalambad", "Islamabad")}</h1>
              {intro.map((p) => <p className="lead" key={p}>{p}</p>)}
              <div className="actions">
                <a className="btn btn-wa" href={wa(`Hello, I would like to book ${svc.name}.`)} target="_blank" rel="noopener"><WhatsApp /> Book on WhatsApp</a>
                <a className="btn btn-ghost" href={`tel:${site.phoneIntl}`}><Phone /> {site.phone}</a>
              </div>
            </div>
            <div className="facts">
              <div><span className="ico"><Wallet /></span><span><b>{site.price} per session</b><span>{site.sessionLength}, all equipment included</span></span></div>
              <div><span className="ico"><Clock /></span><span><b>Available 24/7</b><span>Home visits across {site.cities}</span></span></div>
              <div><span className="ico"><Users /></span><span><b>Female physiotherapists</b><span>Available on request</span></span></div>
            </div>
          </div>
        </div>
      </section>

      <Sections sections={body} />

      {qa.length > 0 && (
        <section className="block">
          <div className="wrap split">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Frequently asked questions</h2>
            </div>
            <Faq items={qa} />
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </section>
      )}

      <section className="block" style={{ paddingTop: qa.length ? 0 : undefined }}>
        <div className="wrap">
          <div className="head"><div><div className="eyebrow">More services</div><h2>Other ways we can help</h2></div></div>
          <ServiceCards exclude={slug} />
        </div>
      </section>

      {ctaSec && ctaSec.heading.length <= 60
        ? <CTA title={ctaSec.heading.replace(/!$/, "")} text={paras(ctaSec)[0] || undefined} />
        : <CTA text={ctaSec?.heading} />}
    </>
  );
}
