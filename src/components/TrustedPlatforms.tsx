"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiSalesforce,
  SiSap,
  SiSpring,
  SiDotnet,
  SiOpenai,
  SiDatabricks,
  SiPython,
  SiGooglecloud,
} from "react-icons/si";
import type { ElementType, ReactNode } from "react";

/* ---- Custom SVG brand icons ---- */

function ServiceNowIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="#81B5A1">
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm0 17.3c-2.5 0-4.8-1.4-5.9-3.6-.2-.4 0-.8.4-1 .4-.2.8 0 1 .4.9 1.7 2.7 2.8 4.5 2.8s3.6-1.1 4.5-2.8c.2-.4.6-.5 1-.4.4.2.5.6.4 1-1.1 2.2-3.4 3.6-5.9 3.6z" />
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="#0078D4">
      <path d="M13.05 4.24L7.56 18.04l-5.06.86L13.05 4.24zM14.17 4.24L21.5 19.76H9.71l4.46-.78L14.17 4.24z" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} fill="#FF9900">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.256-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.863.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.28-.144.616-.264 1.01-.36a4.84 4.84 0 0 1 1.244-.152c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zM3.26 12.156c.263 0 .534-.048.822-.144.288-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.559.408a.518.518 0 0 1-.326-.127c-.064-.056-.12-.168-.168-.32L7.207 5.96a1.553 1.553 0 0 1-.072-.4c0-.168.08-.256.24-.256h.783c.175 0 .296.032.352.128s.103.168.151.32l1.526 6.016 1.414-6.016c.04-.16.088-.264.151-.32.064-.064.192-.128.353-.128h.639c.168 0 .288.032.352.128.064.064.12.168.152.32l1.43 6.088L16 5.96c.048-.16.104-.264.152-.32a.494.494 0 0 1 .352-.128h.742c.16 0 .248.08.248.256 0 .048-.008.096-.016.152a1.64 1.64 0 0 1-.064.248l-2.202 6.152c-.048.16-.104.264-.168.32a.476.476 0 0 1-.327.128h-.687c-.168 0-.287-.04-.351-.128-.064-.08-.12-.168-.152-.328l-1.405-5.855-1.397 5.847c-.04.16-.088.264-.152.328-.064.088-.19.128-.351.128h-.687zM21.544 12.66c-.415 0-.83-.048-1.229-.136-.4-.096-.71-.2-.927-.32-.136-.072-.232-.152-.263-.224a.593.593 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.216.878.28.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.152-.415-.288-.806-.416l-1.157-.36c-.583-.183-1.014-.454-1.277-.806a1.9 1.9 0 0 1-.4-1.157c0-.335.073-.63.216-.886.144-.256.336-.479.575-.655.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.351.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144.112.064.192.128.24.2.048.064.072.152.072.272v.375c0 .168-.064.256-.184.256a.825.825 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.312c-.455 0-.815.072-1.062.224-.248.152-.375.383-.375.694 0 .216.08.4.247.543.168.144.48.288.926.416l1.13.36c.574.183.99.44 1.237.767.248.328.367.703.367 1.117 0 .344-.072.66-.207.942-.144.28-.336.527-.583.726-.248.2-.543.343-.886.44-.36.104-.735.152-1.14.152z" />
    </svg>
  );
}

function OracleIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="#F80000">
      <path d="M8.109 17.278a5.278 5.278 0 1 1 0-10.556h7.782a5.278 5.278 0 0 1 0 10.556zm7.493-2.4a2.878 2.878 0 1 0 0-5.756H8.398a2.878 2.878 0 1 0 0 5.756z" />
    </svg>
  );
}

function CrowdStrikeIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="#FF0000">
      <path d="M2 2l8.5 6.5L2 15h4.5L15 8.5 6.5 2H2zm14 7l-8.5 6.5L16 22h4.5L12 15.5 20.5 9H16z" />
    </svg>
  );
}

function WorkdayIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="#F5A623">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
    </svg>
  );
}

/* ---- Logo item component ---- */
interface LogoItem {
  name: string;
  icon?: ElementType;
  customIcon?: () => ReactNode;
  color: string;
}

function SiIcon({ Icon, color }: { Icon: ElementType; color: string }) {
  return <Icon size={24} color={color} />;
}

/* ---- Platform data ---- */
const row1: LogoItem[] = [
  { name: "ServiceNow", customIcon: ServiceNowIcon, color: "#81B5A1" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "SAP", icon: SiSap, color: "#0FAAFF" },
  { name: "Microsoft Azure", customIcon: AzureIcon, color: "#0078D4" },
  { name: "Amazon AWS", customIcon: AWSIcon, color: "#FF9900" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Oracle", customIcon: OracleIcon, color: "#F80000" },
  { name: "Java / Spring", icon: SiSpring, color: "#6DB33F" },
];

const row2: LogoItem[] = [
  { name: "Microsoft .NET", icon: SiDotnet, color: "#512BD4" },
  { name: "OpenAI / Azure AI", icon: SiOpenai, color: "#10A37F" },
  { name: "CrowdStrike", customIcon: CrowdStrikeIcon, color: "#FF0000" },
  { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
  { name: "Python / ML", icon: SiPython, color: "#3776AB" },
  { name: "Workday", customIcon: WorkdayIcon, color: "#F5A623" },
  { name: "ServiceNow ITSM", customIcon: ServiceNowIcon, color: "#81B5A1" },
  { name: "Salesforce CPQ", icon: SiSalesforce, color: "#00A1E0" },
];

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-300 shrink-0 cursor-default select-none">
      <div className="flex items-center justify-center w-8 h-8">
        {item.customIcon ? (
          item.customIcon()
        ) : item.icon ? (
          <SiIcon Icon={item.icon} color={item.color} />
        ) : null}
      </div>
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

export function TrustedPlatforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicate items for seamless infinite loop
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  return (
    <section
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-[#F8FAFF] to-white relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-blue bg-clyrox-blue/8 rounded-full mb-5">
            Trusted Platforms
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-clyrox-dark tracking-tight">
            Certified Across{" "}
            <span className="text-clyrox-gold">16+ Enterprise Platforms</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        {/* Row 1 — scrolls left */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
            {row1Items.map((item, i) => (
              <LogoCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused]">
            {row2Items.map((item, i) => (
              <LogoCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom trust line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 mt-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            100% Certified Consultants
          </span>
          <span className="hidden sm:block w-px h-4 bg-gray-200" />
          <span>W2, C2C & Direct Hire</span>
          <span className="hidden sm:block w-px h-4 bg-gray-200" />
          <span>Deployed within 48 Hours</span>
        </div>
      </motion.div>
    </section>
  );
}
