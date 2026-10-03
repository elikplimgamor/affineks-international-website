import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const destinations = ["Germany", "United Kingdom", "United States"];
const phones = [
  { label: "Ghana", number: "+233 556 792 922", href: "tel:+233556792922" },
  { label: "United Kingdom", number: "+44 7448 885381", href: "tel:+447448885381" },
  { label: "United States", number: "+1 413 580 7367", href: "tel:+14135807367" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <Link aria-label="Affineks International home" className="brand-lockup" href="/">
            <span aria-hidden="true" className="brand-mark">A</span>
            <span className="brand-name"><strong>Affineks</strong><span>International</span></span>
          </Link>
          <p>Thoughtful guidance for your next chapter. We help students move confidently from first application to life abroad.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <div className="footer-links">
            <Link href="/services">Our services <ArrowUpRight aria-hidden="true" size={13} /></Link>
            {destinations.map((destination) => <Link href="/#destinations" key={destination}>{destination}</Link>)}
            <Link href="/contact">Book a consultation</Link>
          </div>
        </div>
        <div className="footer-column">
          <h3>Talk to our team</h3>
          <div className="footer-contacts">
            {phones.map((phone) => <a href={phone.href} key={phone.label}><Phone aria-hidden="true" size={14} />{phone.label}: {phone.number}</a>)}
            <a href="mailto:Affineksinternational@gmail.com"><Mail aria-hidden="true" size={14} />Affineksinternational@gmail.com</a>
            <span><MapPin aria-hidden="true" size={14} />Supporting students across borders</span>
          </div>
        </div>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} Affineks International. All rights reserved.</span>
        <span>Study abroad, with a clear plan.</span>
      </div>
    </footer>
  );
}