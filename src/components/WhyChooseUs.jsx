"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "15+ Years of Industry Expertise",
  "Transparent Communication & Client-First Strategy",
  "Customized, Scalable, and Secure IT Solutions",
  "Round-the-Clock Technical Assistance",
  "Agile Project Execution with Domain Experts",
  "Innovation-Driven Delivery with Long-Term Value",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent -z-10 rounded-r-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Why Partner With Us</span>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Driven by Expertise. <br />
            Trusted by Enterprises.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded by Kavita Singh, Gaurang Infotech brings over 15 years of proven experience. 
            We don't just build software; we build sustainable business growth through technology.
          </p>
          
          <div className="pt-4 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual / Image Side */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative h-[500px] w-full bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50"
        >
            {/* You would place a real image here. For now, a stylish gradient placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
            
            {/* Floating Glass Card inside the image */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
                <p className="font-medium text-lg">"Excellence is not an act, but a habit."</p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">KS</div>
                    <div>
                        <p className="text-sm font-bold">Kavita Singh</p>
                        <p className="text-xs text-indigo-200">Founder, Gaurang Infotech</p>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
