// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length > 500) {
      newErrors.message = "Message must be under 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    const value =
      field === "message" ? e.target.value.slice(0, 500) : e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrors({});
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (res.ok && data?.status === "success") {
        setStatus({
          type: "success",
          title: "Enquiry submitted",
          message: "Thank you! We will get back to you soon.",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          title: "Something went wrong",
          message:
            data?.message ||
            "Please try again or contact us directly via phone or email.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        title: "Network error",
        message: "Unable to reach the server. Please try again later.",
      });
    }

    setSubmitting(false);
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Let&apos;s talk about your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              IT challenges.
            </span>
          </h1>
          <p className="text-slate-600 text-lg">
            Tailored solutions for Small and Medium Businesses—from IT hardware,
            storage and networking to managed services and IT audits.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/70 p-6 sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Send us a message
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Share a bit about your requirements. Our team will get back within
              24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition-colors ${
                    errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition-colors ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition-colors ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                  }`}
                  placeholder="+91-XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {form.message.length}/500
                  </span>
                </div>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  className={`w-full rounded-xl border px-3 py-2.5 text-sm outline-none resize-none transition-colors ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                  }`}
                  placeholder="Share a brief about your requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-11 rounded-full bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-70 transition-all"
              >
                {submitting ? "Sending..." : "Submit Enquiry"}
                {!submitting && <ArrowRight className="w-4 h-4" />}
              </Button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </motion.div>

          {/* MAP + CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
              <div className="h-[280px] sm:h-[320px]">
                <iframe
                  title="Gaurang Infotech Location"
                  src="https://maps.google.com/maps?q=Swami%20Vivekanand%20Nagar%20No.4%20%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057&t=m&z=15&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Office</p>
                  <p className="text-slate-500">
                    Swami Vivekanand Nagar No.4, Wakad, Pimpri-Chinchwad, MH
                    411057
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:info@gauranginfotech.com"
                    className="text-slate-500 hover:text-indigo-600"
                  >
                    info@gauranginfotech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a
                    href="tel:+919623447764"
                    className="text-slate-500 hover:text-indigo-600"
                  >
                    +91-9623447764
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {status && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 p-6"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <Info className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    {status.title}
                  </h3>
                  <p className="text-sm text-slate-600">{status.message}</p>
                </div>
                <button
                  onClick={() => setStatus(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  size="sm"
                  className="rounded-full px-4 h-9 bg-slate-900 text-white hover:bg-slate-800"
                  onClick={() => setStatus(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
