"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  age: number;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string;
};

const defaultImagePosition = "50% 20%";

const teamMembers: TeamMember[] = [
  {
    id: "muhammed-isa-hussain",
    name: "Muhammed-Isa Hussain",
    age: 14,
    role: "Sponsorship Director & Graphic Designer",
    bio: "As the Graphic Designer and Sponsorship Director, I create engaging designs for digital and print materials while ensuring a consistent brand image. I also identify and connect with potential sponsors, prepare proposals, and build relationships to support our events and initiatives. My role combines creative design with sponsorship management to help our organization grow.",
    image: "/images/team/muhammed-isa-hussain.webp"
  },
  {
    id: "zac-metcalfe",
    name: "Zac Metcalfe",
    age: 14,
    role: "Potential Driver & Research Developer",
    bio: "As a Potential Driver and Research Developer, I would ensure safe and reliable transportation while maintaining a professional attitude. I would also conduct research as needed, gathering information and analysing data to support organizational decisions. My role would blend responsible driving with effective research skills to contribute to the team's success.",
    image: "/images/team/zac-metcalfe.webp"
  },
  {
    id: "santiago-gutierrez",
    name: "Santiago Gutierrez",
    age: 16,
    role: "Project Manager",
    bio: "As Project Manager, I oversee planning, execution, and completion of projects, ensuring they stay on track and meet objectives. I coordinate with team members, manage timelines and resources, and address challenges as they arise. My focus is on delivering successful results while maintaining clear communication and efficient workflows.",
    image: "/images/team/santiago-gutierrez.webp"
  },
  {
    id: "logan-howson-probert",
    name: "Logan Howson-Probert",
    age: 14,
    role: "Manufacturing Engineer & CAD Designer",
    bio: "As a CAD Designer and Manufacturing Engineer, I am skilled in creating precise digital models of our car and optimizing designs for efficient production. I understand manufacturing processes and materials, allowing me to collaborate with teams to ensure high-quality, manufacturable products from concept through completion.",
    image: "/images/team/logan-howson-probert.webp"
  },
  {
    id: "saleh-mansour",
    name: "Saleh Mansour",
    age: 14,
    role: "Team Member",
    bio: "A dedicated member of the Valkyrie Racing team, contributing to our mission of building an innovative racing vehicle.",
    image: "/images/team/saleh-mansour.webp"
  },
  {
    id: "alfie-donlan",
    name: "Alfie Donlan",
    age: 16,
    role: "Design Engineer & CAD Designer",
    bio: "As a Design Engineer and CAD Designer, I excel at developing innovative solutions for our car and translating concept ideas into detailed digital models. My skills include problem-solving, technical design, and using CAD software to create accurate, functional designs that meet project requirements.",
    image: "/images/team/alfie-donlan.webp"
  },
  {
    id: "jacob-hudson",
    name: "Jacob Hudson",
    age: 13,
    role: "Finance Engineer",
    bio: "As a Finance Engineer, I combine analytical and technical skills to develop financial models and produce accurate, detailed forecasts. I am adapt at problem-solving, risk assessment, and using financial tools to optimize the teams strategies and drive our growth.",
    image: "/images/team/jacob-hudson.webp"
  },
  {
    id: "will-trafford",
    name: "Will Trafford",
    age: 14,
    role: "Team Member",
    bio: "A dedicated member of the Valkyrie Racing team, contributing to our mission of building an innovative racing vehicle.",
    image: "/images/team/will-trafford.webp"
  },
  {
    id: "jibril-qureshi",
    name: "Jibril Qureshi",
    age: 14,
    role: "Team Member",
    bio: "A dedicated member of the Valkyrie Racing team, contributing to our mission of building an innovative racing vehicle.",
    image: "/images/team/jibril-qureshi.webp"
  }
];

export default function TeamMembers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="mt-20">
      {/* Section Subheader */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Meet Our <span className="text-[var(--primary)]">Team</span>
        </h3>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          Nine dedicated student engineers bringing diverse skills and expertise to Valkyrie Racing.
        </p>
      </motion.div>

      {/* Grid of Team Member Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--primary)]/50 transition-all duration-300">
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--background)] p-1 border border-[var(--border)] ring-1 ring-white/10 shadow-[0_10px_20px_-14px_rgba(0,0,0,0.7)] transition-colors group-hover:border-[var(--primary)]/60">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Valkyrie Racing`}
                    fill
                    className="rounded-full object-cover"
                    style={{ objectPosition: member.imagePosition ?? defaultImagePosition }}
                    loading="lazy"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Name */}
              <h4 className="text-xl font-bold text-[var(--foreground)] text-center mb-1 group-hover:text-[var(--primary)] transition-colors">
                {member.name}
              </h4>

              {/* Age & Role */}
              <p className="text-sm text-[var(--text-secondary)] text-center mb-3">
                Age {member.age} • {member.role}
              </p>

              {/* Bio */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
