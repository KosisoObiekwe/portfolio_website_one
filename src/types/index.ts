export interface Project {
  id: string;
  year: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  highlightedText: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
