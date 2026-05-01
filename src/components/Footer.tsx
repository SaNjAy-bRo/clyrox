"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Consulting", href: "/consulting" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "App & Product Dev", href: "/services/application-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "ERP Integration", href: "/services/erp-integration" },
    { label: "Data Migration", href: "/services/data-migration" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-clyrox-navy text-white relative">
      {/* Angular top */}
      <div className="absolute -top-px left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
          <polygon fill="#0F1D44" points="0,40 1440,0 1440,40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-2">
              <span className="text-2xl font-black tracking-wider text-white drop-shadow-sm transition-opacity hover:opacity-80">
                CLYROX
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Enterprise IT consulting & staffing. Certified professionals
              deployed within 48 hours across 12+ platforms.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@clyrox.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-clyrox-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@clyrox.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-clyrox-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                New Jersey, United States
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-clyrox-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-clyrox-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-clyrox-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Clyrox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
