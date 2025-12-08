"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/40 group">
        
        {/* 1. BOLD VIBRANT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 transition-all duration-500 group-hover:scale-105" />

        {/* 2. TECH GRID OVERLAY (Subtle Detail) */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        
        {/* 3. GLOW ORBS */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full -translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 px-8 py-20 md:py-24 flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span>Transform your business today</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-sm"
          >
            Ready to build the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
              Future of IT?
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join 200+ enterprises leveraging Gaurang Infotech for scalable, secure, and smart solutions. Let's start your journey.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <Button className="h-14 px-8 min-w-[180px] rounded-full bg-white text-indigo-600 hover:bg-indigo-50 text-lg font-bold shadow-xl shadow-indigo-900/20 hover:-translate-y-1 transition-all duration-300">
              Get Started
            </Button>
            
            <Button 
                variant="outline" 
                className="h-14 px-8 min-w-[180px] rounded-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg font-medium hover:-translate-y-1 transition-all duration-300"
            >
              Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
