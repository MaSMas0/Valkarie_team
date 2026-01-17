"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaLightbulb, FaTools, FaUsers, FaTachometerAlt, FaShieldAlt } from "react-icons/fa";

const goals = [
  {
    icon: FaRocket,
    title: "First Competition Entry",
    year: "2026",
    description: "Preparing to enter our first regional STEM racing competition with a competitive vehicle design.",
    color: "var(--primary)",
  },
  {
    icon: FaLightbulb,
    title: "Aerodynamic Innovation",
    year: "2026",
    description: "Developing advanced aerodynamic solutions to maximize vehicle performance and efficiency.",
    color: "#22c55e",
  },
  {
    icon: FaTools,
    title: "Engineering Excellence",
    year: "2026",
    description: "Building comprehensive technical documentation and refined engineering processes.",
    color: "#f59e0b",
  },
  {
    icon: FaUsers,
    title: "Team Development",
    year: "2026",
    description: "Growing our team's skills through collaboration, training, and hands-on experience.",
    color: "#8b5cf6",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance Targets",
    year: "2026",
    description: "Optimizing vehicle design for speed, handling, and reliability through rigorous testing.",
    color: "#ef4444",
  },
  {
    icon: FaShieldAlt,
    title: "Safety Standards",
    year: "2026",
    description: "Implementing the highest safety standards in all aspects of vehicle design and operation.",
    color: "#06b6d4",
  },
];

export default function Achievements() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full text-[var(--primary)] text-sm font-medium mb-4">
              Our Goals
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Racing Towards{" "}
              <span className="text-[var(--primary)]">Excellence</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Our ambitious targets as we prepare to compete and innovate in the world of motorsport engineering.
            </p>
          </motion.div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)]/50 transition-all duration-300">
                  {/* Icon & Year */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${goal.color}20` }}
                    >
                      <goal.icon
                        className="text-2xl"
                        style={{ color: goal.color }}
                      />
                    </div>
                    <span className="px-3 py-1 bg-[var(--border)] rounded-full text-sm text-[var(--text-secondary)]">
                      {goal.year}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-[var(--text-secondary)] mb-4">
              Join us on our journey to excellence
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--foreground)] font-medium rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
