"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// --- Custom Hook for Counting Up ---
function useAnimatedCounter(end, duration = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth stop (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(end * easeOut));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return { count, nodeRef };
}

// --- Single Stat Item ---
const StatItem = ({ value, label, suffix = "+" }) => {
  const { count, nodeRef } = useAnimatedCounter(value, 2.5);

  return (
    <div ref={nodeRef} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
        {count}
        <span className="text-indigo-600">{suffix}</span>
      </div>
      <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">
        {label}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function Stats() {
  const statsData = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Projects Done" },
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 99, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="py-12 relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-white/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {statsData.map((stat, idx) => (
              <div key={idx} className={idx % 2 !== 0 ? "pt-8 md:pt-0" : "" /* Mobile spacing tweak */}>
                 <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
