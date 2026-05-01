"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Settings,
  Cloud,
  Code2,
  ShieldCheck,
  BarChart3,
  Database,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "ServiceNow Specialists",
    description: "ITSM, CSM, HRSD, SecOps, and custom application development by CSA & CIS certified experts.",
    icon: Settings,
    color: "bg-emerald-500",
  },
  {
    title: "Salesforce Transformation",
    description: "Sales Cloud, Service Cloud, CPQ, and MuleSoft integration for full-cycle CRM modernization.",
    icon: Cloud,
    color: "bg-blue-500",
  },
];

const capabilities = [
  { icon: Code2, title: "Java / .NET", desc: "Enterprise Dev" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "SecOps & GRC" },
  { icon: BarChart3, title: "SAP Solutions", desc: "S/4HANA & BTP" },
  { icon: Database, title: "Cloud & Data", desc: "AWS, Azure, GCP" },
];

export function ExcelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:flex md:items-end md:justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-blue bg-clyrox-blue/8 rounded-full mb-5">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clyrox-dark tracking-tight leading-tight">
              Where We <span className="text-clyrox-mid">Excel Most</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We provide highly specialized, certified consultants for the world's most demanding enterprise platforms.
            </p>
          </div>
          <div className="mt-8 md:mt-0 hidden md:block">
            <Link 
              href="#services" 
              className="inline-flex items-center gap-2 text-clyrox-blue font-semibold hover:text-clyrox-mid transition-colors group"
            >
              View all capabilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Large Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-[2rem] overflow-hidden min-h-[400px] lg:min-h-full group"
          >
            <Image
              src="/office_environment.png"
              alt="Modern sleek enterprise IT server room and glass-walled office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clyrox-dark/90 via-clyrox-dark/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20">
                <ShieldCheck className="w-6 h-6 text-clyrox-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Ready</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                Our infrastructure and talent vetting processes meet the strictest security and compliance standards for Fortune 500 deployments.
              </p>
            </div>
          </motion.div>

          {/* Right Panels */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            
            {/* Top 2 Core Services */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-[#F8FAFF] rounded-[2rem] p-8 hover:bg-blue-50/80 transition-colors border border-blue-100/50"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-${service.color.split('-')[1]}-500/20`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-clyrox-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom 4 capabilities grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-clyrox-blue/20 hover:shadow-sm transition-all group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-clyrox-blue/5 transition-colors">
                    <cap.icon className="w-5 h-5 text-gray-500 group-hover:text-clyrox-blue transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyrox-dark text-sm">{cap.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
