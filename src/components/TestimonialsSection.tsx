"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Clyrox deployed a certified ServiceNow architect within 36 hours. The quality of talent and speed of delivery exceeded our expectations. They've become our long-term staffing partner.",
    author: "Michael R.",
    title: "VP of Information Technology",
    company: "Fortune 500 Financial Services",
    rating: 5,
    initials: "MR",
  },
  {
    quote:
      "Their Salesforce team transformed our entire CRM ecosystem in just 8 weeks. From Sales Cloud to Marketing Cloud, every consultant was certified, professional, and deeply knowledgeable.",
    author: "Sarah L.",
    title: "Chief Technology Officer",
    company: "Healthcare SaaS Company",
    rating: 5,
    initials: "SL",
  },
  {
    quote:
      "200+ consultants, all pre-vetted, all certified — Clyrox is our go-to partner for enterprise staffing. The W2 and C2C flexibility makes scaling our teams effortless.",
    author: "David K.",
    title: "Director of Engineering",
    company: "National Insurance Corporation",
    rating: 5,
    initials: "DK",
  },
  {
    quote:
      "We needed SAP S/4HANA experts for a critical ERP migration. Clyrox delivered a full team of FICO and MM specialists within 48 hours. Outstanding execution from start to finish.",
    author: "Jennifer P.",
    title: "SVP of Digital Transformation",
    company: "Manufacturing Enterprise",
    rating: 5,
    initials: "JP",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 bg-clyrox-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-clyrox-blue/10 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-gold bg-clyrox-gold/10 border border-clyrox-gold/20 rounded-full mb-6">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight">
            What Our Clients <span className="text-clyrox-gold">Say</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Trusted by enterprise leaders across finance, healthcare,
            manufacturing, and technology.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] p-8 md:p-12 min-h-[340px] flex flex-col justify-between">
            {/* Quote icon */}
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 rounded-xl bg-clyrox-gold flex items-center justify-center shadow-lg shadow-clyrox-gold/20">
                <Quote className="w-5 h-5 text-clyrox-dark fill-clyrox-dark" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="mt-4"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-clyrox-gold text-clyrox-gold drop-shadow-sm"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-clyrox-dark leading-relaxed font-medium">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-clyrox-blue to-clyrox-mid border border-gray-100 flex items-center justify-center text-white font-bold text-[1rem] shadow-inner">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="font-bold text-clyrox-dark text-[1rem]">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[current].title},{" "}
                      <span className="text-clyrox-blue font-medium">
                        {testimonials[current].company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? "w-8 h-2 bg-clyrox-gold shadow-[0_0_10px_rgba(255,190,50,0.5)]"
                        : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer text-gray-400 hover:text-clyrox-dark"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer text-gray-400 hover:text-clyrox-dark"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
