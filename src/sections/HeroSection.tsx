import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { MarqueeText } from "@/components/MarqueeText";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
];

export function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-bg-primary overflow-hidden">
      {/* Portrait Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src="/images/Me-9.png"
          alt="Kxsi"
          className="h-full w-auto object-cover object-center lg:object-top lg:aspect-square"
        />
      </motion.div>

      {/* Scrolling Name - Behind Portrait */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full mix-blend-difference">
          <MarqueeText
            text="Kxsi"
            className="text-[120px] md:text-[180px] lg:text-[300px] font-bold text-white tracking-[-0.04em] leading-[0.85]"
          />
        </div>
      </div>

      {/* Social Links - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-4"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 text-white lg:text-black hover:opacity-70 transition-opacity group"
          >
            <link.icon className="w-4 h-4" />
            <span className="text-sm font-normal">{link.name}</span>
          </a>
        ))}
      </motion.div>

      {/* Title - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 right-6 md:right-12 text-right"
      >
        <p className="text-[24px] md:text-[48px] font-medium text-white lg:text-black tracking-[-0.02em]">
          // Web Designer
        </p>
        <p className="text-[24px] md:text-[48px] font-medium text-white lg:text-black tracking-[-0.02em] lg:leading-[70px]">
          Art Director
        </p>
      </motion.div>
    </section>
  );
}
