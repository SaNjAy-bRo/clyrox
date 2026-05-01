"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Rocket, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-24 relative overflow-hidden bg-clyrox-dark">
      {/* Background Image - Made highly visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta_bg_premium.png"
          alt="Premium dark IT enterprise background"
          fill
          className="object-cover opacity-80 object-center mix-blend-luminosity"
        />
        {/* Soft overlay to ensure readability without hiding the image */}
        <div className="absolute inset-0 bg-clyrox-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-clyrox-dark via-transparent to-clyrox-dark/80 opacity-90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-gold bg-clyrox-dark/50 backdrop-blur-sm border border-clyrox-gold/20 rounded-full mb-8">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enterprise Staffing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-6">
            Ready to Build Your <br />
            <span className="text-clyrox-gold">Dream Team?</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Stop compromising on talent. Whether you need a single ServiceNow architect or a full-scale Salesforce delivery pod, our pre-vetted consultants deploy within 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-clyrox-gold hover:bg-white text-clyrox-dark font-bold px-8 h-14 text-[1rem] shadow-[0_0_20px_rgba(255,190,50,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-xl"
            >
              <Link href="#contact">
                <Phone className="w-4 h-4 mr-2" />
                Start Hiring
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-clyrox-dark/60 hover:bg-clyrox-dark text-white border border-white/20 hover:border-white/40 font-medium px-8 h-14 text-[1rem] backdrop-blur-md transition-all duration-300 cursor-pointer rounded-xl"
            >
              <Link href="#services">
                <Rocket className="w-4 h-4 mr-2" />
                Explore Roles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-white/60 text-sm font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              200+ Active Consultants
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span>48hr Deployment</span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span>12+ Platforms</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
