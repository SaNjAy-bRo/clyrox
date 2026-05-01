"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Zap, CheckCircle2, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certBadges = [
  { label: "ServiceNow", icon: Shield },
  { label: "Salesforce", icon: Award },
  { label: "SAP", icon: Zap },
  { label: "Azure", icon: CheckCircle2 },
];

const metrics = [
  { value: "200+", label: "Consultants", icon: Users },
  { value: "48hr", label: "Deploy Time", icon: Zap },
  { value: "12+", label: "Platforms", icon: TrendingUp },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-clyrox-dark flex items-center justify-center">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero_bg_premium.png"
          alt="Premium enterprise IT consulting corporate office"
          fill
          className="object-cover object-[75%_center] md:object-center opacity-90"
          priority
          sizes="100vw"
        />
        
        {/* Gradient Overlays for Readability (Dark on mobile, fading left-to-right on desktop) */}
        <div className="absolute inset-0 bg-clyrox-dark/85 lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-clyrox-navy/95 via-clyrox-navy/80 to-transparent" />
        {/* Bottom gradient to ensure footer/next section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-clyrox-dark/95 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-5 lg:mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.8rem] sm:text-sm font-semibold text-white/90 uppercase tracking-wide">
                New Jersey&apos;s Premier IT Partner
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-white lg:leading-[1.1] tracking-tight drop-shadow-sm"
          >
            Enterprise IT
            <br />
            <span className="text-clyrox-gold drop-shadow-md">Consulting</span>{" "}
            <span className="text-white/50">&</span>
            <br />
            <span className="text-clyrox-gold drop-shadow-md">Staffing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 lg:mt-5 text-[1.05rem] lg:text-lg xl:text-xl text-white/80 leading-relaxed max-w-[540px] font-medium drop-shadow-sm text-justify"
          >
            We place certified, pre-vetted technology professionals across ServiceNow, Salesforce, SAP, and 12+ enterprise platforms — deployed to your team within 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-bold px-8 h-12 lg:h-14 text-[1rem] shadow-lg shadow-clyrox-gold/25 hover:shadow-clyrox-gold/40 hover:-translate-y-0.5 transition-all duration-300 rounded-xl cursor-pointer w-full sm:w-auto"
            >
              <Link href="#services">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold px-8 h-12 lg:h-14 text-[1rem] transition-all duration-300 rounded-xl cursor-pointer shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Mobile-only stats row (replaces the hanging glass cards on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex items-center gap-6 lg:hidden"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-clyrox-gold" />
              <div>
                <div className="text-white font-bold text-sm">200+</div>
                <div className="text-white/60 text-[10px] uppercase font-semibold">Consultants</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-clyrox-gold" />
              <div>
                <div className="text-white font-bold text-sm">48hr</div>
                <div className="text-white/60 text-[10px] uppercase font-semibold">Deploy</div>
              </div>
            </div>
          </motion.div>

          {/* Certification badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 lg:mt-8 flex flex-wrap items-center gap-2 lg:gap-3"
          >
            <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-white/50 font-bold mr-1">
              Certified on
            </span>
            {certBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.35 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 cursor-default"
              >
                <badge.icon className="w-3.5 h-3.5 text-clyrox-gold" />
                <span className="text-[11px] lg:text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Content (Clean Minimalist Typography - Hidden on Mobile) */}
        <div className="hidden lg:flex w-2/5 flex-col justify-center items-end relative h-[400px]">
          {/* Abstract background glow instead of heavy cards */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-clyrox-gold/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-full max-w-[340px] space-y-10 relative z-10">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="border-l-[3px] border-clyrox-gold pl-6 py-1"
            >
              <div className="text-5xl font-black text-white mb-1 drop-shadow-md">200+</div>
              <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Certified Consultants</div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="border-l-[3px] border-emerald-400 pl-6 py-1"
            >
              <div className="text-5xl font-black text-white mb-1 drop-shadow-md">48<span className="text-3xl font-bold text-white/70">hr</span></div>
              <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Guaranteed Deployment</div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="border-l-[3px] border-blue-400 pl-6 py-1"
            >
              <div className="text-5xl font-black text-white mb-1 drop-shadow-md">12+</div>
              <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Enterprise Platforms</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
