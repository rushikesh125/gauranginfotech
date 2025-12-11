"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, HardDrive, Code2, Network, Settings, FileCheck, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Data ---
const services = [
  {
    title: "Cloud Computing",
    desc: "Accelerate digital transformation with end-to-end cloud strategy, migration, and management.",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1
  },
  {
    title: "Data Center Solutions",
    desc: "Enterprise-grade hosting with unmatched reliability, disaster recovery, and high scalability.",
    icon: Server,
    color: "bg-indigo-50 text-indigo-600",
    gradient: "from-indigo-500/20 to-purple-500/20",
    delay: 0.15
  },
  {
    title: "IT Security Services",
    desc: "Comprehensive protection including endpoint defense, threat detection, and compliance support.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
    gradient: "from-emerald-500/20 to-teal-500/20",
    delay: 0.2
  },
  {
    title: "IT Hardware Supply",
    desc: "Premium hardware, storage devices, and networking equipment from trusted global brands.",
    icon: HardDrive,
    color: "bg-slate-50 text-slate-600",
    gradient: "from-slate-500/20 to-gray-500/20",
    delay: 0.25
  },
  {
    title: "Software Development",
    desc: "Custom ERPs, CRMs, and apps built to drive innovation and improve productivity.",
    icon: Code2,
    color: "bg-violet-50 text-violet-600",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    delay: 0.3
  },
  {
    title: "Storage & Networking",
    desc: "Robust networking infrastructure and enterprise-grade storage solutions for seamless operations.",
    icon: Network,
    color: "bg-cyan-50 text-cyan-600",
    gradient: "from-cyan-500/20 to-blue-500/20",
    delay: 0.35
  },
  {
    title: "Managed Services",
    desc: "24/7 monitoring, proactive maintenance, and complete IT management for your business.",
    icon: Settings,
    color: "bg-green-50 text-green-600",
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.4
  },
  {
    title: "IT Auditing Services",
    desc: "Comprehensive audits to assess security posture, compliance, and operational efficiency.",
    icon: FileCheck,
    color: "bg-orange-50 text-orange-600",
    gradient: "from-orange-500/20 to-amber-500/20",
    delay: 0.45
  },
];

const ServiceCard = ({ title, desc, icon: Icon, color, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative h-full bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
  >
    {/* Hover Gradient Background */}
    <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${gradient} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-x-1/2 -translate-y-1/2`} />

    <div className="relative z-10 flex flex-col h-full">
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {desc}
      </p>

      {/* "Learn More" Link */}
      <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
        <span>Explore Solution</span>
        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8"
          >
            <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
            <span className="text-sm font-bold text-indigo-900 tracking-wide uppercase">
              Our Expertise
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8"
          >
            Tailored for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              SMBs & Enterprises
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We empower Small and Medium Businesses with scalable IT solutions—from hardware supply to managed services and everything in between.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-700 shadow-2xl shadow-indigo-500/30">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Expert Help?
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Let's talk about how Gaurang Infotech can simplify and supercharge your business with reliable, customized technology services.
            </p>
            <Button className="h-14 px-10 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-lg shadow-xl shadow-indigo-900/20 hover:-translate-y-1 transition-all">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
