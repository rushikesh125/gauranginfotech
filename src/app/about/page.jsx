"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Zap, Award, Target, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Vision */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              About Narayani Infotech
            </span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight"
          >
            Driving Innovation with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Integrity & Expertise
            </span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Based in Pune, we are a trusted partner for enterprises worldwide. 
            From digital transformation to IT consulting, we empower businesses to stay ahead.
          </motion.p>
        </div>
      </section>

      {/* 2. FOUNDER STORY: Asymmetrical Split */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden group"
          >
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-10" />
             
             {/* Placeholder Image (Replace with Founder Photo or Office Shot) */}
             <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
                <Image 
                  src="/svg/office-amico-hero-png.svg" // Reuse the high-quality SVG or a real photo
                  alt="Kavita Singh - Founder"
                  fill
                  className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
             </div>

            {/* Floating Quote Card - Light Theme Optimized */}
<div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
  
  {/* Quote Icon (Visual Flourish) */}
  <div className="text-indigo-200 mb-2">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
      <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.417 13.593 17.569 13.143V12H15.017C14.464 12 14.017 11.552 14.017 11V3H21.017V11C21.017 16.523 17.884 21 14.017 21ZM5.01697 21L5.01697 18C5.01697 16.896 5.32097 15.923 5.92897 15.081C6.53697 14.239 7.41697 13.593 8.56897 13.143V12H6.01697C5.46397 12 5.01697 11.552 5.01697 11V3H12.017V11C12.017 16.523 8.88397 21 5.01697 21Z" />
    </svg>
  </div>

  <p className="text-lg md:text-xl font-medium italic text-slate-800 mb-6 leading-relaxed">
    "Our goal is to build strong relationships through reliable service, measurable results, and a relentless focus on customer satisfaction."
  </p>
  
  <div className="border-t border-slate-200 pt-4">
     <h4 className="font-bold text-xl text-slate-900">Kavita Singh</h4>
     <p className="text-indigo-600 font-semibold text-sm tracking-wide">
       Founder & CEO <span className="text-slate-300 px-1">|</span> 15+ Years Exp.
     </p>
  </div>
</div>

          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 lg:pl-10"
          >
             <motion.div variants={fadeInUp}>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                 A Legacy of Excellence
               </h2>
               <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-6" />
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                 Founded by <strong>Kavita Singh</strong>, a seasoned IT professional with over 15 years of experience, Narayani Infotech was built on a simple premise: technology should empower, not complicate.
               </p>
             </motion.div>

             <motion.div variants={fadeInUp} className="prose prose-slate dark:prose-invert">
                <p className="text-slate-600 dark:text-slate-400">
                  We specialize in delivering comprehensive IT solutions tailored to suit businesses of all sizes. 
                  Whether it's complex software development, secure cloud infrastructure, or strategic IT consulting, 
                  our approach is always <strong>customer-first</strong>.
                </p>
             </motion.div>

             {/* Stats Row */}
             <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                   <h3 className="text-3xl font-bold text-indigo-600">15+</h3>
                   <p className="text-sm text-slate-500">Years Exp.</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-indigo-600">200+</h3>
                   <p className="text-sm text-slate-500">Projects</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-indigo-600">100%</h3>
                   <p className="text-sm text-slate-500">Commitment</p>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES: Glass Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us?</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">We don't just deliver code; we deliver value, security, and long-term partnership.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "15+ Years Expertise", icon: Award, desc: "Deep industry knowledge backed by a proven track record." },
                { title: "Customer-Centric", icon: HeartHandshake, desc: "Your goals are our priority. We listen, adapt, and deliver." },
                { title: "End-to-End Solutions", icon: Target, desc: "From concept to deployment, we handle the entire lifecycle." },
                { title: "Agile & Scalable", icon: Zap, desc: "Flexible services that grow as your business expands." },
                { title: "Dedicated Support", icon: Users, desc: "Round-the-clock technical assistance whenever you need it." },
                { title: "Security First", icon: Shield, desc: "Uncompromised protection for your data and infrastructure." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: Luminous & Vibrant */}
<section className="py-24 px-6 relative overflow-hidden">
  {/* 1. Vibrant Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700" />
  
  {/* 2. Texture Overlay (Subtle Grid) */}
  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
  
  {/* 3. Floating Glow Orbs */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/30 blur-[100px] rounded-full pointer-events-none" />

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
      Let’s build the future together.
    </h2>
    <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
      One solution at a time. Partner with Gaurang Infotech for a seamless digital transformation journey.
    </p>
    <div className="flex justify-center gap-4">
      <Button className="h-14 px-10 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-lg shadow-xl shadow-indigo-900/20 hover:-translate-y-1 transition-all duration-300">
        Get in Touch
      </Button>
    </div>
  </div>
</section>


    </div>
  );
}
