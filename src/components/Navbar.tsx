"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Commercial", href: "/commercial" },
  { name: "Residential", href: "/residential" },
  { name: "Career", href: "/career" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Hide navbar while scrolling down
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Change navbar appearance after scrolling
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/Emperia-For-Logo.png"
            alt="Emperia Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-black/[0.04] border-black/5"
              : "bg-black/10 border-white/20 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-white hover:shadow-sm"
                  : "text-white hover:text-black hover:bg-white hover:shadow-sm"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 bg-[#151515] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200"
          >
            <span>Enquiry</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border transition-colors ${
              isMobileMenuOpen
                ? "bg-black/10 border-black/10"
                : "bg-white/20 border-white/30 backdrop-blur-sm"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-black rotate-45 translate-y-2"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />

            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />

            <span
              className={`block w-4 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-black -rotate-45 -translate-y-2"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-black/5 bg-white/95 backdrop-blur-lg shadow-xl md:hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6 text-sm font-semibold uppercase tracking-wider text-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}