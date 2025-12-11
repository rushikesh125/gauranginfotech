// components/Hero.jsx
"use client";

import React from "react";
import Image from "next/image"; // Optimized Image loading
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

// Animation for the Hero Image (Floating Effect)
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 border border-indigo-100 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-indigo-700 uppercase">
              15+ Years of Excellence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={textVariants}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Future Business
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textVariants}
            className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Gaurang Infotech delivers smart, scalable, and secure IT solutions
            tailored for Small and Medium Businesses. From Hardware Supply to
            Managed Services, we are the experts trusted by enterprises.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button className="h-12 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-base">
              Explore Services
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300 transition-all duration-300 text-base group"
            >
              Contact Us{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={textVariants}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-500">
                Secure
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-500">Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-500">
                Global
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Hero Image */}
        <motion.div
          initial="hidden"
          animate={["visible", "float"]}
          variants={imageVariants}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Glow Effect behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[80px] scale-90" />

          {/* The SVG Image */}
          <div className="relative z-10 w-full max-w-[500px]">
            <Image
              src="/svg/office-amico-hero-png.svg"
              alt="Gaurang Infotech Team Working"
              width={600}
              height={600}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
