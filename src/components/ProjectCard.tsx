import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 group cursor-pointer"
    >
      {/* Image */}
      <div className="lg:col-span-7 relative overflow-hidden rounded-2xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="aspect-[16/10] relative"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating View Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
            x: { duration: 0.1, ease: 'linear' },
            y: { duration: 0.1, ease: 'linear' },
          }}
          className="absolute w-20 h-20 bg-accent-red rounded-full flex items-center justify-center pointer-events-none z-10"
        >
          <span className="text-white text-sm font-medium">View</span>
        </motion.div>
      </div>

      {/* Info Card */}
      <div className="lg:col-span-5">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-bg-card border border-border-dark rounded-2xl p-8 h-full flex flex-col"
        >
          {/* Year */}
          <p className="text-text-secondary text-sm font-normal mb-4">
            ({project.year})
          </p>

          {/* Name */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.02em] mb-6">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-base leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-text-secondary text-sm border-t border-border-dark pt-2"
              >
                {tag}
                {index < project.tags.length - 1 && (
                  <span className="ml-2">|</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
