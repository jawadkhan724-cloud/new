import type { Metadata } from "next";
import Link from "next/link";
import { Checklist, CTA } from "@/components/Blocks";
import { Leaf } from "@/components/Icons";
import OrderBox from "@/components/OrderBox";
import { find, getPage, lists, paras } from "@/lib/content";
import { site } from "@/lib/site";

const p = getPage("soothex-pain-relief-oil");

export const metadata: Metadata = {
  title: "Soothex Pain Relief Oil – Joint, Back & Muscle Pain Relief",
  description: p.description,
  alternates: { canonical: "/product/soothex-pain-relief-oil/" },
  openGraph: { images: ["/images/2025_10_images.jpeg"] },
};

const ingredients = [
  ["Basil, Cardamom & Ginger oils", "Increases blood circulation"],
  ["Eucalyptus & Peppermint oils", "Reduces inflammation and swelling"],
  ["Lavender & Rosemary oils", "Relaxes muscles"],
  ["Spearmint & Wintergreen oils", "Relieves deep tissue pain"],
  ["Sweet Almond, Jojoba & Olive oils", "Moisturises the skin"],
];

export default function Product() {
  const desc = paras(find(p, "Soothex Pain Relief Oil Deep"))[0];
  const how = (paras(find(p, "How to Use"))[0] ?? "").replace(/^Follow these steps to use this product:\s*/, "").split(/Step \d+:\s*/).filter(Boolean);
  const benefits = lists(find(p, "Potential Benefit"));
  const why = lists(find(p, "Why Choose"));
  const review = lists(find(p, "1 review"))[0] ?? "";
  const [who, text] = review.split(/\s–\s[A-Z][a-z]+ \d+, \d{4}\s*/);

  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: "Soothex Pain Relief Oil", image: `${site.url}/images/2025_10_images.jpeg`, description: p.description,
    offers: { "@type": "AggregateOffer", priceCurrency: "PKR", lowPrice: 650, highPrice: 1350, availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <section className="block" style={{ paddingTop: 50 }}>
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / Shop / Soothex Pain Relief Oil</div>
          <div className="product">
            <div className="product-img"><img src="/images/2025_10_images.jpeg" alt="Soothex Pain Relief Oil bottle" /></div>
            <div>
              <span className="badge">Sale</span>
              <h1 style={{ fontSize: "clamp(2.1rem,4vw,3.2rem)" }}>Soothex Pain Relief Oil</h1>
              <p className="lead">{paras(p.sections.find((s) => s.level === 1))[3] ?? desc}</p>
              <OrderBox />
              <div className="review">
                <div className="stars">★★★★★</div>
                <p style={{ margin: "6px 0" }}>“{(text ?? "").trim()}”</p>
                <b style={{ fontSize: ".9rem" }}>{who}</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap split">
          <div>
            <div className="eyebrow">About the oil</div>
            <h2>Deep relief for joint, muscle &amp; back pain</h2>
            <p>{desc}</p>
            <h3 style={{ marginTop: 30 }}>How to use</h3>
            <ol style={{ paddingLeft: 20, color: "var(--ink-2)" }}>{how.map((h) => <li key={h} style={{ marginBottom: 8 }}>{h.trim()}</li>)}</ol>
          </div>
          <div className="grid" style={{ gap: 12 }}>
            {ingredients.map(([n, e]) => (
              <div className="card mini" key={n} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <span className="ico"><Leaf /></span>
                <div><h3 style={{ margin: 0 }}>{n}</h3><p>{e}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <div><div className="eyebrow">Benefits</div><h2>What it helps with</h2><Checklist items={benefits} /></div>
          <div><div className="eyebrow">Why Soothex</div><h2>Recommended by physiotherapists</h2><Checklist items={why} /></div>
        </div>
      </section>
      <CTA title="Need more than pain relief oil?" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
