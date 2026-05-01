"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building2, Layers, Clock, MapPin } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Users, value: 200, suffix: "+", label: "Active Consultants" },
  { icon: Building2, value: 50, suffix: "+", label: "Enterprise Clients" },
  { icon: Layers, value: 12, suffix: "+", label: "Platforms Covered" },
  { icon: Clock, value: 48, suffix: "hr", label: "Deployment Time" },
  { icon: MapPin, value: 0, suffix: "NJ", label: "Headquartered" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || value === 0) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 16);
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  if (value === 0) {
    return <span ref={ref} className="text-4xl lg:text-5xl font-bold text-clyrox-blue">{suffix}</span>;
  }

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-clyrox-blue">
      {count}
      <span className="text-clyrox-gold">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 bg-white border-y border-clyrox-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-clyrox-lighter flex items-center justify-center mb-3 group-hover:bg-clyrox-light transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-clyrox-blue" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-muted-foreground mt-1 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
