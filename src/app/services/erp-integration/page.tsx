import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RefreshCw, Settings, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ERP Integration Services | Clyrox",
  description: "Seamlessly connect your business operations with robust ERP integration.",
};

export default function ERPIntegrationPage() {
  return (
    <main className="min-h-screen bg-clyrox-dark">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clyrox-navy via-clyrox-dark to-clyrox-navy" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-clyrox-gold/10 rounded-full blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <Link href="/#services" className="inline-flex items-center text-clyrox-gold hover:text-white mb-6 text-sm font-semibold tracking-wide transition-colors">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            ERP Integration <span className="text-clyrox-gold">Services</span>
          </h1>
          <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl mb-10">
            Break down data silos. We seamlessly connect your enterprise applications and systems to create a unified, highly efficient operational ecosystem.
          </p>
          <Button asChild className="bg-clyrox-gold hover:bg-clyrox-gold-light text-clyrox-dark font-bold px-8 h-14 text-base shadow-lg shadow-clyrox-gold/25 rounded-xl cursor-pointer">
            <Link href="/#contact">Unify Your Systems <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-clyrox-dark mb-6">About This Service</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Enterprise Resource Planning systems are the backbone of modern business. Their true power is only realized when integrated seamlessly with your other critical software applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our ERP Integration Services ensure real-time data flow between SAP, Oracle, NetSuite, Salesforce, and custom applications, empowering your team with accurate data and automated workflows.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-clyrox-blue/10 text-clyrox-blue flex items-center justify-center shrink-0">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">Automated Workflows</h4>
                  <p className="text-gray-500 text-sm">Eliminate manual data entry and reduce human error across systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">System Synchronization</h4>
                  <p className="text-gray-500 text-sm">Real-time sync across CRM, Finance, HR, and Operations systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-clyrox-dark mb-1">Legacy Modernization</h4>
                  <p className="text-gray-500 text-sm">Migrate from legacy ERP to cloud-native platforms without disruption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
