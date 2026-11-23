import Link from "next/link";
import { services, site, wa } from "@/lib/site";
import { Arrow, Check, Mail, Phone, Pin, ServiceIcon, WhatsApp } from "./Icons";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo"><span className="logo-mark"><img src="/logo.svg" alt="" width={40} height={40} /></span>Home Physio Pro</div>
            <p>Expert physiotherapy at home and in clinic across {site.cities}, trusted by patients in the twin cities for {site.years} years.</p>
            <a className="btn btn-wa" href={wa()} target="_blank" rel="noopener"><WhatsApp /> WhatsApp us</a>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{services.map((s) => <li key={s.slug}><Link href={s.path}>{s.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about-us/">About us</Link></li>
              <li><Link href="/about-us/#team">Our team</Link></li>
              <li><Link href="/product/soothex-pain-relief-oil/">Shop</Link></li>
              <li><Link href="/blogs/">Blogs</Link></li>
              <li><Link href="/contact-us/">Contact</Link></li>
              <li><a href={site.facebook} target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${site.phoneIntl}`}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.locations.map((l) => <li key={l.name}>{l.name}, {l.detail}</li>)}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Home Physio Pro. All rights reserved.</span>
          <span>Physiotherapy in Rawalpindi &amp; Islamabad</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWA() {
  return <a className="float-wa" href={wa()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><WhatsApp /></a>;
}

export function ServiceCards({ exclude }: { exclude?: string }) {
  return (
    <div className="grid g3">
      {services.filter((s) => s.slug !== exclude).map((s) => (
        <Link key={s.slug} href={s.path} className="card">
          <span className="ico"><ServiceIcon name={s.icon} /></span>
          <h3>{s.name}</h3>
          <p>{s.blurb}</p>
          <span className="more">Learn more <Arrow /></span>
        </Link>
      ))}
    </div>
  );
}

export function Checklist({ items, two }: { items: string[]; two?: boolean }) {
  return <ul className={`checklist ${two ? "two" : ""}`}>{items.map((i) => <li key={i}><Check />{i}</li>)}</ul>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({ title = "Start your recovery today", text = `Book a home visit or clinic session. ${site.price} per ${site.sessionLength} session, with female physiotherapists available.` }: { title?: string; text?: string }) {
  return (
    <section className="block" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="actions">
            <a className="btn btn-light" href={wa()} target="_blank" rel="noopener"><WhatsApp /> Book on WhatsApp</a>
            <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href={`tel:${site.phoneIntl}`}><Phone /> {site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCards() {
  return (
    <div className="contact-list">
      <a href={`tel:${site.phoneIntl}`}><span className="ico"><Phone /></span><span><b>{site.phone}</b><span>Call any time, 24/7</span></span></a>
      <a href={wa()} target="_blank" rel="noopener"><span className="ico" style={{ color: "var(--wa)" }}><WhatsApp /></span><span><b>WhatsApp</b><span>Fastest way to book</span></span></a>
      <a href={`mailto:${site.email}`}><span className="ico"><Mail /></span><span><b>{site.email}</b><span>We reply within a day</span></span></a>
      {site.locations.map((l) => (
        <div className="item" key={l.name}><span className="ico"><Pin /></span><span><b>{l.name}</b><span>{l.detail}</span></span></div>
      ))}
    </div>
  );
}

/** Phone-only bar pinned to the bottom of the screen: the two ways patients book. */
export function MobileBar() {
  return (
    <div className="mbar">
      <a href={`tel:${site.phoneIntl}`}><Phone /> Call now</a>
      <a className="wa" href={wa()} target="_blank" rel="noopener"><WhatsApp /> WhatsApp</a>
    </div>
  );
}
