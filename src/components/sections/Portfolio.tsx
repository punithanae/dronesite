"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MediaCarousel, MediaItem } from "@/components/ui/MediaCarousel";

const carouselItems: MediaItem[] = [
  { type: "image", src: "/images/portfolio/IMG_0745.JPG", alt: "Drone Aerial Shot" },
  { type: "image", src: "/images/portfolio/IMG_0738.JPG", alt: "Drone Aerial Shot" },
  { type: "image", src: "/images/portfolio/IMG_0739.JPG", alt: "Drone Aerial Shot" },
  { type: "image", src: "/images/portfolio/IMG_0740.JPG", alt: "Drone Aerial Shot" },
  { type: "image", src: "/images/portfolio/IMG_0741.JPG", alt: "Drone Aerial Shot" },
];

export function Portfolio() {
  return (
    <div id="portfolio" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Showreel & Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              My Projects
            </h2>
          </div>
          <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Book a Shoot
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
        >
          <MediaCarousel items={carouselItems} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our portfolio showcases a diverse range of high-resolution aerial photography and 
            cinematic videography. Ready to elevate your project with similar stunning visuals?
          </p>
          <Link href="#consultation" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
