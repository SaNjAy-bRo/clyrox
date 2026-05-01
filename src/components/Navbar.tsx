"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "Application & Product Development", href: "/services/application-development" },
  { label: "Digital Marketing Services", href: "/services/digital-marketing" },
  { label: "ERP Integration Services", href: "/services/erp-integration" },
  { label: "Data Migration Services", href: "/services/data-migration" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-clyrox-dark/95 backdrop-blur-xl shadow-lg shadow-clyrox-dark/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-black tracking-wider text-white drop-shadow-sm transition-opacity hover:opacity-80">
              CLYROX
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group">
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clyrox-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </span>
              <div className="absolute top-full left-0 mt-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-clyrox-navy border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-xl">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3.5 text-sm text-white/80 hover:text-clyrox-gold hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/consulting" className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group">
              Consulting
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clyrox-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>

            <Link href="/#testimonials" className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group">
              Testimonials
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clyrox-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>

            <Link href="/#contact" className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clyrox-gold rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-semibold px-6 shadow-lg shadow-clyrox-gold/20 hover:shadow-clyrox-gold/40 transition-all duration-300 cursor-pointer"
            >
              <Link href="/#contact">
                Get Started
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-clyrox-dark/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-4"
            >
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-white/90 hover:text-clyrox-gold transition-colors duration-300">
                Home
              </Link>

              {/* Services accordion */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2 text-2xl font-medium text-white/90 hover:text-clyrox-gold transition-colors duration-300"
                >
                  Services <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-center gap-3 mt-3 overflow-hidden"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-white/60 hover:text-clyrox-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/consulting" onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-white/90 hover:text-clyrox-gold transition-colors duration-300">
                Consulting
              </Link>
              <Link href="/#testimonials" onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-white/90 hover:text-clyrox-gold transition-colors duration-300">
                Testimonials
              </Link>
              <Link href="/#contact" onClick={() => setMobileOpen(false)} className="text-2xl font-medium text-white/90 hover:text-clyrox-gold transition-colors duration-300">
                Contact
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-semibold px-8 cursor-pointer"
                >
                  <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
