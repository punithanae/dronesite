"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Plane,
  Sparkles,
  Clock,
  MapPin,
  Headphones,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Plane,
  Sparkles,
  Clock,
  MapPin,
  Headphones,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-gradient-radial from-gold-100/50 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="The Punithan"
          highlight="Advantage"
          description="Experience the difference of working with a certified professional who prioritizes quality, safety, and customer satisfaction."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Shield;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-500">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-soft">
                    <span className="text-gold-500 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center group-hover:from-gold-200 group-hover:to-gold-100 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-gold-500" />
                    </div>
                    <div className="absolute -inset-2 bg-gold-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-b border-gray-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">DGCA Certified</p>
              <p className="text-gray-500 text-sm">License Verified</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">DJI Certified</p>
              <p className="text-gray-500 text-sm">Professional Operator</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">Fully Insured</p>
              <p className="text-gray-500 text-sm">Liability Coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
