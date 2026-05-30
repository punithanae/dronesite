"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 2000);

      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 8000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  const whatsappLink = generateWhatsAppLink(
    CONTACT_INFO.whatsapp,
    "Hi! I'm interested in your drone services. Can we discuss my project?"
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-4 bottom-2 whitespace-nowrap"
              >
                <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-card border border-gray-100">
                  <p className="text-gray-700 text-sm">
                    Need help? Chat with us!
                  </p>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

            {/* Icon */}
            <MessageCircle className="w-7 h-7 text-white" />

            {/* Notification Dot */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">1</span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
