"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const techStack = [
  "React", "Node.js", "Python", "MySQL", "SQLite", "PostgreSQL", "JavaScript","Next.js",
  "Java", "MediaPipe", "scikit-learn", "REST APIs", "Unity3D",
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 w-125 h-125 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Main hero layout — text left, photo right */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12">

        {/* LEFT — all text content */}
        <div className="flex-1">

          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-1.5 rounded-full border border-violet-400/25 bg-violet-400/10 text-violet-300 text-xs tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Open to Internship Opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl sm:text-6xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Sangavan
            </span>
            <br />
            Software Engineer.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-base sm:text-lg text-white/45 leading-relaxed max-w-xl mb-10"
          >
            Final year B.Sc. IT undergraduate at Rajarata University of Sri Lanka.
            I build real-world solutions in full-stack development, AI/ML systems,
            and mobile apps — from AR fitness tools to ML-powered prediction systems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              View my work ↓
            </a>
            <a
              href="mailto:sangavan16@gmail.com"
              className="px-6 py-3 rounded-xl border border-white/15 text-white/60 hover:border-violet-400/50 hover:text-violet-300 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/15 text-white/60 hover:border-violet-400/50 hover:text-violet-300 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Resume ↗
            </a>
          </motion.div>

          {/* Quick info row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap gap-6 mb-10 text-sm text-white/30"
          >

            <a
              href="https://github.com/Sangavan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <span className="text-violet-400/60">⌥</span> github.com/Sangavan
            </a>
            <a
              href="https://www.linkedin.com/in/sivaharan-sangavan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <span className="text-violet-400/60">in</span> LinkedIn
            </a>
          </motion.div>

          {/* Tech stack chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            <p className="text-xs text-white/25 tracking-widest uppercase mb-3">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
                  className="px-3 py-1.5 text-xs font-mono rounded-md border border-white/10 bg-white/5 text-white/50 hover:border-violet-400/40 hover:text-violet-300 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end shrink-0"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-500/30 to-sky-500/20 blur-2xl scale-110" />

            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />

            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-violet-400/30">
              <Image
                src="/profile.jpg"
                alt="Sivaharan Sangavan"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating badge — experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-3 -right-3 bg-[#0a0a0f] border border-violet-400/25 rounded-xl px-3 py-2 text-center"
            >
              <p className="text-xs font-bold text-violet-300">Final Year</p>
              <p className="text-xs text-white/30">B.Sc. IT</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="flex flex-col items-center gap-1 mt-10"
      >
        <span className="text-xs text-white/20 tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-linear-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}