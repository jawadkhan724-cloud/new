"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, services, site, wa } from "@/lib/site";
import { Arrow, Chevron, Close, Clock, Mail, Menu, Phone, ServiceIcon, WhatsApp } from "./Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const over = path === "/";
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h.split("/").slice(0, 2).join("/")));

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="group">
            <a href={`tel:${site.phoneIntl}`}><Phone /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="hide-sm"><Mail /> {site.email}</a>
          </div>
          <div className="group">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Clock /> Home visits 24/7 across {site.cities}</span>
          </div>
        </div>
      </div>
      <header className={`site${over ? " over" : ""}${over && scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="logo" aria-label="Home Physio Pro home">
            <span className="logo-mark"><img src="/logo.svg" alt="" width={40} height={40} /></span>
            <span>Home Physio Pro<small>Physiotherapy at your door</small></span>
          </Link>
          <nav className="main" aria-label="Main">
            {nav.map((n) =>
              n.label === "Services" ? (
                <div className="dd" key={n.href}>
                  <button className={active(n.href) ? "active" : ""} aria-haspopup="true">Services <Chevron /></button>
                  <div className="dd-panel">
                    {services.map((s) => (
                      <Link key={s.slug} href={s.path}>
                        <span className="ico"><ServiceIcon name={s.icon} /></span>
                        <span><b>{s.name}</b><span>{s.blurb.split(",")[0]}.</span></span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} className={active(n.href) ? "active" : ""}>{n.label}</Link>
              )
            )}
          </nav>
          <div className="head-cta">
            <a className="head-tel" href={`tel:${site.phoneIntl}`}><span><Phone /></span><span><small>Call 24/7</small>{site.phone}</span></a>
            <a className="lbtn hide-md" href={wa()} target="_blank" rel="noopener">Book now <Arrow /></a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>{open ? <Close /> : <Menu />}</button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {nav.map((n) => (
          <div key={n.href}>
            <Link href={n.href}>{n.label}</Link>
            {n.label === "Services" && (
              <div className="sub">{services.map((s) => <Link key={s.slug} href={s.path}>{s.name}</Link>)}</div>
            )}
          </div>
        ))}
        <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
          <a className="btn btn-wa" href={wa()} target="_blank" rel="noopener" style={{ justifyContent: "center" }}><WhatsApp /> Book on WhatsApp</a>
          <a className="btn btn-ghost" href={`tel:${site.phoneIntl}`} style={{ justifyContent: "center" }}><Phone /> Call {site.phone}</a>
        </div>
      </div>
    </>
  );
}
