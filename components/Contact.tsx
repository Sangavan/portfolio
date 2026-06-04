"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "portfolio_service";
const TEMPLATE_ID = "template_cof4m3n";
const PUBLIC_KEY  = "scvSILEBtRiBL_86b";

const contactLinks = [
  {
    label: "Email",
    value: "sangavan16@gmail.com",
    href: "mailto:sangavan16@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "github.com/Sangavan",
    href: "https://github.com/Sangavan",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "Sivaharan Sangavan",
    href: "https://www.linkedin.com/in/sivaharan-sangavan",
    icon: "in",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const isValid = form.name.trim().length > 0 && form.email.trim().length > 0 && form.message.trim().length > 0;

  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">

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
          Get In Touch
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left — heading + contact links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Let&apos;s build{" "}
            <span className="bg-linear-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              something
            </span>
            <br />
            together.
          </h2>
          <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
            I&apos;m currently seeking a Software Engineering Internship. Fill
            in the form and I&apos;ll get back to you as soon as possible.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="group flex items-center gap-4 bg-white/2 border border-white/[0.07] hover:border-violet-400/25 rounded-xl px-4 py-3 transition-colors duration-300"
              >
                <span className="text-sm w-6 text-center text-white/25 group-hover:text-violet-400 transition-colors duration-200">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-white/25 tracking-widest uppercase mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-white/55 group-hover:text-violet-300 transition-colors duration-200">
                    {link.value}
                  </p>
                </div>
                <span className="ml-auto text-white/15 group-hover:text-violet-400 transition-colors text-sm">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="bg-white/3 border border-white/8 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-white/4 border border-white/8 focus:border-violet-400/40 rounded-xl px-4 py-3 text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-white/4 border border-white/8 focus:border-violet-400/40 rounded-xl px-4 py-3 text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-white/30 tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                rows={5}
                className="w-full bg-white/4 border border-white/8 focus:border-violet-400/40 rounded-xl px-4 py-3 text-sm text-white/70 placeholder-white/20 outline-none transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={!isValid || status === "sending"}
              className={`w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200
                ${isValid && status !== "sending"
                  ? "bg-violet-500 hover:bg-violet-400 text-white cursor-pointer"
                  : "bg-white/5 text-white/25 cursor-not-allowed"
                }`}
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "✓ Message Sent!" : "Send Message →"}
            </button>

            {/* Status messages */}
            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-center text-violet-400/70"
              >
                Thanks! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-center text-red-400/70"
              >
                Something went wrong. Please email me directly at sangavan16@gmail.com
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p className="text-xs text-white/20 font-mono">
          © {new Date().getFullYear()} Sivaharan Sangavan
        </p>
        <p className="text-xs text-white/15 font-mono">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </motion.div>
    </section>
  );
}