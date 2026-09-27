"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ShieldAlert, Sparkles, Loader2, ArrowRight } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

export function InquiryForm() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    course: "Cybersecurity Program",
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refId, setRefId] = useState("");
  const [apiError, setApiError] = useState("");

  // Real-time client-side validation
  const validateField = (name: keyof FormFields, value: string): string => {
    switch (name) {
      case "name":
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (value.length > 100) return "Name must not exceed 100 characters.";
        return "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Email address is required.";
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";
      case "phone":
        const phoneRegex = /^[+]?[0-9\s-]{10,18}$/;
        if (!value.trim()) return "Phone number is required.";
        if (value.trim().length < 10) return "Phone number must be at least 10 digits.";
        if (!phoneRegex.test(value.trim())) return "Please enter a valid phone number (e.g. +91 9876543210).";
        return "";
      case "course":
        if (!["Cybersecurity Program", "Full Stack Developer Program", "Dynamics 365 & Power Platform Program", "Cloud & DevSecOps Program", "General Enquiry"].includes(value)) {
          return "Please select a valid course track.";
        }
        return "";
      case "message":
        if (value.trim().length < 10) return "Message must be at least 10 characters.";
        if (value.length > 1000) return "Message must not exceed 1000 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors as user typing
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    
    // Validate all fields
    const newErrors: FieldErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormFields;
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      // Focus on the first element with error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) element.focus();
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          // If server returned structured Zod errors, display them
          const serverErrors: FieldErrors = {};
          Object.keys(result.errors).forEach((key) => {
            const field = key as keyof FormFields;
            serverErrors[field] = result.errors[field]?.[0] || "Invalid field.";
          });
          setErrors(serverErrors);
        } else {
          setApiError(result.message || "Something went wrong. Please try again.");
        }
        setLoading(false);
        return;
      }

      setSuccess(true);
      setRefId(result.referenceId || "PCA-INQUIRY");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "Cybersecurity Program",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setApiError("Network connection error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-2xl border border-cyan-300/15 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md overflow-hidden sm:p-8">
      {/* Subtle local glow */}
      <div className="absolute -right-10 -bottom-10 size-24 rounded-full bg-cyan-400/5 blur-xl pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            key="inquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-cyan-300 animate-pulse" />
              <h3 className="font-extrabold text-white text-lg tracking-tight">On-Site Quick Admission Enquiry</h3>
            </div>
            
            {apiError && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2 rounded-lg border border-red-500/20 bg-red-950/20 p-4 text-sm text-red-200"
              >
                <ShieldAlert size={18} className="shrink-0 mt-0.5" />
                <span>{apiError}</span>
              </motion.div>
            )}

            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter full name"
                disabled={loading}
                className={`w-full rounded-lg px-4 py-3 text-sm input-glow ${
                  errors.name ? "border-red-500/40 focus:border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Contact details row */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@domain.com"
                  disabled={loading}
                  className={`w-full rounded-lg px-4 py-3 text-sm input-glow ${
                    errors.email ? "border-red-500/40 focus:border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. +91 9876543210"
                  disabled={loading}
                  className={`w-full rounded-lg px-4 py-3 text-sm input-glow ${
                    errors.phone ? "border-red-500/40 focus:border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Course track selector */}
            <div>
              <label htmlFor="course" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Select Course Track
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={loading}
                className="w-full rounded-lg px-4 py-3 text-sm input-glow appearance-none cursor-pointer"
              >
                <option value="Cybersecurity Program">Cybersecurity Program</option>
                <option value="Full Stack Developer Program">Full Stack Developer Program</option>
                <option value="Dynamics 365 & Power Platform Program">Dynamics 365 & Power Platform Program</option>
                <option value="Cloud & DevSecOps Program">Cloud & DevSecOps Program</option>
                <option value="General Enquiry">General Inquiry / Guidance</option>
              </select>
            </div>

            {/* Message box */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Inquiry Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                placeholder="Share your goals, experience, or queries with the academy..."
                disabled={loading}
                className={`w-full rounded-lg px-4 py-3 text-sm input-glow resize-none ${
                  errors.message ? "border-red-500/40 focus:border-red-500" : ""
                }`}
              />
              <div className="flex items-center justify-between mt-1.5">
                {errors.message ? (
                  <p className="text-xs font-medium text-red-400">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-2xs font-semibold tracking-wide text-slate-500 uppercase">
                  {formData.message.length} / 1000 chars
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 py-3.5 text-sm font-bold text-black shadow-md shadow-cyan-950/20 active:scale-98 disabled:opacity-75 disabled:pointer-events-none transition cursor-pointer hover:bg-cyan-200"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Verifying Credentials...
                </>
              ) : (
                <>
                  Submit Inquiry <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="grid size-16 place-items-center rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/25 mb-5 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
            >
              <CheckCircle2 size={32} />
            </motion.div>
            
            <h3 className="text-2xl font-extrabold text-white tracking-tight">Admission Inquiry Logged!</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Your inquiry has been successfully submitted and verified by our system.
            </p>
            
            {/* Reference panel */}
            <div className="mt-6 w-full rounded-xl border border-cyan-300/15 bg-slate-900/40 p-5 font-mono text-left">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-2xs text-slate-500 font-semibold tracking-wider uppercase">
                <span>Verification State</span>
                <span className="text-emerald-400">Verified</span>
              </div>
              <div className="mt-3 flex flex-col gap-1.5 text-xs text-slate-350">
                <p>
                  <span className="text-slate-500">Ref ID:</span>{" "}
                  <span className="text-cyan-300 font-bold">{refId}</span>
                </p>
                <p>
                  <span className="text-slate-500">Advisory:</span> A mentor will review your profile and respond via WhatsApp or email.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/5 transition active:scale-98"
            >
              Submit Another Inquiry <ArrowRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
