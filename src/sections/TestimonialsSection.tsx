import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

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
          // Testimonials
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Quote */}
          <div className="lg:col-span-9">
            {/* Counter */}
            <p className="text-accent-red text-sm font-mono mb-8">
              {String(activeIndex + 1).padStart(2, '0')}/
              {String(testimonials.length).padStart(2, '0')}
            </p>

            {/* Quote Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-[-0.01em]">
                  <span className="text-white">"{activeTestimonial.quote}</span>
                  <span className="text-accent-red">
                    {activeTestimonial.highlightedText}
                  </span>
                  <span className="text-white">"</span>
                </blockquote>

                {/* Author */}
                <div className="mt-12">
                  <p className="text-white text-lg font-medium">
                    // {activeTestimonial.author}
                  </p>
                  <p className="text-text-secondary text-base">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Avatar Selector */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 justify-center lg:justify-start">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300',
                  index === activeIndex
                    ? 'ring-2 ring-accent-red ring-offset-2 ring-offset-bg-dark'
                    : 'grayscale opacity-60 hover:opacity-100 hover:grayscale-0'
                )}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
