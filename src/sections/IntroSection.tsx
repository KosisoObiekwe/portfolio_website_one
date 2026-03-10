import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function IntroSection() {
  return (
    <section id="about" className="bg-bg-dark py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Label */}
        <motion.p
          variants={itemVariants}
          className="text-accent-red text-sm font-medium tracking-wide mb-12"
        >
          // Intro
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-[-0.02em] mb-12"
        >
          I'm a versatile designer who partners with founders to turn ideas into{' '}
          <span className="text-accent-red">real products.</span> I focus on clear
          interfaces, sharp decisions, and fast execution.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-12"
        >
          Bringing your vision to life quickly and efficiently—whether it's branding,
          apps, or websites—I've got it covered, delivering smooth and effective
          solutions from start to finish.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={itemVariants}
          href="#projects"
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <span className="text-sm font-medium">See my Work</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}
