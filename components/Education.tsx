"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const education: {
  degree: string;
  institution: string;
  period: string;
  status: string;
  logo: string;
  stream?: string;
}[] = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Rajarata University of Sri Lanka",
    period: "2023 – Present",
    status: "Final Year",
    logo: "/RUSL.png",
  },
  {
    degree: "Secondary Education",
    institution: "Jaffna Hindu College",
    period: "Completed",
    status: "A/L & O/L",
    stream: "A/L - Physical Stream",
    logo: "/JHC.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 max-w-5xl mx-auto">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="w-6 h-px bg-violet-400/60" />
        <span className="text-xs tracking-[0.18em] text-violet-400/70 uppercase">
          Education
        </span>
      </motion.div>

      {/* Education cards */}
      <div className="flex flex-col gap-5 max-w-2xl">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="group relative bg-white/3 border border-white/8 hover:border-violet-400/30 rounded-2xl p-6 transition-colors duration-300"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-violet-600/6 to-transparent" />

            {/* Top row — logo + status badge */}
            <div className="flex items-center justify-between mb-5">

              {/* Logo */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/6 border border-white/10 p-1.5 flex items-center justify-center">
                <Image
                  src={edu.logo}
                  alt={edu.institution + " logo"}
                  fill
                  className="object-contain p-1.5"
                />
              </div>

              {/* Status badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/25 bg-violet-400/10 text-violet-300 text-xs">
                {edu.status}
              </span>
            </div>

            {/* Degree */}
            <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-200 mb-2">
              {edu.degree}
            </h3>

            {/* Institution */}
            <p className="text-sm text-violet-400/60 mb-2">
              {edu.institution}
            </p>

            {/* Stream — only shows if exists */}
            {edu.stream && (
              <p className="text-xs text-violet-300/50 font-mono mb-3">
                {edu.stream}
              </p>
            )}

            {/* Period */}
            <p className="font-mono text-xs text-white/25">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}