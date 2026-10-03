import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileBadge, FileCheck2, FileText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Study abroad services", description: "Explore Affineks International's university application, document preparation, and student transition support." };

const steps = [
  { title: "Start with your goals", copy: "We learn about your subject interests, academic background, budget, and preferred destinations so your plan starts in the right place." },
  { title: "Build a shortlist", copy: "Explore universities and programs that align with your ambitions, entry requirements, and application timeline." },
  { title: "Prepare your applications", copy: "Work through application forms, supporting documents, and personal statements with a clear, organized checklist." },
  { title: "Get ready for the next steps", copy: "Plan for offer decisions, CAS or I-20 requirements, visa preparation, and the transition to student life abroad." },
];
const documents = [
  { icon: FileText, title: "Identity & civil documents", copy: "Get help understanding passport applications, birth certificates, and supporting paperwork you may need." },
  { icon: FileBadge, title: "Financial support evidence", copy: "Organize financial documents and affidavits of support for review against the requirements you have been given." },
  { icon: ShieldCheck, title: "Destination requirements", copy: "Keep track of document checklists for your chosen school and destination. Requirements vary by institution and visa route." },
];

export default function ServicesPage() {
  return <main id="main-content">
    <section className="inner-hero"><div className="section-wrap"><span className="eyebrow">A clear plan, a human touch</span><h1>From first thought to first day abroad.</h1><p>One step at a time, our team helps you move through applications and prepare for the practical details of studying overseas.</p></div></section>
    <section className="services-page-content"><div className="section-wrap">
      <Reveal className="section-heading"><div className="section-heading-copy"><span className="eyebrow">Your student journey</span><h2 className="display-title">Support for the whole transition.</h2><p className="body-copy">A thoughtful process brings the big picture and the small details together.</p></div></Reveal>
      <div className="timeline"><div className="timeline-list">{steps.map((step, index) => <Reveal delay={index * 0.06} key={step.title}><article className="timeline-step"><span className="timeline-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article></Reveal>)}</div><Reveal className="timeline-photo"><Image alt="Student preparing study materials and application documents" fill sizes="(max-width: 760px) 90vw, 45vw" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85" /></Reveal></div>
    </div></section>
    <section className="documentation-section"><div className="section-wrap">
      <Reveal className="section-heading"><div className="section-heading-copy"><span className="eyebrow">The details matter</span><h2 className="display-title">Documents, handled with care.</h2><p className="body-copy">Get practical assistance with common student transition documents. We help you understand what to prepare; official decisions remain with schools and authorities.</p></div></Reveal>
      <div className="documentation-grid">{documents.map((item, index) => { const Icon = item.icon; return <Reveal delay={index * 0.07} key={item.title}><article className="documentation-card"><Icon aria-hidden="true" size={23} /><h3>{item.title}</h3><p>{item.copy}</p></article></Reveal>; })}</div>
      <Reveal><aside className="promo-band"><div><span className="eyebrow">For students with CAS</span><h3>Free financial document support for your next steps.</h3><p>Already have your UK Confirmation of Acceptance for Studies? Ask our team about complimentary financial document support.</p></div><div aria-hidden="true" className="promo-icon"><FileCheck2 size={27} /></div></aside></Reveal>
    </div></section>
    <section className="services-cta section-wrap"><span className="eyebrow">Wherever you are in the process</span><h2 className="display-title">Let’s make your next step a clear one.</h2><p className="body-copy">Tell us about your plans, and we’ll help you work out what to focus on first.</p><Link className="button-primary" href="/contact">Talk to an advisor <ArrowRight aria-hidden="true" size={16} /></Link></section>
  </main>;
}