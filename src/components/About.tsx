"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaAward, FaRocket, FaLightbulb } from "react-icons/fa";
import TeamMembers from "./TeamMembers";

const stats = [
  {
    icon: FaUsers,
    number: 9,
    suffix: "",
    label: "Team Members",
    description: "Dedicated student engineers",
  },
  {
    icon: FaRocket,
    number: 2026,
    suffix: "",
    label: "Competition Year",
    description: "First competition entry",
  },
  {
    icon: FaLightbulb,
    number: 6,
    suffix: "",
    label: "Engineering Goals",
    description: "Targets for excellence",
  },
  {
    icon: FaAward,
    number: 100,
    suffix: "%",
    label: "Commitment",
    description: "Pursuit of perfection",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <CounterAnimation value={value} />
            {suffix}
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  );
}

function CounterAnimation({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.span>
      </motion.span>
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--surface)]" />

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
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Driven by <span className="text-[var(--primary)]">Passion</span>,{" "}
              <br className="hidden sm:block" />
              Powered by <span className="text-[var(--primary)]">Innovation</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              We are a dedicated team of student engineers pushing the boundaries
              of STEM racing technology and competition.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Valkyrie Racing is a student-led motorsport engineering team applying
                aerodynamic optimisation and precision design to extract maximum performance.
                Our motto - Velocity, Racing, Xcellence - embodies our commitment to speed,
                competition, and engineering excellence.
              </p>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We believe in hands-on learning, rigorous testing, and
                pushing the boundaries of what&apos;s possible in motorsport engineering.
                Every design iteration is an opportunity to optimize, and every challenge
                is a chance to showcase our dedication to performance and innovation.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                From aerodynamic analysis and CAD design to project management and
                sponsorship, our diverse team brings specialized skills together with
                a shared goal: to compete at the highest level in 2026 and beyond.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                      <FaUsers className="text-[var(--primary)] text-4xl" />
                    </div>
                    <p className="text-[var(--text-secondary)]">Team Photo Placeholder</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 text-center hover:border-[var(--primary)]/50 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                  <stat.icon className="text-[var(--primary)] text-xl" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-1">
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[var(--foreground)] font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Members Section */}
          <TeamMembers />
        </div>
      </div>
    </section>
  );
}
