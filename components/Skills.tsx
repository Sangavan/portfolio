"use client";

import { motion, type Variants } from "framer-motion";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: "⌨️",
    skills: ["Python", "Java", "JavaScript", "C", "C++", "C#"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend & Frameworks",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["scikit-learn", "MediaPipe", "Pandas", "Random Forest", "Jupyter Notebook"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["GitHub", "VS Code", "Android Studio", "Unity3D", "Figma"],
  },
  {
    category: "Soft Skills",
    icon: "💡",
    skills: ["Problem Solving", "Teamwork", "Critical Thinking", "Time Management"],
  },
];

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Create a Mockup in Figma",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "IEEE Xtreme 19.0",
    issuer: "Competitive Programming",
    year: "2024",
  },
  {
    title: "IEEE Xtreme 18.0",
    issuer: "Competitive Programming",
    year: "2023",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto">

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
          Skills & Tools
        </span>
      </motion.div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="group bg-white/3 border border-white/8 hover:border-violet-400/25 rounded-2xl p-6 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base">{group.icon}</span>
              <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + j * 0.05, duration: 0.25 }}
                  className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/55 hover:border-violet-400/35 hover:text-violet-300 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/6 mb-14" />

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="w-6 h-px bg-violet-400/60" />
        <span className="text-xs tracking-[0.18em] text-violet-400/70 uppercase">
          Certifications
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="flex items-center justify-between bg-white/2 border border-white/[0.07] hover:border-violet-400/25 rounded-xl px-5 py-4 transition-colors duration-300 group"
          >
            <div>
              <p className="text-sm font-medium text-white/70 group-hover:text-violet-300 transition-colors duration-200">
                {cert.title}
              </p>
              <p className="text-xs text-white/30 mt-0.5">{cert.issuer}</p>
            </div>
            <span className="font-mono text-xs text-violet-400/50 ml-4 shrink-0">
              {cert.year}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Education note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between bg-white/2 border border-white/[0.07] rounded-2xl px-6 py-5 gap-3"
      >
        <div>
          <p className="text-sm font-semibold text-white/70">
            B.Sc. in Information Technology
          </p>
          <p className="text-xs text-white/30 mt-0.5">
            Rajarata University of Sri Lanka · 2023 – Present (Final Year)
          </p>
        </div>
        <span className="font-mono text-xs text-violet-400/50 shrink-0">
          Final Year
        </span>
      </motion.div>
    </section>
  );
}