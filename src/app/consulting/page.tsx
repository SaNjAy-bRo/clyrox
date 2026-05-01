import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Users, TrendingUp, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Consulting Services | Clyrox",
  description: "Strategic consulting to help businesses streamline operations, plan digital transformations, and make sound technology decisions.",
};

const consultingServices = [
  {
    icon: Lightbulb,
    title: "Digital Transformation Strategy",
    description: "Navigate the complexities of digital transformation from initial assessment to full-scale implementation and change management.",
    color: "bg-clyrox-gold/10 text-clyrox-gold",
  },
  {
    icon: Users,
    title: "Talent & Workforce Planning",
    description: "Strategic workforce advisory to optimize hiring pipelines, reduce time-to-fill, and build a sustainable acquisition framework.",
    color: "bg-clyrox-blue/10 text-clyrox-blue",
  },
  {
    icon: TrendingUp,
    title: "IT Infrastructure Advisory",
    description: "Expert guidance on cloud migration, infrastructure modernization, and technology stack optimization to maximize ROI.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Target,
    title: "Process Optimization",
    description: "End-to-end business process analysis and re-engineering to eliminate inefficiencies and drive operational excellence.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Accelerate time-to-market for new initiatives",
  "Build scalable systems that grow with your business",
  "Leverage industry best practices and proven frameworks",
  "Access to a global network of domain experts",
  "Data-driven decision making with actionable insights",
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-clyrox-dark">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clyrox-navy via-clyrox-dark to-clyrox-navy" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-clyrox-gold/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-clyrox-blue/10 rounded-full blur-[100px]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-clyrox-gold bg-clyrox-gold/10 border border-clyrox-gold/20 rounded-full mb-6">
            Strategic Advisory
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Expert <span className="text-clyrox-gold">Consulting</span> Services
          </h1>
          <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            We provide strategic consulting to help businesses streamline operations, plan digital transformations, and make sound technology decisions that drive measurable growth.
          </p>
          <Button asChild className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-bold px-8 h-14 text-base shadow-lg shadow-clyrox-gold/25 rounded-xl cursor-pointer">
            <Link href="/#contact">Schedule a Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-clyrox-dark mb-4 text-center">How We Help You Succeed</h2>
          <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-14">
            Our consulting services address the most critical challenges facing modern enterprises.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {consultingServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-clyrox-dark mb-2">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-clyrox-dark mb-6">The Clyrox Advantage</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When you partner with Clyrox for consulting, you gain access to a team that is fully invested in your success.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-clyrox-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-black text-clyrox-gold mb-1">150+</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-black text-clyrox-blue mb-1">98%</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-black text-emerald-600 mb-1">48hr</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Deployment</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-black text-amber-600 mb-1">12+</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
