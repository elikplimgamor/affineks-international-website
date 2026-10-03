"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Our approach", href: "/#about" },
];

const contactNumbers = [
  { country: "Ghana", display: "+233 556 792 922", href: "tel:+233556792922" },
  { country: "UK", display: "+44 7448 885381", href: "tel:+447448885381" },
  { country: "USA", display: "+1 413 580 7367", href: "tel:+14135807367" },
];

function Brand() {
  return (
    <Link aria-label="Affineks International home" className="brand-lockup" href="/">
      <span aria-hidden="true" className="brand-mark">A</span>
      <span className="brand-name"><strong>Affineks</strong><span>International</span></span>
    </Link>
  );
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="site-topline">
        <div className="section-wrap site-topline-inner">
          <div className="topline-contacts" aria-label="Call our offices">
            {contactNumbers.map((contact) => (
              <a href={contact.href} key={contact.country} aria-label={`${contact.country}: ${contact.display}`}>
                <Phone aria-hidden="true" size={13} /> <span>{contact.country}</span> {contact.display}
              </a>
            ))}
          </div>
          <a className="topline-email" href="mailto:Affineksinternational@gmail.com">
            <Mail aria-hidden="true" size={13} /> Affineksinternational@gmail.com
          </a>
        </div>
      </div>
      <header className="site-header">
        <nav aria-label="Main navigation" className="section-wrap site-nav">
          <Brand />
          <div className="desktop-links">
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="button-primary nav-cta" href="/contact">
            Book a consultation <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              className="mobile-menu"
              exit={{ opacity: 0, height: 0 }}
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <div className="section-wrap mobile-menu-inner">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                    {item.label}<ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                ))}
                <div className="mobile-contact" aria-label="Contact Affineks International">
                  {contactNumbers.map((contact) => (
                    <a href={contact.href} key={contact.country}><Phone aria-hidden="true" size={14} />{contact.country} {contact.display}</a>
                  ))}
                  <a href="mailto:Affineksinternational@gmail.com"><Mail aria-hidden="true" size={14} />Email our team</a>
                </div>
                <Link className="button-primary" href="/contact" onClick={() => setMenuOpen(false)}>
                  Book a consultation <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}