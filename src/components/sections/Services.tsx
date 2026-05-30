"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Map,
  CheckCircle,
  Building2,
  Home,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Video,
  Map,
  Search: CheckCircle,
  Building2,
  Home,
};

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">What I Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Drone Solutions That Drive Impact
          </h2>
        </div>

        {/* Services Grid - Compact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Camera;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group text-center"
              >
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors duration-300 border border-gray-100 hover:border-blue-200">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                    <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {service.title.split(" ").slice(0, 2).join(" ")}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {service.description.split(" ").slice(0, 8).join(" ")}...
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Underline indicator for active service */}
        <div className="flex justify-center mt-6">
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
