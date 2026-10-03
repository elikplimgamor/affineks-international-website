import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Affineks International | Your gateway to studying abroad",
    template: "%s | Affineks International",
  },
  description:
    "Expert study-abroad consulting, university applications, and student transition support for Germany, the United States, and the United Kingdom.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNavigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
