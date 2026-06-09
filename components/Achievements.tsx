"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const achievements = [
  {
    title: "7th Place — Research Project Carnival 2026",
    issuer: "Academic Research",
    year: "2025–2026",
    description:
      "SMARTAR Trainer secured 7th place out of 33 projects at the Research Project Carnival 2026. An AI-powered fitness desktop app with real-time AR posture detection, MediaPipe landmark tracking, and Unity3D overlays — built as our final year research project.",
    image: "/smartar-achievement.jpg",
    alt: "SMARTAR Trainer 7th Place Certificate",
    badge: "🥇",
  },
  {
    title: "IEEE Xtreme 19.0",
    issuer: "IEEE",
    year: "2024",
    description:
      "Participated in IEEE Xtreme 19.0 — one of the most prestigious 24-hour global competitive programming competitions organized by IEEE.",
    image: "/ieee-xtreme-19.jpg",
    alt: "IEEE Xtreme 19.0 Certificate",
    badge: "🏆",
  },
  {
    title: "IEEE Xtreme 18.0",
    issuer: "IEEE",
    year: "2023",
    description:
      "Participated in IEEE Xtreme 18.0 — a 24-hour global competitive programming competition, demonstrating problem-solving skills on an international stage.",
    image: "/ieee-xtreme-18.jpg",
    alt: "IEEE Xtreme 18.0 Certificate",
    badge: "🏆",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
};

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="achievements" className="px-6 py-24 max-w-5xl mx-auto">

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
          Achievements
        </span>
      </motion.div>

      {/* Achievement cards */}
      <div className="flex flex-col gap-6 max-w-2xl">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="group relative bg-white/3 border border-white/8 hover:border-violet-400/30 rounded-2xl overflow-hidden transition-colors duration-300"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-violet-600/6 to-transparent" />

            {/* Certificate image — clickable */}
            <div
              className="relative w-full h-52 bg-white/3 border-b border-white/8 overflow-hidden cursor-zoom-in"
              onClick={() => setSelectedImage({ src: item.image, alt: item.alt })}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0f]/60 to-transparent" />

              {/* Year badge */}
              <span className="absolute top-3 right-3 font-mono text-xs text-violet-300/80 bg-[#0a0a0f]/70 border border-violet-400/20 px-2.5 py-1 rounded-lg">
                {item.year}
              </span>

              {/* Click to view hint */}
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 bg-[#0a0a0f]/60 px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view full image
              </span>
            </div>

            {/* Card content */}
            <div className="p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/25 bg-violet-400/10 text-violet-300 text-xs mb-4">
                {item.badge} {item.issuer}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors duration-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white/50 hover:text-white text-2xl font-light transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Hint */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/30">
              Click anywhere to close
            </p>

            {/* Full image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}