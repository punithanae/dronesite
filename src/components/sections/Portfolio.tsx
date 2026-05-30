"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ProjectPlaceholder({ category, title }: { category: string; title: string }) {
  const colors: Record<string, string> = {
    Construction: "#ea580c",
    "Real Estate": "#2563eb",
    Infrastructure: "#059669",
    Industrial: "#7c3aed",
    Events: "#db2777",
    Agriculture: "#16a34a",
  };
  const color = colors[category] || "#6b7280";
  const gradientId = `grad-${title.replace(/\s/g, "-")}-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={`${color}cc`} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${gradientId})`} />
      <path d="M0 220 Q100 180 200 200 T400 180 L400 300 L0 300 Z" fill="white" opacity="0.1" />
      <circle cx="350" cy="50" r="30" fill="white" opacity="0.1" />
      <rect x="30" y="30" width="60" height="8" rx="4" fill="white" opacity="0.3" />
      <circle cx="200" cy="130" r="25" fill="white" opacity="0.15" />
      <polygon points="195,120 210,130 195,140" fill="white" opacity="0.4" />
    </svg>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS.slice(0, 5)
      : PROJECTS.filter((project) => project.category === activeCategory).slice(0, 5);

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {PORTFOLIO_CATEGORIES.slice(0, 6).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <ProjectPlaceholder category={project.category} title={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-sm">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
