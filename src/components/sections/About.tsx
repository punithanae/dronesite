"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { MediaCarousel, MediaItem } from "@/components/ui/MediaCarousel";

const highlights = [
  "DGCA Certified & Compliant",
  "Advanced Drone Technology",
  "Safety First Approach",
  "High-Quality Deliverables",
];

const aboutMedia: MediaItem[] = [
  { type: "image", src: "/images/portfolio/IMG_0742.JPG", alt: "Drone Pilot in Action" },
  { type: "image", src: "/images/portfolio/IMG_0743.JPG", alt: "Drone Aerial Shot" },
  { type: "image", src: "/images/portfolio/IMG_0744.JPG", alt: "Drone Setup" },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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

          {/* Right Side - Media Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
          >
            <MediaCarousel items={aboutMedia} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
