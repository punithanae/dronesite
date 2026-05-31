"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  Send,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  consultationSchema,
  type ConsultationFormData,
  serviceOptions,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

export function Consultation() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      preferredDate: "",
      message: "",
      recaptchaToken: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      let recaptchaToken = "bypass-for-development";

      if (executeRecaptcha) {
        try {
          const token = await executeRecaptcha("consultation_form");
          if (token) recaptchaToken = token;
        } catch (e) {
          console.warn("reCAPTCHA failed, proceeding without it", e);
        }
      }

      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="consultation"
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Compact CTA Banner */}
        <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)"/>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Have a Project in Mind?</h3>
                <p className="text-white/90 text-sm font-medium">Let&apos;s discuss how drone technology can elevate your business.</p>
              </div>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Book Your Free Consultation
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Ready to elevate your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your consultation request has been received. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="btn-outline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="input-label">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Your full name"
                        className={cn(
                          "input-field pl-12",
                          errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="input-label">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 93616 23073"
                        className={cn(
                          "input-field pl-12",
                          errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="input-label">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className={cn(
                          "input-field pl-12",
                          errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="input-label">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        {...register("service")}
                        className={cn(
                          "input-field pl-12 appearance-none cursor-pointer",
                          errors.service && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="input-label">Project Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("location")}
                        type="text"
                        placeholder="City, State"
                        className="input-field pl-12"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="input-label">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("preferredDate")}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="input-field pl-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="input-label">Project Details</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="input-field resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* reCAPTCHA Notice */}
                <p className="text-gray-400 text-xs">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {submitStatus === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Book Free Consultation
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
