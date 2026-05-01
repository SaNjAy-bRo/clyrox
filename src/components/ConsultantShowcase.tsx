"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const consultantRoles = [
  {
    category: "ServiceNow",
    roles: ["ITSM Consultant", "CSM Specialist", "HRSD Developer", "SecOps Engineer", "ITOM Architect", "GRC Analyst"],
    count: 65,
    color: "bg-blue-600",
  },
  {
    category: "Salesforce",
    roles: ["Sales Cloud Admin", "Service Cloud Dev", "Marketing Cloud Specialist", "CPQ Architect"],
    count: 50,
    color: "bg-sky-500",
  },
  {
    category: "SAP",
    roles: ["S/4HANA Consultant", "MM/PP Specialist", "FICO Analyst", "ABAP Developer"],
    count: 35,
    color: "bg-indigo-600",
  },
  {
    category: "Multi-Cloud",
    roles: ["AWS Solutions Architect", "Azure DevOps Engineer", "GCP Data Engineer"],
    count: 30,
    color: "bg-violet-600",
  },
  {
    category: "Development",
    roles: ["Java Full-Stack", ".NET Developer", "React/Node Engineer"],
    count: 20,
    color: "bg-emerald-600",
  },
];

function BigCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2500;
    const stepTime = Math.max(Math.floor(duration / target), 16);
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight">
      {count}
      <span className="text-clyrox-gold">+</span>
    </div>
  );
}

export function ConsultantShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="consulting" ref={ref} className="py-24 lg:py-32 bg-clyrox-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-clyrox-blue/20 via-clyrox-dark to-clyrox-dark pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-clyrox-gold/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left - Big counter & Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-gold bg-clyrox-gold/10 border border-clyrox-gold/20 rounded-full mb-8">
                Our Talent Network
              </span>
              
              <div className="flex items-baseline gap-2 mb-6">
                <BigCounter target={200} />
                <span className="text-xl lg:text-2xl font-bold text-white/50 uppercase tracking-wide">Consultants</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Elite IT Professionals, <br />
                <span className="text-clyrox-gold">Ready to Deploy</span>
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed mb-10 text-justify pr-0 lg:pr-6">
                Stop waiting weeks for unvetted talent. We maintain a bench of heavily certified experts across all major platforms, available for W2, C2C, or direct hire within 48 hours.
              </p>
              
              <Button
                asChild
                className="bg-clyrox-gold hover:bg-white text-clyrox-dark font-bold px-8 h-14 rounded-xl cursor-pointer transition-all duration-300 shadow-[0_0_20px_rgba(255,190,50,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
              >
                <Link href="#contact">
                  Hire Our Talent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Role grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {consultantRoles.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-clyrox-gold/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${group.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                    <h4 className="font-bold text-white text-[1.05rem]">
                      {group.category}
                    </h4>
                  </div>
                  <span className="text-2xl font-black text-white/20 group-hover:text-clyrox-gold transition-colors">
                    {group.count}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5 group-hover:bg-white/10 group-hover:text-white transition-colors"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Engagement Models Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-clyrox-blue rounded-2xl p-6 text-white flex flex-col justify-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <Users className="w-8 h-8 text-clyrox-gold mb-4" />
              <h4 className="font-bold text-xl mb-2">
                Flexible Engagement
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                W2, Corp-to-Corp, and Direct Hire models supported. SOW project teams deployed nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
