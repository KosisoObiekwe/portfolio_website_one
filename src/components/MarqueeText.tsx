import { cn } from '@/lib/utils';

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: 'normal' | 'slow';
}

export function MarqueeText({ text, className, speed = 'normal' }: MarqueeTextProps) {
  const animationClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';
  
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={cn("inline-flex", animationClass, className)}>
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
      </div>
    </div>
  );
}
