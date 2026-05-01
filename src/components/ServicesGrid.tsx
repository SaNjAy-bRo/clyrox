"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Settings,
  Cloud,
  Layers,
  Globe,
  Code2,
  Cpu,
  ShieldCheck,
  Database,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Settings,
    title: "ServiceNow",
    description:
      "ITSM, CSM, HRSD, SecOps, ITOM — certified consultants for implementation, customization, and managed services.",
    tag: "Core",
    color: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: Cloud,
    title: "Salesforce",
    description:
      "Sales Cloud, Service Cloud, Marketing Cloud, CPQ, MuleSoft — end-to-end CRM transformation.",
    tag: "Core",
    color: "text-sky-500",
    hoverBg: "group-hover:bg-sky-500",
  },
  {
    icon: Layers,
    title: "SAP",
    description:
      "S/4HANA, MM, PP, FICO, ABAP — enterprise resource planning expertise for complex organizations.",
    tag: "ERP",
    color: "text-indigo-600",
    hoverBg: "group-hover:bg-indigo-600",
  },
  {
    icon: Globe,
    title: "Multi-Cloud",
    description:
      "AWS, Azure, GCP — cloud migration, architecture design, DevOps, and infrastructure-as-code.",
    tag: "Cloud",
    color: "text-violet-600",
    hoverBg: "group-hover:bg-violet-600",
  },
  {
    icon: Code2,
    title: "Java / .NET",
    description:
      "Full-stack enterprise application development with Spring Boot, Microservices, ASP.NET Core.",
    tag: "Dev",
    color: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
  },
  {
    icon: Cpu,
    title: "AI / ML",
    description:
      "Intelligent automation, predictive analytics, NLP, computer vision, and MLOps pipelines.",
    tag: "AI",
    color: "text-amber-600",
    hoverBg: "group-hover:bg-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Threat detection, compliance, identity management, SIEM, and zero-trust architecture.",
    tag: "Security",
    color: "text-rose-600",
    hoverBg: "group-hover:bg-rose-600",
  },
  {
    icon: Database,
    title: "Data Center",
    description:
      "Infrastructure modernization, hybrid cloud integration, disaster recovery, and migration.",
    tag: "Infra",
    color: "text-teal-600",
    hoverBg: "group-hover:bg-teal-600",
  },
];

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFF] to-white" />
      <div className="absolute inset-0 opacity-[0.02]">
        <Image src="/section-pattern.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <div>
              <span className="inline-block px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-blue bg-clyrox-blue/8 rounded-full mb-5">
                Technology Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-clyrox-dark leading-tight tracking-tight">
                Full-Spectrum
                <br />
                <span className="text-clyrox-gold">Technology Services</span>
              </h2>
            </div>
            <p className="text-[1.05rem] text-muted-foreground lg:text-right leading-relaxed">
              100% certified consultants across 12+ enterprise platforms. Click
              any technology to explore detailed capabilities.
            </p>
          </div>
        </motion.div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-clyrox-blue/6 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-gray-300 group-hover:text-clyrox-gold transition-colors duration-300">
                {service.tag}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center mb-4 ${service.hoverBg} group-hover:scale-105 transition-all duration-300`}>
                <service.icon className={`w-5 h-5 ${service.color} group-hover:text-white transition-colors duration-300`} />
              </div>

              <h3 className="text-[1.05rem] font-bold text-clyrox-dark mb-2 flex items-center gap-1.5">
                {service.title}
                <ArrowUpRight className="w-3.5 h-3.5 text-clyrox-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0.5 group-hover:translate-y-0" />
              </h3>

              <p className="text-[0.82rem] text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-clyrox-blue to-clyrox-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
