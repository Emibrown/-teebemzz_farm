export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  feature: string;
  featureIcon: string;
  order?: 'normal' | 'reverse';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

