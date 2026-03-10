import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="bg-bg-dark py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent-red text-sm font-medium tracking-wide mb-16"
        >
          // Services
        </motion.p>

        {/* Services List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-24 md:space-y-32"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Large Number */}
              <div className="lg:col-span-5">
                <span className="text-[120px] md:text-[200px] lg:text-[280px] font-bold text-outline text-white leading-[0.8] tracking-[-0.05em]">
                  {service.number}
                </span>
              </div>

              {/* Service Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.01em] mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Service Items */}
                <ul className="space-y-0">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-border-dark group hover:pl-4 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-white text-base md:text-lg font-medium">
                        {item}
                      </span>
                      <span className="text-text-secondary text-sm font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
