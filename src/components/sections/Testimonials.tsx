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

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full bg-white rounded-2xl p-8 relative group border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4">
                      <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center shadow-soft">
                        <Quote className="w-5 h-5 text-gold-500" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-5 h-5",
                            i < testimonial.rating
                              ? "text-gold-400 fill-gold-400"
                              : "text-gray-200"
                          )}
                        />
                      ))}
                    </div>

                    {/* Content - Full visibility */}
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-soft">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gold-500 hover:border-gold-300 transition-all shadow-soft"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gold-500 hover:border-gold-300 transition-all shadow-soft"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            See more reviews on Google
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 transition-colors"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-gold-400 fill-gold-400"
                />
              ))}
            </div>
            <span className="font-medium">5.0 Rating on Google</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
