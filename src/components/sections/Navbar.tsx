"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 py-2 shadow-soft"
            : "bg-white/80 backdrop-blur-sm py-4"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-[180px] h-[60px] md:w-[220px] md:h-[70px]">
                <Image
                  src="/images/logo.png"
                  alt="Punithan Drone Pilot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gold-400 group-hover:w-1/2 transition-all duration-300" />
                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-gold-400 group-hover:w-1/2 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919361623073"
                className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+91 93616 23073</span>
              </a>
              <Link
                href="#consultation"
                className="hidden sm:inline-flex btn-primary text-sm px-6 py-2.5"
              >
                <span>Book Now</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-gold-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-gray-200 p-6 pt-24 shadow-xl"
            >
              <ul className="space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gold-500 hover:bg-gold-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <Link
                  href="#consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  <span>Book Free Consultation</span>
                </Link>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 mt-4 py-3 text-gold-500"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 XXXXX XXXXX</span>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
