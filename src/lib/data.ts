import type { Project, Testimonial, Service } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    year: "2024",
    name: "Formula Vintage",
    description:
      "For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers, celebrating the past with a fresh perspective.",
    tags: ["Landing Page", "Mobile App", "Redesign"],
    image: "/images/project-1.jpg",
  },
  {
    id: "2",
    year: "2024",
    name: "Sprey Zest",
    description:
      "For Sprey Zest, we took a playful, bold approach to packaging and branding. Instead of following the typical fresh or clean aesthetic, we infused energy and personality into every detail, making the product stand out on shelves and bringing a burst of excitement to the consumer experience.",
    tags: ["Website Design", "Branding"],
    image: "/images/project-2.jpg",
  },
  {
    id: "3",
    year: "2020",
    name: "Super Pro",
    description:
      "For Super-Pro, we redefined what it means to be a professional by focusing on the mindset and determination behind success, not just the achievements. The design highlighted the drive and passion of athletes, creating a bold, empowering experience that resonated with anyone striving for excellence.",
    tags: ["Desktop App", "Mobile App"],
    image: "/images/project-3.jpg",
  },
  {
    id: "4",
    year: "2024",
    name: "Architech Buildings",
    description:
      "We redefined the concept of modern living by creating a design that challenges conventional boundaries. Focusing on comfort, functionality, and unexpected elements, we transformed the ordinary into something extraordinary, making everyday experiences feel fresh and unique.",
    tags: ["Mobile App", "Branding", "Website Design"],
    image: "/images/project-4.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "His keen eye for detail and innovative approach ",
    highlightedText:
      "impressed our team, turning challenges into creative solutions that set him apart.",
    author: "Maya Lopez",
    role: "CEO",
    company: "Fundwizz",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "2",
    quote:
      "His strong problem-solving skills and dedication to excellence consistently elevated our projects, ",
    highlightedText: "making a lasting impact on the team.",
    author: "George Jones",
    role: "Product Manager",
    company: "Gliss",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "3",
    quote: "With a unique blend of creativity and precision, ",
    highlightedText:
      "he brought fresh perspectives that drove meaningful results.",
    author: "Ray Brown",
    role: "Head of Product",
    company: "ISO",
    avatar: "/images/avatar-3.jpg",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Branding & Marketing",
    description:
      "Branding that builds trust and drives loyalty through clear visuals and messaging, into an unforgettable online experience.",
    items: [
      "Brand Strategy and Messaging",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines & Frameworks",
      "Marketing materials",
      "Motion Design",
    ],
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.",
    items: [
      "Landing Pages",
      "Corporate Websites",
      "Blogs",
      "E-commerce",
      "Complex Websites",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "User-focused app design that maximizes usability and encourages retention.",
    items: [
      "Framer, Webflow, or WordPress Builds",
      "CMS Integration",
      "SEO Optimization",
      "Site Migrations",
    ],
  },
  {
    number: "04",
    title: "Application Design",
    description:
      "User-focused app design that maximizes usability and encourages retention.",
    items: [
      "Mobile Apps",
      "Desktop Apps",
      "Complex Systems",
      "Design Systems Optimization",
    ],
  },
];

export const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  // { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Instagram", href: "#", icon: "instagram" },
];
