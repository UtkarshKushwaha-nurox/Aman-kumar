export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string;
  image: string;
  duration: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  featured?: boolean;
  description: string;
  duration: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  patientProfile: string;
  condition: string;
  timeline: string;
  outcome: string;
  image: string;
  metrics: { label: string; before: string; after: string };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  conditionTreated: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface AppointmentFormState {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
