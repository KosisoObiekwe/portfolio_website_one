import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  className?: string;
}

const logos = [
  { name: 'amara', svg: (
    <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
      <text x="0" y="22" className="text-xl font-light tracking-wider">amara</text>
    </svg>
  )},
  { name: 'treva', svg: (
    <svg viewBox="0 0 120 30" className="h-6 w-auto fill-current">
      <circle cx="10" cy="15" r="8" className="fill-current"/>
      <text x="25" y="22" className="text-xl font-light tracking-wider">treva.</text>
    </svg>
  )},
  { name: 'foxhub', svg: (
    <svg viewBox="0 0 140 30" className="h-6 w-auto fill-current">
      <text x="0" y="22" className="text-xl font-bold tracking-wider">FOX HUB</text>
    </svg>
  )},
  { name: 'building', svg: (
    <svg viewBox="0 0 40 30" className="h-8 w-auto fill-current">
      <path d="M20 2 L35 12 L35 28 L5 28 L5 12 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 28 L12 18 L18 18 L18 28 M22 28 L22 18 L28 18 L28 28" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )},
];

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap bg-bg-dark py-6", className)}>
      <div className="inline-flex animate-marquee-slow items-center gap-16">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="text-white/60 flex-shrink-0">
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
