"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    tag: "Academic Research · 2025–2026",
    title: "SMARTAR Trainer – AI Fitness App with AR",
    description:
      "Desktop application providing AI-driven workout recommendations and real-time AR posture detection. Highlights incorrect body positions instantly using AR overlays for live visual feedback.",
    bullets: [
      "Real-time posture correction using MediaPipe landmark detection",
      "Random Forest classifier for workout recommendation engine",
      "AR overlays in Unity3D to visualise incorrect joint angles",
    ],
    stack: ["Python", "MediaPipe", "scikit-learn", "Unity3D", "C#", "AR"],
    github: "https://github.com/Sangavan/SMARTAR-Trainer",
    demo: "https://www.linkedin.com/posts/kamsala-selvayalagan-30875a32a_unifiedexplorers-smartartrainer-projectcarnival2026-ugcPost-7444644279362330625-vMlI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQOPXIBWpyBHlA5ObpfWXEcs8wi9lenjJY",
    featured: true,
  },
  {
    number: "02",
    tag: "ML Project",
    title: "Student Results Prediction System",
    description:
      "ML-powered system that predicts student academic outcomes based on performance data. Implements predictive models to identify at-risk students and support early intervention strategies.",
    stack: ["Python", "scikit-learn", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/Sangavan/StudentPerformancePredictorModel",
    demo: "https://www.linkedin.com/posts/sivaharan-sangavan_ai-machinelearning-neuralnetworks-activity-7395697798198743040-z9rX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQOPXIBWpyBHlA5ObpfWXEcs8wi9lenjJY",
    featured: false,
  },
  {
    number: "03",
    tag: "Mobile App",
    title: "BookMyFlick – Movie Booking App",
    description:
      "Android movie booking application with seat selection and booking history. Built using OOP principles and design patterns for clean, maintainable architecture.",
    stack: ["Java", "Android Studio", "OOP"],
    github: "https://github.com/Sangavan/BookMyFlick",
    demo: "https://www.linkedin.com/posts/sivaharan-sangavan_androiddevelopment-mobileapp-java-activity-7394079102502182913-GA-j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQOPXIBWpyBHlA5ObpfWXEcs8wi9lenjJY",
    featured: false,
  },
  {
    number: "04",
    tag: "Frontend",
    title: "Language Learning Website",
    description:
      "Responsive frontend platform for a language learning service. Focused on strong UI/UX design and cross-device usability optimization.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sangavan/languageLearningWebPage_ICT_2021_103",
    demo: "https://www.linkedin.com/posts/sivaharan-sangavan_webdevelopment-html-css-activity-7393193161382076416-Qwcg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQOPXIBWpyBHlA5ObpfWXEcs8wi9lenjJY",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">

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
          Featured Projects
        </span>
      </motion.div>

      {/* Featured project — full width */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-violet-400/30 rounded-2xl p-8 mb-5 transition-colors duration-300"
      >
        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-600/8 to-transparent" />

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <span className="font-mono text-xs text-violet-400/50 block mb-1">01</span>
            <span className="text-xs tracking-widest text-white/25 uppercase">
              Academic Research · 2025–2026
            </span>
          </div>
          <div className="flex gap-3">
            <a
              href={projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-violet-400 border border-white/[0.08] hover:border-violet-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
              GitHub ↗
            </a>
            <a
              href={projects[0].demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-violet-300/70 hover:text-violet-300 border border-violet-400/25 hover:border-violet-400/50 bg-violet-400/10 hover:bg-violet-400/15 px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
              Demo ▶
            </a>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200 mb-3">
          SMARTAR Trainer – AI Fitness App with AR
        </h3>
        <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-2xl">
          Desktop application providing AI-driven workout recommendations and
          real-time AR posture detection. Highlights incorrect body positions
          instantly using AR overlays for live visual feedback — combining
          computer vision, ML classification, and Unity3D rendering.
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-6">
          {projects[0].bullets!.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-white/35">
              <span className="text-violet-400/60 mt-0.5">▹</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {projects[0].stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-violet-400/10 border border-violet-400/20 text-violet-300/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Other 3 projects — grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.slice(1).map((project, i) => (
          <motion.div
            key={project.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i + 1}
            className="group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-violet-400/30 transition-colors duration-300"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-600/5 to-transparent" />

            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono text-xs text-violet-400/50 block mb-0.5">
                  {project.number}
                </span>
                <span className="text-xs text-white/20 tracking-wider uppercase">
                  {project.tag}
                </span>
              </div>
            </div>

            <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-200 mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-white/40 leading-relaxed flex-1 mb-5">
              {project.description}
            </p>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/35"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub + Demo buttons */}
            <div className="flex gap-2 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs text-white/30 hover:text-violet-400 border border-white/[0.08] hover:border-violet-400/30 px-3 py-1.5 rounded-lg transition-colors duration-200"
              >
                GitHub ↗
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-xs text-violet-300/70 hover:text-violet-300 border border-violet-400/25 hover:border-violet-400/50 bg-violet-400/10 hover:bg-violet-400/15 px-3 py-1.5 rounded-lg transition-colors duration-200"
              >
                Demo ▶
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub profile CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/Sangavan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-violet-400 transition-colors duration-200"
        >
          See all projects on GitHub ↗
        </a>
      </motion.div>
    </section>
  );
}