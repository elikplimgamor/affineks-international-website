import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = { title: "Book a study abroad consultation", description: "Tell Affineks International about your study abroad plans for Germany, the United States, or the United Kingdom." };
const contacts = [
  { label: "Ghana", number: "+233 556 792 922", href: "tel:+233556792922" },
  { label: "United Kingdom", number: "+44 7448 885381", href: "tel:+447448885381" },
  { label: "United States", number: "+1 413 580 7367", href: "tel:+14135807367" },
];

export default function ContactPage() {
  return <main id="main-content">
    <section className="inner-hero"><div className="section-wrap"><span className="eyebrow">Your next step starts here</span><h1>Tell us where you want to go.</h1><p>Share your plans with us. We’ll help you understand the next steps for studying in Germany, the United States, or the UK.</p></div></section>
    <section className="contact-page section-wrap"><div className="contact-layout">
      <div className="contact-intro"><span className="eyebrow">Let’s talk it through</span><h2 className="display-title">A good plan begins with a conversation.</h2><p className="body-copy">Tell us a little about yourself and your goals. You can also reach us directly through any of our international contact lines.</p><div className="contact-info">{contacts.map((contact) => <a href={contact.href} key={contact.label}><Phone aria-hidden="true" size={17} />{contact.label}: {contact.number}</a>)}<a href="mailto:Affineksinternational@gmail.com"><Mail aria-hidden="true" size={17} />Affineksinternational@gmail.com</a></div></div>
      <ConsultationForm />
    </div></section>
  </main>;
}