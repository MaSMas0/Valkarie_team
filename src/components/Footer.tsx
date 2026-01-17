"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTiktok, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Achievements", href: "#achievements" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Press Kit", href: "#" },
      { name: "Sponsorship", href: "#" },
      { name: "Gallery", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: MdEmail, href: "mailto:valkyrieracing26@outlook.com", label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="inline-flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo-mark.png"
                  alt="Valkyrie Racing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-[var(--foreground)]">
                <span className="text-[var(--primary)]">Valkyrie</span> Racing
              </span>
            </motion.a>
            <p className="text-[var(--text-secondary)] max-w-md mb-6">
              Velocity, Racing, Xcellence. A student-led motorsport engineering team applying aerodynamic optimisation and precision design to extract maximum performance.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[var(--surface)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--foreground)] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-[var(--foreground)] font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Valkyrie Racing. All rights reserved.
          </p>
          <p className="text-[var(--text-secondary)] text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" size={14} /> by the team
          </p>
        </div>
      </div>
    </footer>
  );
}
