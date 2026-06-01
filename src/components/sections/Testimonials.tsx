"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-100/30 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients"
          highlight="Say"
          description="Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us."
        />

        {/* Placeholder Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-soft text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8 text-gold-400 opacity-50" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Client Feedback Coming Soon
          </h3>
          <p className="text-gray-500">
            We are currently gathering feedback from our amazing clients. Check back later to see what they have to say about our drone services!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
