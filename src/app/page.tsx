import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpenCheck, BriefcaseBusiness, Check, Compass, GraduationCap, Globe2, HeartHandshake, Landmark, Plane, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const destinations = [
  { name: "Germany", tag: "Study in Europe", summary: "Explore globally respected universities and map your student visa journey.", route: "Study visa guidance", image: "photo-1467269204594-9661b134dd2b", alt: "Historic European architecture in Germany" },
  { name: "United States", tag: "Study in the USA", summary: "Find your academic fit and prepare for the I-20 and F-1 visa process.", route: "I-20 & F-1 planning", image: "photo-1485738422979-f5c462d49f74", alt: "New York City skyline across the water" },
  { name: "United Kingdom", tag: "Study in the UK", summary: "Navigate university applications, CAS preparation, and your next steps.", route: "CAS & student route", image: "photo-1513635269975-59663e0ac1ad", alt: "Westminster and Big Ben in London" },
];

const services = [
  { icon: GraduationCap, title: "University admissions", copy: "Shortlist courses, prepare applications, and stay ahead of important deadlines." },
  { icon: BookOpenCheck, title: "Application guidance", copy: "Get careful support with forms, personal statements, and document checklists." },
  { icon: BriefcaseBusiness, title: "Financial documents", copy: "Organize the evidence schools and visa processes may ask you to prepare." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="section-wrap hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-badge"><span className="hero-badge-dot" /> Guidance across Germany, the USA &amp; UK</div>
            <h1 className="hero-title">Your gateway to <em>studying abroad.</em></h1>
            <p>Big plans deserve a clear path. We help you find your next academic home, make a confident application, and prepare for the move.</p>
            <div className="hero-actions"><Link className="button-primary" href="/contact">Book a consultation <ArrowUpRight aria-hidden="true" size={17} /></Link><Link className="button-outline" href="#destinations">Explore destinations <ArrowRight aria-hidden="true" size={16} /></Link></div>
            <div className="hero-note"><div aria-hidden="true" className="avatar-stack"><span>AK</span><span>AM</span><span>EO</span><span>+</span></div><span>Personal guidance, from first question to first day</span></div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.13}>
            <div className="hero-caption"><Globe2 aria-hidden="true" size={15} /> A world of opportunity, made personal</div>
            <div className="hero-photo-main"><Image alt="International students gathered together at a university" fill priority sizes="(max-width: 760px) 76vw, 38vw" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85" /></div>
            <div className="hero-photo-secondary"><Image alt="International students studying together at a university" fill sizes="(max-width: 760px) 42vw, 20vw" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85" /></div>
            <div className="glass-panel hero-float-card"><div className="hero-float-icon"><BadgeCheck aria-hidden="true" size={20} /></div><div><strong>Your next chapter, planned</strong><span>One step at a time</span></div></div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Our student support" className="trust-strip"><div className="section-wrap trust-grid"><div className="trust-item"><Compass aria-hidden="true" size={20} /> Destination planning</div><div className="trust-item"><BookOpenCheck aria-hidden="true" size={20} /> Admissions guidance</div><div className="trust-item"><HeartHandshake aria-hidden="true" size={20} /> Personal support</div><div className="trust-item"><Plane aria-hidden="true" size={20} /> Transition preparation</div></div></section>

      <section className="destinations-section" id="destinations"><div className="section-wrap">
        <Reveal className="section-heading"><div className="section-heading-copy"><span className="eyebrow">Choose your horizon</span><h2 className="display-title">A world of possibility, closer than you think.</h2><p className="body-copy">Compare three sought-after study destinations and get guidance that starts with your goals.</p></div><Link className="text-link" href="/contact">Find your best fit <ArrowRight aria-hidden="true" size={16} /></Link></Reveal>
        <div className="destination-grid">{destinations.map((destination, index) => <Reveal delay={index * 0.08} key={destination.name}><Link aria-label={`Explore study options in ${destination.name}`} className="destination-card" href="/contact"><Image alt={destination.alt} fill sizes="(max-width: 760px) 90vw, 30vw" src={`https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=900&q=80`} /><span aria-hidden="true" className="destination-shade" /><div className="destination-content"><span className="destination-tag">{destination.tag}</span><h3>{destination.name}</h3><p>{destination.summary}</p><div className="destination-meta"><span><Landmark aria-hidden="true" size={13} />{destination.route}</span><ArrowUpRight aria-hidden="true" size={17} /></div></div></Link></Reveal>)}</div>
      </div></section>

      <section className="services-preview" id="services"><div className="section-wrap">
        <div className="services-preview-grid"><Reveal className="services-preview-copy"><span className="eyebrow">More than an application</span><h2 className="display-title">Practical support, at every turning point.</h2><p>From choosing a course to getting your documents in order, you have a real person helping you move forward with purpose.</p><Link className="button-light" href="/services">Explore our services <ArrowRight aria-hidden="true" size={16} /></Link></Reveal>
          <div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <Reveal delay={index * 0.08} key={service.title}><article className="service-row"><div className="service-row-icon"><Icon aria-hidden="true" size={20} /></div><div><h3>{service.title}</h3><p>{service.copy}</p></div></article></Reveal>; })}</div>
        </div>
        <Reveal><aside className="promo-band"><div><span className="eyebrow">A little extra support</span><h3>Have your CAS? Get free financial document support.</h3><p>For students with a Confirmation of Acceptance for Studies, we can help you organize the financial documents for your next steps.</p></div><div aria-hidden="true" className="promo-icon"><Sparkles size={27} /></div></aside></Reveal>
      </div></section>

      <section className="about-section" id="about"><div className="section-wrap about-grid">
        <Reveal className="about-visual"><div className="about-photo"><Image alt="Students sharing ideas while working together at a campus table" fill sizes="(max-width: 760px) 88vw, 42vw" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=85" /></div><div className="about-note"><strong>Made for your journey</strong><span>Clear advice shaped around your goals, timeline, and destination.</span></div></Reveal>
        <Reveal className="about-copy" delay={0.08}><span className="eyebrow">A steady hand, a bigger view</span><h2 className="display-title">Your ambition is personal. Your guidance should be, too.</h2><p className="body-copy">Moving abroad for education means more than getting accepted. We help you navigate the details, make informed choices, and feel prepared for what comes next.</p><ul className="check-list"><li><Check aria-hidden="true" size={17} /> Advice centered on your study goals</li><li><Check aria-hidden="true" size={17} /> Clear application and document checklists</li><li><Check aria-hidden="true" size={17} /> Support across borders and time zones</li></ul><Link className="text-link" href="/contact">Start a conversation <ArrowRight aria-hidden="true" size={16} /></Link></Reveal>
      </div></section>

      <section className="final-cta"><div className="section-wrap final-cta-inner"><div><h2>Your next chapter can start with one conversation.</h2><p>Tell us where you want to go. We’ll help you see what comes next.</p></div><Link className="button-primary" href="/contact">Book a consultation <ArrowUpRight aria-hidden="true" size={16} /></Link></div></section>
    </main>
  );
}