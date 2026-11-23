import Image from "next/image";
import Link from "next/link";
import { Checklist, Faq, ServiceCards } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { children, faqs, find, getPage, lists, paras } from "@/lib/content";
import { site, wa } from "@/lib/site";

const home = getPage("home");
// Free Pexels photos by Funkcinės Terapijos Centras (pexels.com/@funkcines-terapijos-centras).
const IMG = {
  hero: "/images/physio-hero.jpg",
  stretch: "/images/physio-leg-stretch.jpg",
  exercise: "/images/physio-exercise.jpg",
  shoulder: "/images/physio-shoulder.jpg",
};

export default function Home() {
  const why = children(home, "Why Choose");
  const conditions = lists(find(home, "What Physical Conditions"));
  const what = paras(find(home, "So, What is"))[0];
  const intro = paras(home.sections[0]);
  const specialties = children(home, "Our Comprehensive");
  const who = lists(find(home, "Who Needs"));
  const benefits = lists(find(home, "What are the benefits"));

  return (
    <>
      {/* HERO */}
      <div className="lhero-wrap">
        <section className="lhero">
          <Image src={IMG.hero} alt="Physiotherapist treating a patient lying on a treatment table" width={2000} height={1334} priority sizes="100vw" />
          <div className="lhero-in">
            <span className="tag light">Physiotherapy in {site.cities}</span>
            <h1>Heal Faster with Our<br /><em><span>Expert Physical Therapy</span></em><br />Doctors</h1>
            <div className="lhero-row">
              <div>
                <p>{intro[0]}</p>
                <div className="hero-actions">
                  <a className="lbtn" href={wa()} target="_blank" rel="noopener">Book on WhatsApp <Arrow /></a>
                  <a className="lbtn ghost" href={`tel:${site.phoneIntl}`}>Call {site.phone}</a>
                </div>
                <ul className="hero-facts"><li><b>{site.years}+</b> years</li><li><b>24/7</b> home visits</li><li><b>{site.price}</b> per session</li></ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BENEFITS */}
      <section className="block">
        <div className="wrap lbenefit">
          <div className="im a"><Image src={IMG.stretch} alt="Physiotherapist guiding a patient through a hamstring stretch" width={1200} height={800} sizes="(max-width: 1020px) 100vw, 480px" /></div>
          <div>
            <span className="tag">Expert physiotherapy services</span>
            <h2>Experience the Benefits of <em>Expert Physiotherapy</em></h2>
            <p>{what}</p>
            <div className="rings">
              <div><span className="r">24/7</span><span><b>Home visits</b><span>Across the twin cities</span></span></div>
              <div><span className="r">DPT</span><span><b>Certified doctors</b><span>Female staff available</span></span></div>
            </div>
            <a className="lbtn dark" href={wa()} target="_blank" rel="noopener">Book a consultation <Arrow /></a>
          </div>
        </div>
      </section>

      {/* WHO NEEDS (original content) */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap lwho">
          <div className="ph"><Image src={IMG.shoulder} alt="Physiotherapist stretching a patient's shoulder" width={1200} height={800} sizes="(max-width: 1020px) 100vw, 520px" /></div>
          <div>
            <span className="tag">Who it helps</span>
            <h2>Who Needs <em>Physical Therapy?</em></h2>
            <p className="muted">{paras(find(home, "Who Needs"))[0]}</p>
            <Checklist items={who} />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex", gap: 36 }}>
              {["Home visits", "Female physiotherapists", "Pain relief", "Certified DPT", "24/7 care", "Better movement"].map((t) => <span key={t}>{t}</span>)}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="block lsvc">
        <div className="wrap">
          <div className="center-head">
            <span className="tag">Physiotherapy care</span>
            <h2>Comprehensive Care <em>For Better Movement</em></h2>
            <p>From post-surgery rehab to children’s therapy and hijama, choose the care you need, at home or in clinic.</p>
          </div>
          <ServiceCards />
          <p style={{ textAlign: "center", marginTop: 34 }}><Link className="lbtn dark" href="/services/">All services <Arrow /></Link></p>
        </div>
      </section>

      {/* 13 SPECIALTIES (original content) */}
      <section className="block">
        <div className="wrap">
          <div className="center-head">
            <span className="tag">Our specialties</span>
            <h2>Our Comprehensive <em>Physiotherapy Services</em></h2>
            <p>{paras(find(home, "Our Comprehensive"))[0]}</p>
          </div>
          <div className="spec">
            {specialties.map((x, i) => (
              <div key={x.heading}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{x.heading}</h3>
                <p>{paras(x)[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="block">
        <div className="wrap">
          <div className="center-head">
            <span className="tag">How it works</span>
            <h2>A Simple Path To <em>Better Movement</em></h2>
          </div>
          <div className="lhow">
            <ol>
              <li><small>01</small><h3>Book an appointment</h3><p>Message us on WhatsApp or call {site.phone}. Choose a home visit or a clinic session at a time that suits you.</p></li>
              <li><small>02</small><h3>Start your treatment</h3><p>A certified physiotherapist assesses your condition and starts a treatment plan made for you.</p></li>
              <li><small>03</small><h3>Move and feel better</h3><p>Regular sessions and a home exercise programme help you recover and stay pain free.</p></li>
            </ol>
            <div className="ph"><Image src={IMG.exercise} alt="Physiotherapist supporting a patient during a balance exercise" width={1200} height={800} sizes="(max-width: 1020px) 100vw, 480px" /></div>
          </div>
        </div>
      </section>

      {/* WHY US (dark) */}
      <section className="block ldark">
        <div className="wrap lstats">
          <div className="st t"><b>{site.years}+</b><span>Years in the twin cities</span></div>
          <div className="lstat-col">
            <div className="st w"><b>24/7</b><span>Home physiotherapy</span></div>
            <div className="st b"><b>13</b><span>Physiotherapy specialties</span></div>
          </div>
          <div>
            <span className="tag light">Why Home Physio Pro</span>
            <h2>The Reliable Choice For <em>Lasting Pain Relief</em></h2>
            <div className="why">
              {why.slice(0, 4).map((w) => (
                <div key={w.heading}><i /><span><b>{w.heading}</b><span>{paras(w)[0]?.split(". ")[0]}.</span></span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="block">
        <div className="wrap lcond">
          <div>
            <span className="tag">Conditions we treat</span>
            <h2>Back Pain, Frozen Shoulder, <em>Sciatica and More</em></h2>
            <p className="muted">{paras(find(home, "What Physical Conditions"))[0]}</p>
            <a className="lbtn dark" href={wa("Hello, I'd like advice on whether physiotherapy can help my condition.")} target="_blank" rel="noopener">Ask a physiotherapist <Arrow /></a>
          </div>
          <Checklist items={conditions} two />
        </div>
      </section>

      {/* BENEFITS LIST + PRODUCT (original content) */}
      <section className="block lsvc">
        <div className="wrap lcond">
          <div>
            <span className="tag">Benefits</span>
            <h2>What are the Benefits <em>of Physiotherapy?</em></h2>
            <p className="muted">{paras(find(home, "What are the benefits"))[0]}</p>
            <div className="bens">{benefits.map((b) => <span key={b}>{b}</span>)}</div>
          </div>
          <div className="prod">
            <img src="/images/2025_10_images.jpeg" alt="Soothex Pain Relief Oil bottle" />
            <div>
              <span className="tag">Our products</span>
              <h3>Soothex Pain Relief Oil</h3>
              <p className="muted">Natural, fast-absorbing relief for joint, back and muscle pain, recommended by our physiotherapists between sessions.</p>
              <p className="price">Rs 650 – Rs 1,350</p>
              <Link className="lbtn dark" href="/product/soothex-pain-relief-oil/">View product <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap lcond">
          <div>
            <span className="tag">FAQ</span>
            <h2>Questions? <em>We’re Here To Help</em></h2>
            <p className="muted">Can’t find your answer? Message us on WhatsApp and a physiotherapist will reply.</p>
          </div>
          <Faq items={faqs(home)} />
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="lcta">
            <div className="panel">
              <h2>Let’s Get You <em>Moving Again</em></h2>
              <p>Personalised physiotherapy at home or in clinic. {site.price} per {site.sessionLength} session, with female physiotherapists available.</p>
              <div><a className="lbtn dark" href={wa()} target="_blank" rel="noopener">Book on WhatsApp <Arrow /></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
