import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LayoutTemplate, Smartphone, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Application & Product Development | Clyrox",
  description: "Scalable, high-performance software tailored to your business goals.",
};

export default function ApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen bg-clyrox-dark">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clyrox-navy via-clyrox-dark to-clyrox-navy" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-clyrox-gold/10 rounded-full blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <Link href="/#services" className="inline-flex items-center text-clyrox-gold hover:text-white mb-6 text-sm font-semibold tracking-wide transition-colors">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Application & Product <span className="text-clyrox-gold">Development</span>
          </h1>
          <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl mb-10">
            From concept to deployment, we build scalable, high-performance applications tailored to accelerate your business goals and deliver exceptional user experiences.
          </p>
          <Button asChild className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-bold px-8 h-14 text-base shadow-lg shadow-clyrox-gold/25 rounded-xl cursor-pointer">
            <Link href="/#contact">Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-clyrox-dark mb-6">About This Service</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In today&apos;s fast-paced digital landscape, generic software often falls short. Our Application and Product Development services focus on engineering custom solutions that align perfectly with your unique operational needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a robust enterprise web application, a dynamic mobile app, or a complete product lifecycle build, our team of expert developers and architects deliver secure, scalable, and maintainable code.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-clyrox-blue/10 text-clyrox-blue flex items-center justify-center shrink-0">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">Custom Web Applications</h4>
                  <p className="text-gray-500 text-sm">Enterprise-grade web apps built on modern frameworks like React, Next.js, and .NET.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">Mobile App Development</h4>
                  <p className="text-gray-500 text-sm">Native and cross-platform mobile experiences for iOS and Android.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">API & Microservices</h4>
                  <p className="text-gray-500 text-sm">Scalable backend architecture with Spring Boot, Node.js, and cloud-native services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
