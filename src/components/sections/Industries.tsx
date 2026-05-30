"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Building,
  Landmark,
  Factory,
  PartyPopper,
  Sprout,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Building,
  Landmark,
  Factory,
  PartyPopper,
  Sprout,
};

const industries = [
  {
    name: "Construction",
    icon: "HardHat",
    description: "Progress monitoring & documentation",
  },
  {
    name: "Real Estate",
    icon: "Building",
    description: "Property showcases & virtual tours",
  },
  {
    name: "Infrastructure",
    icon: "Landmark",
    description: "Bridges, roads & public works",
  },
  {
    name: "Industrial",
    icon: "Factory",
    description: "Plant inspections & surveys",
  },
  {
    name: "Events",
    icon: "PartyPopper",
    description: "Weddings, corporate & sports",
  },
  {
    name: "Agriculture",
    icon: "Sprout",
    description: "Crop monitoring & mapping",
  },
];

export function Industries() {
  return (
    <section className="section-padding bg-white relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Industries Served"
          title="Trusted Across"
          highlight="Multiple Sectors"
          description="Delivering excellence to diverse industries with specialized drone solutions tailored to unique requirements."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || HardHat;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 text-center h-full border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center group-hover:from-gold-200 group-hover:to-gold-100 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{industry.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
