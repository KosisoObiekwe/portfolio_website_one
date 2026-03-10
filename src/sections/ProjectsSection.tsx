import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-bg-dark py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-red text-sm font-medium tracking-wide mb-16"
        >
          // Projects
        </motion.p>

        {/* Projects List */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
