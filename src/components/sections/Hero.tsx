"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ChevronDown, CheckCircle, Briefcase, Clock, Users } from "lucide-react";
import { DroneIllustration } from "@/components/ui/DroneIllustration";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { icon: Briefcase, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Clock, value: "1200+", label: "Flight Hours" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="absolute top-20 left-10 w-48 h-48 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
                <CheckCircle className="w-4 h-4" />
                DGCA APPROVED DRONE PILOT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              <span className="text-gray-900">Transforming</span>
              <br />
              <span className="gradient-text">Perspectives.</span>
              <br />
              <span className="text-gray-900">Delivering Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-6 max-w-lg"
            >
              Professional drone pilot delivering high-quality aerial solutions
              for businesses with precision, safety & creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Link
                href="#consultation"
                className="btn-primary flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                <span>Watch Showreel</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Drone Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Drone Illustration */}
            <div className="relative">
              <DroneIllustration className="w-full max-w-md mx-auto lg:max-w-lg" animate={true} />

              {/* Floating Badge - Equipment */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-10 right-0 lg:right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100"
              >
                <p className="text-sm font-semibold text-gray-800">DJI Air 3S</p>
                <p className="text-xs text-gray-500">Professional Equipment</p>
              </motion.div>

              {/* Vertical Timeline Dots */}
              <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 1 ? "bg-gray-800" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 lg:mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
