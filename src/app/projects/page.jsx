"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Cloud, Shield, Pickaxe, MapPin, Database, ArrowRight, Settings, HardDrive } from "lucide-react";

// --- Project Data ---
// --- Project Data ---
const projects = [
  {
    title: "Enterprise Data Center Deployment",
    location: "Pune, Maharashtra",
    desc: "Implemented high-availability, scalable data center infrastructure for a leading logistics company, ensuring 99.99% uptime with secure backup & disaster recovery protocols.",
    tags: ["Infrastructure", "Networking", "Disaster Recovery"],
    icon: Server,
    color: "bg-blue-600",
    shadow: "shadow-blue-500/20",
    featured: true,
  },
  {
    title: "Multi-Cloud Migration",
    location: "E-Commerce Platform",
    desc: "Migrated workloads to a hybrid AWS + Azure setup, reducing operational costs by 35% and boosting performance.",
    tags: ["AWS", "Azure", "Cloud Migration"],
    icon: Cloud,
    color: "bg-purple-600",
    shadow: "shadow-purple-500/20",
  },
  {
    title: "Cyber Security Revamp",
    location: "Financial Sector",
    desc: "Deployed advanced endpoint protection and firewall systems to safeguard sensitive data and meet compliance regulations.",
    tags: ["Security", "Compliance", "Firewall"],
    icon: Shield,
    color: "bg-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    title: "IT Infrastructure Upgrade",
    location: "Manufacturing Unit, Pune",
    desc: "Complete hardware refresh including servers, storage systems, and networking equipment for a medium-scale manufacturing unit.",
    tags: ["Hardware", "Storage", "Networking"],
    icon: HardDrive,
    color: "bg-slate-600",
    shadow: "shadow-slate-500/20",
  },
  {
    title: "Managed IT Services",
    location: "Healthcare Provider",
    desc: "24/7 monitoring and proactive maintenance for critical IT infrastructure, reducing downtime by 60% and improving response times.",
    tags: ["Managed Services", "Monitoring", "Support"],
    icon: Settings,
    color: "bg-green-600",
    shadow: "shadow-green-500/20",
  },
  {
    title: "Custom ERP Software",
    location: "Manufacturing Unit, Maharashtra",
    desc: "Full-stack ERP to manage inventory, vendors, production, HR, and accounting.",
    tags: ["ERP", "Full Stack", "Automation"],
    icon: Database,
    color: "bg-cyan-600",
    shadow: "shadow-cyan-500/20",
  },
];


// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Staggering effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Use Spring Physics
      stiffness: 100,
      damping: 20,
    },
  },
};

// --- Featured Project Card (Glassmorphism + Bento Layout) ---
const FeaturedProject = ({ project }) => (
  <motion.div
    variants={itemVariants}
    className="col-span-full rounded-[2.5rem] overflow-hidden group relative transition-all duration-300
      bg-white/70 backdrop-blur-xl border border-white/20 shadow-xl shadow-slate-900/10
      hover:-translate-y-1 hover:shadow-2xl" // Cinematic Depth + Micro-Interaction
  >
    {/* Colored Blur Glow */}
    <div className={`absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full blur-[70px] ${project.color.replace('bg-', 'bg-')}/50 opacity-50 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:scale-125`} />

    <div className="relative grid md:grid-cols-3 gap-0 p-8 md:p-12">
      {/* Visual Side (Bento Style) - Takes 1/3 space on desktop */}
      <div className={`col-span-full md:col-span-1 h-[200px] md:h-full rounded-2xl ${project.color} flex flex-col items-center justify-center p-6 text-center shadow-lg ${project.shadow} transition-all duration-300`}>
        <project.icon className="w-16 h-16 text-white/90 mb-3 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
        <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">
          Featured
        </span>
      </div>

      {/* Content Side - Takes 2/3 space on desktop */}
      <div className="col-span-full md:col-span-2 md:pl-12 pt-6 md:pt-0 flex flex-col justify-center">
        {/* Captions/Labels */}
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-3 font-semibold tracking-widest uppercase">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-indigo-700 transition-colors">
          {project.title}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
          {project.desc}
        </p>
        
        {/* Tags - Pill shaped, low opacity background */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-indigo-100/70 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Button/Call to Action - Micro-Interaction on hover */}
        <button className="self-start flex items-center gap-2 text-indigo-600 font-bold group/btn transition-colors hover:text-indigo-800">
          <span className="text-lg">View Case Study</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </motion.div>
);

// --- Standard Project Card (Glassmorphism) ---
const ProjectCard = ({ project }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 p-8 flex flex-col 
      shadow-xl shadow-slate-900/5 hover:shadow-xl hover:shadow-indigo-500/10 
      hover:-translate-y-1 transition-all duration-300 group" // Cinematic Depth + Micro-Interaction
  >
    {/* Icon Container */}
    <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-6 shadow-md ${project.shadow} group-hover:scale-95 transition-transform duration-300`}>
      <project.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
    </div>

    {/* Location/Label */}
    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3 font-semibold tracking-widest uppercase">
      <MapPin className="w-3 h-3" />
      <span>{project.location}</span>
    </div>

    {/* Title */}
    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-600 transition-colors">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
      {project.desc}
    </p>

    {/* Tags - Pill shaped, low opacity background */}
    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
      {project.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 bg-slate-100/70 text-slate-700 text-xs font-medium rounded-full hover:bg-indigo-100/70 hover:text-indigo-700 transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const featured = projects.find(p => p.featured);
  const regular = projects.filter(p => !p.featured);

  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Subtle Gradient/Blob Background - Adds richness and breaks monotony */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-indigo-200/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-200/20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Header with entrance animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative pt-32 pb-16 px-6 text-center z-10"
      >
        {/* Caption/Label */}
        <span className="inline-block px-4 py-1.5 bg-white/70 backdrop-blur-md border border-white/40 text-indigo-700 text-sm font-bold rounded-full mb-6 uppercase tracking-widest shadow-sm">
          Portfolio
        </span>
        {/* Heading - Tight Tracking */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
        </h1>
        {/* Body - Relaxed Line Height */}
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore our success stories and technology deployments across industries. Real solutions driving real growth.
        </p>
      </motion.section>

      {/* Projects Grid (Bento Grid Layout) with staggering animation */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative px-6 pb-24 z-10"
      >
        <div className="max-w-7xl mx-auto grid gap-8">
          {/* Featured Project - Uses the entire first row */}
          {featured && <FeaturedProject project={featured} />}
          
          {/* Regular Projects Grid - Two columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}