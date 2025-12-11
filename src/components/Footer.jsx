// components/Footer.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  // Define links explicitly to handle the root path "/" correctly
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesLinks = [
    'Cloud Computing',
    'Data Center',
    'IT Security',
    'Mining Solutions',
    'Fuel Tracking'
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(90deg,#4f46e5_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                G
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Gaurang<span className="text-indigo-600">Infotech</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Delivering smart, scalable, and secure IT solutions driven by 15+ years of industry expertise.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
               {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 hover:bg-indigo-600 text-slate-500 hover:text-white transition-all duration-300">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          {/* 2. Quick Links (Fixed Logic) */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<div>
  <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
  <ul className="space-y-3">
    {['Cloud Computing', 'Data Center', 'IT Security', 'Hardware Supply', 'Managed Services'].map((item) => (
      <li key={item}>
         <Link href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-2 group">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
          {item}
         </Link>
      </li>
    ))}
  </ul>
</div>
          {/* 3. Solutions / Services */}
          {/* <div>
            <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
            <ul className="space-y-3">
              {servicesLinks.map((item) => (
                <li key={item}>
                   <Link href="/services" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
                    {item}
                   </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                   <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="mt-1">Swami Vivekanand Nagar No.4, Wakad, Pimpri-Chinchwad, MH 411057</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                   <Mail className="w-4 h-4 text-indigo-600" />
                 </div>
                <a href="mailto:info@gauranginfotech.com" className="hover:text-indigo-600 font-medium">info@gauranginfotech.com</a>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                   <Phone className="w-4 h-4 text-indigo-600" />
                 </div>
                <a href="tel:+919623447764" className="hover:text-indigo-600 font-medium">+91-9623447764</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {year} Gaurang Infotech. All rights reserved.</p>
          <div className="flex gap-8">
             <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
