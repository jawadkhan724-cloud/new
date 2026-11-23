import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/Blocks";
import { find, getPage, paras, type Section } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us & Our Physiotherapy Team",
  description: "Meet the certified physiotherapists, surgeon, speech therapist and hijama therapist behind Home Physio Pro in Rawalpindi & Islamabad.",
  alternates: { canonical: "/about-us/" },
};

const about = getPage("about-us");

function team() {
  const i = about.sections.findIndex((s) => s.heading.startsWith("Meet Our Team"));
  const rest: Section[] = about.sections.slice(i + 1);
  const out: { name: string; role: string; bio: string }[] = [];
  for (let k = 0; k < rest.length; k++) {
    const s = rest[k];
    if (s.blocks.length) {
      const m = s.heading.match(/^(.*?)\s*\((.*)\)$/);
      out.push({ name: m ? m[1] : s.heading, role: m ? m[2] : "", bio: paras(s)[0] ?? "" });
    } else if (rest[k + 1]) {
      out.push({ name: s.heading, role: rest[k + 1].heading.replace(/[()]/g, ""), bio: paras(rest[k + 1])[0] ?? "" });
      k++;
    }
  }
  return out;
}

const initials = (n: string) => n.replace(/^(Dr|Mr|Miss|Mrs|Ms)\.?\s*/i, "").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function About() {
  const welcome = paras(find(about, "Welcome"));
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link href="/">Home</Link> / About</div>
          <h1>Physiotherapy you can trust, in the comfort of home.</h1>
          {welcome.slice(0, 1).map((p) => <p className="lead" key={p}>{p}</p>)}
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Who we are</div>
            <h2>Welcome to Home Physio Pro</h2>
            {welcome.slice(1).map((p) => <p key={p}>{p}</p>)}
            <p className="muted">Serving patients across {site.cities} for {site.years} years.</p>
          </div>
          <div className="grid" style={{ gap: 16 }}>
            <div className="card"><div className="eyebrow">Our vision</div><p style={{ fontSize: "1.05rem" }}>{paras(find(about, "Our Vision"))[0]}</p></div>
            <div className="card"><div className="eyebrow">Our mission</div><p style={{ fontSize: "1.05rem" }}>{paras(find(about, "Our Mission"))[0]}</p></div>
          </div>
        </div>
      </section>

      <section className="block tint" id="team">
        <div className="wrap">
          <div className="head"><div><div className="eyebrow">Meet our team</div><h2>The people who will treat you</h2><p>{paras(find(about, "Meet Our Team"))[0]}</p></div></div>
          <div className="team">
            {team().map((m) => (
              <div className="member" key={m.name}>
                <div className="avatar">{initials(m.name)}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
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
