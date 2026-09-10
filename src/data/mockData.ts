import {
  ExpertiseItem,
  ServiceItem,
  PricingPlan,
  CaseStudy,
  FaqItem,
  Testimonial,
  Article,
} from '../types';
import amanKumarHero from '../assets/images/amankumar.jpg';

export const DOCTOR_INFO = {
  name: 'Dr. Aman Kumar',
  degrees: 'Master in Ayurveda',
  specialty: 'Master in Ayurveda & Panchakarma Specialist',
  experience: '10+ Years of Clinical Practice',
  patientsSatisfied: '10k+ Satisfied Patients',
  phone: '+91 82094 73537',
  whatsappPhone: '918209473537',
  email: 'aman4651@gmail.com',
  address: '351/1, Near Sai Mandir, 28 Civil Lines, Roorkee',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  heroImage: amanKumarHero,
  aboutImage:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
  contactImage:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85',
};

export const WHY_CHOOSE_ME = [
  {
    id: 'root-cause-healing',
    title: 'Root-Cause Healing',
    description:
      'Identifying core Tridosha imbalances (Vata, Pitta, Kapha) and eliminating toxic buildup (Ama) rather than temporarily suppressing symptoms.',
    icon: 'HeartPulse',
  },
  {
    id: 'authentic-panchakarma',
    title: 'Authentic Panchakarma',
    description:
      'Supervised classical detoxification and restorative therapies adhering to certified Ayush pharmacological standards and traditional texts.',
    icon: 'ShieldCheck',
  },
  {
    id: 'personalized-prakriti',
    title: 'Personalized Prakriti Care',
    description:
      'Every patient receives an individualized treatment roadmap with customized herbal formulations and targeted Pathya-Apathya diet charts.',
    icon: 'ClockAlert',
  },
  {
    id: 'integrative-compassion',
    title: 'Integrative Compassion',
    description:
      'Combining time-tested Ayurvedic diagnosis (Nadi Pariksha) with modern laboratory correlations for safe, compassionate, whole-body wellness.',
    icon: 'HandHeart',
  },
];

export const AREAS_OF_EXPERTISE: ExpertiseItem[] = [
  {
    id: 'nadi-pariksha',
    title: 'Nadi Pariksha & Dosha Balancing',
    description:
      'Traditional Ayurvedic pulse diagnosis revealing subtle physiological imbalances, digestive fire strength (Agni), and early disease roots.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    tag: 'Constitutional Medicine',
  },
  {
    id: 'panchakarma-detox',
    title: 'Panchakarma & Detox Therapy',
    description:
      'Specialized 5-fold purification protocols including Shirodhara, Basti, Janu Basti, and Abhyanga for deep cellular rejuvenation.',
    image:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80',
    tag: 'Rejuvenation & Detox',
  },
  {
    id: 'joint-spine-care',
    title: 'Joint, Spine & Metabolic Health',
    description:
      'Holistic management for Osteoarthritis (Sandhivata), Cervical Spondylosis, Sciatica, Diabetes (Madhumeha), and chronic digestive disorders.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    tag: 'Chronic Care & Mobility',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'nadi-pariksha-service',
    title: 'Nadi Pariksha & Prakriti Consultation',
    shortDesc: 'Comprehensive Ayurvedic pulse reading and constitutional body typing.',
    details:
      'Thorough evaluation of Tridoshas (Vata, Pitta, Kapha), pulse rhythm analysis, tongue diagnosis, and personalized daily routine (Dinacharya) guidance.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    duration: '20-30 Mins',
  },
  {
    id: 'panchakarma-service',
    title: 'Panchakarma Detox & Rejuvenation',
    shortDesc: 'Doctor-supervised classical cellular detoxification and mind-body therapies.',
    details:
      'Personalized therapies including Shirodhara for stress, insomnia, and migraines; Janu Basti for knee pain; and therapeutic herbal oil Abhyanga.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80',
    duration: '45-60 Mins',
  },
  {
    id: 'chronic-gut-joint-service',
    title: 'Chronic Gut & Joint Health Care',
    shortDesc: 'Non-invasive Ayurvedic protocols for arthritis, IBS, and metabolic disorders.',
    details:
      'Deepana-Pachana digestive fire restoration, natural anti-inflammatory herbal protocols for joint pain, and targeted metabolic balance therapies.',
    image:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    duration: '30-45 Mins',
  },
  {
    id: 'herbal-diet-service',
    title: 'Ayurvedic Diet & Herbal Formulations',
    shortDesc: 'Custom botanical medicines, classical Rasayanas, and Pathya diet charts.',
    details:
      'Prescriptions of authentic classical churnas, kwaths, and rasayanas paired with comprehensive Ayurvedic dietary guidelines based on your bio-energy type.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    duration: '25 Mins',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-consultation',
    name: 'Basic Consultation',
    price: 500,
    currencySymbol: '₹',
    period: '/ session',
    description: 'Ideal for initial health checkups, minor ailments, and Prakriti inquiries.',
    duration: '15 min session',
    features: [
      'Basic Nadi Pariksha (Pulse examination)',
      'Primary Dosha imbalance assessment',
      'Classical herbal medicine prescription',
      'Essential dietary & lifestyle advisory',
      'Digital prescription copy via WhatsApp/Email',
    ],
  },
  {
    id: 'comprehensive-care',
    name: 'Comprehensive Care',
    price: 800,
    currencySymbol: '₹',
    period: '/ session',
    featured: true,
    description: 'Our standard in-depth consultation for chronic health & multi-dosha imbalances.',
    duration: '30 min session',
    features: [
      'Complete Tridosha & Agni (digestive) assessment',
      'Detailed clinical history & symptom evaluation',
      'Pulse & tongue diagnostic analysis',
      'Review of modern laboratory & imaging reports',
      'Customized Pathya-Apathya dietary chart',
      '7-day digital consultation follow-up access',
    ],
  },
  {
    id: 'specialized-care',
    name: 'Specialized Care',
    price: 1200,
    currencySymbol: '₹',
    period: '/ session',
    description: 'Specialized Panchakarma planning and multi-system chronic disease protocol.',
    duration: '45 min session',
    features: [
      'Full Panchakarma detox & therapy roadmap',
      'Multi-system chronic condition recovery plan',
      'Tailored Rasayana (rejuvenation) protocol',
      'Joint mobility or metabolic restoration program',
      'Dinacharya (circadian routine) guidelines',
      '14-day dedicated clinical support window',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Severe Acid Peptic Disorder (Amlapitta) & Gut Healing',
    patientProfile: 'Male, 42 Years Old - Software Architect',
    condition: '3-year history of severe acid reflux, IBS, and chronic gastric bloating',
    timeline: '8 Weeks Ayurvedic Care',
    outcome:
      'Complete elimination of acid reflux and digestive distress through Deepana-Pachana herbal formulations, Takradhara, and circadian diet restructuring. Patient safely stopped daily antacids.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    metrics: {
      label: 'Reflux & Pain Severity Score',
      before: '9/10 (Severe Daily)',
      after: '0/10 (Symptom Free)',
    },
  },
  {
    id: 'case-2',
    title: 'Bilateral Knee Osteoarthritis (Sandhivata) Mobility Restoration',
    patientProfile: 'Female, 58 Years Old - Retired Educator',
    condition: 'Grade 3 knee osteoarthritis with morning stiffness and limited walking range',
    timeline: '10 Weeks Care Plan',
    outcome:
      'Joint stiffness and pain reduced by over 75% following localized Janu Basti, authentic Sallaki-Guggulu protocols, and herbal medicated oil treatments, restoring independent stair climbing without knee surgery.',
    image:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80',
    metrics: {
      label: 'Pain-Free Walking Distance',
      before: '150 meters',
      after: '1,800 meters',
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment with Dr. Aman Kumar (Master in Ayurveda & Panchakarma Specialist)?',
    answer:
      'You can schedule directly using the "Book Appointment" button or using our booking form on this page. For immediate assistance or Panchakarma inquiries, call our clinic reception at +91 82094 73537.',
  },
  {
    id: 'faq-2',
    question: 'What is Nadi Pariksha (Pulse Diagnosis) and how should I prepare?',
    answer:
      'Nadi Pariksha is the classical Ayurvedic art of reading radial artery vibrations to identify deeper Tridosha imbalances, toxin accumulation (Ama), and organ vitality. For the most accurate pulse reading, it is best done in the morning or at least 2.5 to 3 hours after a meal.',
  },
  {
    id: 'faq-3',
    question: 'Can I take Ayurvedic medicines alongside my ongoing allopathic prescriptions?',
    answer:
      'Yes. Dr. Aman Kumar reviews all current prescription drugs, blood sugar records, and blood pressure medications to ensure safe integration without adverse herb-drug interactions, with an eye toward gradual holistic tapering where appropriate.',
  },
  {
    id: 'faq-4',
    question: 'What is Panchakarma and who can benefit from it?',
    answer:
      'Panchakarma is the authentic five-fold bio-purification therapy of Ayurveda designed to detoxify tissues at a cellular level. It is especially beneficial for chronic arthritis, skin disorders, digestive issues, stress-induced migraines, and metabolic sluggishness.',
  },
  {
    id: 'faq-5',
    question: 'Are telemedicine or online video consultations available?',
    answer:
      'Yes. High-definition video consultations are available for patients across India and internationally. Following the online session, your personalized Ayurvedic prescription and diet chart are shared electronically, and authentic medicines can be couriered to your doorstep.',
  },
  {
    id: 'faq-6',
    question: 'What dietary rules (Pathya-Apathya) must I follow during treatment?',
    answer:
      'Ayurveda considers food as medicine. During your consultation, Dr. Aman Kumar provides a personalized Pathya (foods to favor) and Apathya (foods to avoid) chart tailored specifically to your prevailing Dosha imbalance and digestive capacity (Agni).',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    quote:
      'Dr. Aman Kumar is a truly gifted Ayurvedic physician. His Nadi Pariksha was so accurate—he pinpointed my chronic acidity and digestive fire weakness before I even mentioned my symptoms. Within 3 weeks on his herbal regimen, my gut feels completely restored!',
    author: 'Rajesh Sharma',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Amlapitta & Digestive Restoration',
    date: '2 weeks ago',
  },
  {
    id: 'review-2',
    quote:
      'I was recommended knee surgery for my severe osteoarthritis. Dr. Aman Kumar designed a Panchakarma course with Janu Basti and classical herbal oils. Today, I can walk 2 kilometers daily pain-free. A life-changing experience!',
    author: 'Sunita Mehra',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Sandhivata (Knee Osteoarthritis)',
    date: '1 month ago',
  },
  {
    id: 'review-3',
    quote:
      'The compassion, depth of Ayurvedic knowledge, and holistic approach of Dr. Aman Kumar are exceptional. He explained my Tridosha constitution clearly and gave practical daily routine and diet tips that corrected my chronic fatigue.',
    author: 'Vikramaditya Verma',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Vata-Pitta Imbalance & Vitality',
    date: '3 weeks ago',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'The Science of Nadi Pariksha: Uncovering Root Causes Through Pulse',
    summary:
      'How the ancient art of radial pulse diagnosis reveals subtle Tridosha imbalances, toxic accumulation (Ama), and sub-clinical disease states.',
    content:
      'In Ayurveda, Nadi Pariksha (Pulse Diagnosis) is not merely counting heart rate—it is a sophisticated diagnostic science. By placing three fingers on the radial artery, an experienced Master in Ayurveda & Panchakarma Specialist detects the nuanced movement of Vata (swan-like), Pitta (frog-like), and Kapha (pigeon-like). This enables detection of metabolic disharmony before chronic structural symptoms manifest...',
    readTime: '5 min read',
    date: 'Oct 14, 2025',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    category: 'Ayurvedic Diagnosis',
  },
  {
    id: 'article-2',
    title: 'Restoring the Digestive Fire (Agni): The Ayurvedic Secret to Immunity',
    summary:
      'Understanding why 90% of chronic illnesses stem from weak digestion (Mandagni) and how to kindle your digestive fire naturally.',
    content:
      'Ayurveda asserts that "Roga Sarvepi Mande Agnou"—all diseases originate from impaired Agni (metabolic and digestive fire). When Agni is compromised, undigested food ferments into Ama, a sticky toxic substance that clogs bodily channels (Srotas). Discover classical Deepana herbs, digestive spices, and eating rhythms to restore gut equilibrium...',
    readTime: '6 min read',
    date: 'Nov 02, 2025',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    category: 'Gut & Digestive Health',
  },
  {
    id: 'article-3',
    title: 'Panchakarma: Deep Cellular Cleansing and Seasonal Rejuvenation',
    summary:
      'The clinical mechanics of authentic 5-fold Ayurvedic detoxification and why seasonal therapy prevents chronic lifestyle illnesses.',
    content:
      'Unlike quick-fix wellness cleanses, Panchakarma is a medically supervised systemic detoxification therapy. Through Snehana (oleation), Swedana (sudation), and targeted elimination therapies like Basti and Shirodhara, metabolic residues are loosened from deep tissues and gently evacuated, restoring biological balance and long-term vitality...',
    readTime: '4 min read',
    date: 'Dec 18, 2025',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    category: 'Panchakarma Therapy',
  },
];
