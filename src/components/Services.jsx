// components/Services.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Lock, Pickaxe, Monitor, Truck } from "lucide-react";

const services = [
  {
    title: "Cloud Computing",
    desc: "Leverage scalable infrastructure to optimize operations and boost flexibility.",
    icon: Cloud,
    colSpan: "md:col-span-2", 
    bg: "bg-blue-50/50"
  },
  {
    title: "IT Security",
    desc: "Advanced cyber security, threat detection, and encryption.",
    icon: Lock,
    colSpan: "md:col-span-1",
    bg: "bg-indigo-50/50"
  },
  {
    title: "Mining Solutions",
    desc: "Smart automation for safer and more efficient mining operations.",
    icon: Pickaxe,
    colSpan: "md:col-span-1",
    bg: "bg-slate-50/50"
  },
  {
    title: "Software Solutions",
    desc: "Custom ERP/CRM development tailored to your specific workflow.",
    icon: Monitor,
    colSpan: "md:col-span-2",
    bg: "bg-purple-50/50"
  },
  {
    title: "Data Center",
    desc: "Secure, always-on storage and recovery at scale.",
    icon: Database,
    colSpan: "md:col-span-1",
    bg: "bg-emerald-50/50"
  },
   {
    title: "Fuel Tracking",
    desc: "Monitor fleet consumption in real-time to reduce loss.",
    icon: Truck,
    colSpan: "md:col-span-2",
    bg: "bg-orange-50/50"
  },
];

const BentoCard = ({ title, desc, icon: Icon, colSpan, bg, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={`${colSpan} group relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${bg} blur-3xl rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150`} />
    
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="mb-6 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Icon className="w-6 h-6 text-slate-900" />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-950/50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
           <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
           <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
             Holistic IT Solutions
           </h2>
           <p className="text-slate-600 dark:text-slate-400">
             From infrastructure to automation, we provide the technology backbone your business needs to grow.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <BentoCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
