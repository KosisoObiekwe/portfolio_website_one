import { useState, useEffect, type RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(ref?: RefObject<HTMLElement | null>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref?.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
      } else {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref]);

  return { mousePosition, isHovering };
}
