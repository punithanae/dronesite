"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ChevronDown, CheckCircle, Briefcase, Clock, Users } from "lucide-react";
import { MediaCarousel, MediaItem } from "@/components/ui/MediaCarousel";

const heroMedia: MediaItem[] = [
  { type: "video", src: "/videos/hero-bg.mp4", alt: "Hero Drone Footage" },
  { type: "image", src: "/images/portfolio/IMG_0738.JPG", alt: "Drone Landscape" },
  { type: "image", src: "/images/portfolio/IMG_0739.JPG", alt: "Drone Landscape 2" },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { icon: Briefcase, value: "0", label: "Projects Completed" },
    { icon: Users, value: "0", label: "Happy Clients" },
    { icon: Clock, value: "0", label: "Flight Hours" },
    { icon: CheckCircle, value: "0%", label: "Client Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <MediaCarousel items={heroMedia} />
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container-custom py-8 w-full">
        <div className="max-w-3xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-xl">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              DGCA APPROVED DRONE PILOT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg"
          >
            Transforming
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Perspectives.</span>
            <br />
            Delivering Results.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Professional drone pilot delivering high-quality aerial solutions
            for businesses with precision, safety & creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#consultation"
              className="bg-gold-500 hover:bg-gold-600 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="flex items-center gap-3 px-6 py-3 text-white font-medium hover:text-gold-300 transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              <span>Watch Showreel</span>
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 bg-black/40 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
