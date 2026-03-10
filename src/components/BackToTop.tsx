import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function BackToTop() {
  const { scrollPosition } = useScrollPosition();
  const isVisible = scrollPosition > 500;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
