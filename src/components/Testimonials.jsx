"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ramesh S.", role: "CTO, Manufacturing", text: "Excellent service! Gaurang Infotech helped us scale our cloud infrastructure seamlessly and saved costs." },
  { name: "Priya K.", role: "Director, Retail Chain", text: "Highly professional and timely delivery. The team understood our needs and executed flawlessly." },
  { name: "Anjali M.", role: "Founder, FinTech", text: "They provided top-notch security services and proactive monitoring. We finally feel protected online." },
  { name: "Sneha L.", role: "HR Director", text: "The custom ERP they built was user-friendly and integrated smoothly with our operations." },
  { name: "Manish G.", role: "IT Head", text: "Great uptime and support on their data center. We trust them completely with our critical systems." },
  { name: "Vikram P.", role: "CEO, SMB Enterprise", text: "Their hardware supply and networking setup transformed our office infrastructure. Fast delivery and excellent support." },
  { name: "Neha R.", role: "Operations Manager", text: "The managed services package is a game-changer. 24/7 monitoring means we can focus on business, not IT issues." },
  { name: "Aditya M.", role: "Finance Director", text: "The IT audit they conducted revealed critical vulnerabilities. Their recommendations improved our security posture significantly." },
];

const TestimonialCard = ({ name, role, text }) => (
  <div className="w-[350px] my-2 shrink-0 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg mx-4 flex flex-col justify-between hover:bg-white/80 transition-colors duration-300">
    <div>
      <Quote className="w-8 h-8 text-indigo-200 mb-4 fill-indigo-100" />
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-medium">"{text}"</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
        <p className="text-xs text-slate-500 uppercase tracking-wide">{role}</p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24  overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
      <div className="text-center max-w-2xl mx-auto px-6 mb-16">
        <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Client Stories</span>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          See what our partners say about our commitment to excellence.
        </p>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden mask-gradient-x">
        {/* We duplicate the list to ensure seamless looping */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Adjust speed here (higher = slower)
            repeat: Infinity,
          }}
        >
          {/* First set of cards */}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`a-${i}`} {...t} />
          ))}
          {/* Second set of cards (Duplicate) */}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`b-${i}`} {...t} />
          ))}
        </motion.div>
        
        {/* Gradient Fade on Edges for "Cinematic" feel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
