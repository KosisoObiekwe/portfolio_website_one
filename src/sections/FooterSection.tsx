import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { MarqueeText } from "@/components/MarqueeText";
import { LogoMarquee } from "@/components/LogoMarquee";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
];

export function FooterSection() {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <footer id="contact" className="relative">
      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Main Footer Content */}
      <section className="bg-bg-primary py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Portrait Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/hero-portrait.png"
            alt="Alex Graham"
            className="h-full w-auto object-cover object-center lg:object-top lg:aspect-square scale-x-[-1]"
          />
        </div>

        {/* Scrolling Text */}
        <div className="relative z-10 mb-16">
          <div className="mix-blend-difference">
            <MarqueeText
              text="Reach Out — "
              className="text-[80px] md:text-[120px] lg:text-[180px] font-bold text-white tracking-[-0.04em] leading-[0.9]"
              speed="slow"
            />
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="space-y-2 text-black">
            <p>
              <span className="font-semibold">Office:</span> Ozeanblickstraße,
              Berlin 10115, Germany
            </p>
            <p>
              <span className="font-semibold">Mail:</span>{" "}
              <a href="mailto:hello@alexgraham.com" className="hover:underline">
                hello@alexgraham.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +49 30 12345678
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Back to Top Button */}
        {/* <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-black" />
        </motion.button> */}
      </section>
    </footer>
  );
}
