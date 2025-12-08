"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Pickaxe, Code2, Truck, ArrowRight, Zap } from "lucide-react";
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
    title: "Mining IT Solutions",
    desc: "Tech-enabled platforms for automation, monitoring, and safety in mining operations.",
    icon: Pickaxe,
    color: "bg-orange-50 text-orange-600",
    gradient: "from-orange-500/20 to-amber-500/20",
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
    title: "Fuel & Vehicle Tracking",
    desc: "Real-time GPS tracking to reduce costs, monitor behavior, and improve delivery efficiency.",
    icon: Truck,
    color: "bg-rose-50 text-rose-600",
    gradient: "from-rose-500/20 to-pink-500/20",
    delay: 0.35
  },
];

// --- Components ---

const ServiceCard = ({ title, desc, icon: Icon, color, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ delay, type: "spring", stiffness: 260, damping: 22 }}
    className="group relative h-full rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(79,70,229,0.18)] overflow-hidden transition-shadow duration-500"
  >
    {/* Hover Gradient Background */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className={`absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-br ${gradient} blur-3xl`} />
    </div>

    <div className="relative z-10 flex flex-col h-full p-8">
      {/* Icon Container */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_0_1px_rgba(148,163,184,0.35)] ring-1 ring-white/80 group-hover:scale-110 transition-transform duration-300 ${color}`}>
        <Icon className="w-7 h-7" strokeWidth={1.6} />
      </div>

      <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
        {desc}
      </p>

      {/* "Explore Solution" Link */}
      <button className="inline-flex items-center text-xs font-semibold text-slate-500 group-hover:text-indigo-600 tracking-[0.18em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
        Explore solution
        <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </button>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-24 px-6">
        {/* Layered Background Blobs */}
        <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/25 via-sky-300/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-400/20 via-fuchsia-300/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-300/15 to-transparent blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white/70 shadow-[0_18px_60px_rgba(15,23,42,0.12)] px-6 py-12 sm:px-10 sm:py-16 text-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 mb-8 shadow-sm"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                <Zap className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase">
                Our Expertise
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 240, damping: 26 }}
              className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6"
            >
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                IT Solutions.
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 240, damping: 26 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              We empower businesses with innovation, security, and performance to deliver real business outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (Bento Style) */}
      <section className="px-6 pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={
                  idx === 0
                    ? "lg:col-span-2"
                    : idx === 4
                    ? "lg:row-span-2"
                    : ""
                }
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION (Cinematic & Layered) */}
      <section className="px-6 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 230, damping: 25 }}
          className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-700 shadow-[0_30px_80px_rgba(15,23,42,0.45)] shadow-indigo-500/30"
        >
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Glass Layer */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20" />
          
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Need Expert Help?
            </h2>
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Let's talk about how Narayani Infotech can simplify and supercharge your business with reliable, customized technology services.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button className="h-14 px-10 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-base shadow-[0_18px_45px_rgba(15,23,42,0.35)] hover:-translate-y-1 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600">
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
