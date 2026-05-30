"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  "DGCA Certified & Compliant",
  "Advanced Drone Technology",
  "Safety First Approach",
  "High-Quality Deliverables",
];

function PlaceholderImage({ type, className = "" }: { type: "landscape" | "portrait" | "square"; className?: string }) {
  const colors = {
    landscape: { bg: "#E5E7EB", accent: "#9CA3AF" },
    portrait: { bg: "#DBEAFE", accent: "#93C5FD" },
    square: { bg: "#FEF3C7", accent: "#FCD34D" },
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill={colors[type].bg} />
        <path d="M0 200 Q100 150 200 180 T400 160 L400 300 L0 300 Z" fill={colors[type].accent} opacity="0.3" />
        <path d="M0 250 Q150 200 300 230 T400 220 L400 300 L0 300 Z" fill={colors[type].accent} opacity="0.2" />
        {type === "landscape" && (
          <>
            <rect x="280" y="80" width="80" height="120" rx="4" fill="#6B7280" opacity="0.4" />
            <rect x="285" y="85" width="70" height="80" fill="#9CA3AF" opacity="0.3" />
          </>
        )}
        {type === "portrait" && (
          <circle cx="200" cy="130" r="50" fill="#60A5FA" opacity="0.4" />
        )}
      </svg>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DGCA Approved<br />
              <span className="text-blue-600">Drone Pilot</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              With years of experience and a passion for capturing the world from above,
              I help businesses make smarter decisions through powerful aerial insights.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{text}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <span>Know More About Me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Side - Bento Grid Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Top Left - Portrait */}
            <div className="row-span-2">
              <PlaceholderImage type="portrait" className="w-full h-full rounded-xl min-h-[280px]" />
            </div>

            {/* Top Right - Landscape with overlay */}
            <div className="relative">
              <PlaceholderImage type="landscape" className="w-full h-32 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-xs font-medium text-gray-600">Trusted by Businesses</p>
                  <p className="text-[10px] text-gray-500">Across Industries</p>
                  <div className="flex -space-x-2 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-[8px] font-medium text-white"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-medium text-gray-600">
                      +50
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Two smaller squares */}
            <div className="grid grid-cols-2 gap-3">
              <PlaceholderImage type="square" className="w-full aspect-square rounded-xl" />
              <PlaceholderImage type="landscape" className="w-full aspect-square rounded-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
