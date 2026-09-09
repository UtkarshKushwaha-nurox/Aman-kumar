import {
  ExpertiseItem,
  ServiceItem,
  PricingPlan,
  CaseStudy,
  FaqItem,
  Testimonial,
  Article,
} from '../types';
import amanKumarHero from '../assets/images/dr_aman_kumar_1788942882978.jpg';

export const DOCTOR_INFO = {
  name: 'Dr. Aman Kumar',
  degrees: 'MBBS, FCPS (Medicine)',
  specialty: 'Internal Medicine Specialist',
  experience: '10+ Years of Experience',
  patientsSatisfied: '10k+ Satisfied Patients',
  phone: '+1 (555) 234-8910',
  email: 'dr.amankumar@medicalcare.com',
  address: 'St. Jude Specialist Health Center, Suite 402, New York, NY 10016',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  heroImage: amanKumarHero,
  aboutImage:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
  contactImage:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85',
};

export const WHY_CHOOSE_ME = [
  {
    id: 'patient-focused',
    title: 'Patient-Focused Care',
    description:
      'Every patient receives personalized clinical attention with treatment plans carefully tailored to their specific medical condition.',
    icon: 'HeartPulse',
  },
  {
    id: 'clinical-excellence',
    title: 'Clinical Excellence',
    description:
      'All diagnostic procedures and therapeutic interventions adhere to rigorous, evidence-based international clinical guidelines.',
    icon: 'ShieldCheck',
  },
  {
    id: 'continuous-support',
    title: 'Continuous Support',
    description:
      'Providing prompt follow-up monitoring, regular health evaluations, and continuous chronic condition advisory.',
    icon: 'ClockAlert',
  },
  {
    id: 'compassionate-care',
    title: 'Compassionate Care',
    description:
      'Patients are treated with utmost dignity, empathy, and genuine dedication to long-term wellness and restorative recovery.',
    icon: 'HandHeart',
  },
];

export const AREAS_OF_EXPERTISE: ExpertiseItem[] = [
  {
    id: 'hypertension',
    title: 'Hypertension Management',
    description:
      'Comprehensive arterial blood pressure stabilization, cardiovascular risk reduction, and individualized medication protocols.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    tag: 'Cardiovascular Health',
  },
  {
    id: 'chronic-disease',
    title: 'Chronic Disease Care',
    description:
      'Specialized care pathways for diabetes type 2, dyslipidemia, metabolic syndrome, and multi-system chronic ailments.',
    image:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80',
    tag: 'Metabolic Disorders',
  },
  {
    id: 'respiratory',
    title: 'Respiratory Conditions',
    description:
      'Diagnosis and therapeutic strategies for bronchial asthma, COPD, chronic bronchitis, and seasonal pulmonary conditions.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    tag: 'Pulmonology Care',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-checkup',
    title: 'General Health Checkup',
    shortDesc: 'Complete systemic evaluation and preventive diagnostic tests.',
    details:
      'Routine health screening, vital signs assessment, blood lipid review, organ function tests, and preventative advice.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    duration: '20-30 Mins',
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care Assessment',
    shortDesc: 'Early detection strategies for genetic and lifestyle risk factors.',
    details:
      'Full lifestyle risk assessment, pre-diabetic screening, vascular ultrasound referrals, and evidence-based preventive health regimens.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80',
    duration: '30-45 Mins',
  },
  {
    id: 'chronic-management',
    title: 'Chronic Disease Protocol',
    shortDesc: 'Long-term multidisciplinary care for ongoing health conditions.',
    details:
      'Custom prescription adjustments, continuous glucose monitoring guidance, dietetic coordination, and regular organ health monitoring.',
    image:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    duration: '45 Mins',
  },
  {
    id: 'lab-interpretation',
    title: 'Diagnostic Lab Interpretation',
    shortDesc: 'In-depth clinical analysis of bloodwork, imaging, and biomarkers.',
    details:
      'Clear, understandable breakdown of your clinical reports with actionable therapeutic insights and medication re-evaluations.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    duration: '25 Mins',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-consultation',
    name: 'Basic Consultation',
    price: 30,
    period: '/ session',
    description: 'Ideal for initial health inquiries and minor acute symptoms.',
    duration: '15 min session',
    features: [
      'General health assessment',
      'Blood pressure & pulse check',
      'Basic medical prescription',
      'Symptom evaluation',
      'Digital prescription copy',
    ],
  },
  {
    id: 'comprehensive-care',
    name: 'Comprehensive Care',
    price: 80,
    period: '/ session',
    featured: true,
    description: 'Our standard in-depth consultation for complex or chronic health evaluation.',
    duration: '30 min session',
    features: [
      'Detailed diagnostic workup',
      'In-depth clinical history review',
      'Complete vitals & heart check',
      'Lab report analysis & review',
      'Customized medical regimen',
      '7-day digital follow-up access',
    ],
  },
  {
    id: 'specialized-care',
    name: 'Specialized Care',
    price: 100,
    period: '/ session',
    description: 'Comprehensive chronic disease management and complex multi-system care.',
    duration: '45 min session',
    features: [
      'Chronic disease recovery plan',
      'Full metabolic & lab panel review',
      'Tailored nutrition & lifestyle plan',
      'Priority emergency call access',
      'Family health history assessment',
      '14-day dedicated follow-up window',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Hypertension & Cardiovascular Stabilization',
    patientProfile: 'Male, 48 Years Old - Executive',
    condition: 'Stage 2 Hypertension with persistent morning headaches',
    timeline: '8 Weeks Intervention',
    outcome:
      'Normalized arterial pressure from 168/104 mmHg down to 119/78 mmHg through precise medication titration and targeted sodium reduction.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    metrics: {
      label: 'Blood Pressure Reduction',
      before: '168/104 mmHg',
      after: '119/78 mmHg',
    },
  },
  {
    id: 'case-2',
    title: 'Type 2 Diabetes Reversal & Glycemic Balance',
    patientProfile: 'Female, 52 Years Old - School Administrator',
    condition: 'Uncontrolled Type 2 Diabetes with high HbA1c',
    timeline: '12 Weeks Care Plan',
    outcome:
      'Achieved HbA1c drop from 9.4% to 6.2% while eliminating reliance on high-dose sulfonylureas through clinical nutrition and micro-dosed metformin.',
    image:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80',
    metrics: {
      label: 'HbA1c Glycated Hemoglobin',
      before: '9.4% (Severe)',
      after: '6.2% (Controlled)',
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book an appointment with Dr. Aman Kumar?',
    answer:
      'You can schedule directly via the "Book Appointment" button or using our online booking form on this page. Alternatively, call our clinic reception at +1 (555) 234-8910 during working hours.',
  },
  {
    id: 'faq-2',
    question: 'Do I need a prior referral from another physician?',
    answer:
      'No prior physician referral is strictly required for routine internal medicine consultations. If you possess prior hospital discharge summaries or diagnostic reports, please bring them along.',
  },
  {
    id: 'faq-3',
    question: 'What documents and records should I bring?',
    answer:
      'Please bring a government-issued photo ID, your active medication list (with dosages), recent laboratory blood test results, and your health insurance membership card.',
  },
  {
    id: 'faq-4',
    question: 'Do you accept health insurance plans?',
    answer:
      'Yes, we accept major insurance providers including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Contact our billing desk to confirm exact co-pays.',
  },
  {
    id: 'faq-5',
    question: 'Are telemedicine or video consultations available?',
    answer:
      'Yes, secure HIPAA-compliant video consultations are available for routine follow-ups, medication reviews, and lab report assessments.',
  },
  {
    id: 'faq-6',
    question: 'What is the policy for prescription refills?',
    answer:
      'Refills can be requested through our clinic patient portal or phone line. Please allow 24 to 48 hours for clinical review and transmission to your preferred pharmacy.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    quote:
      'Dr. Aman Kumar is an extraordinary physician. He listened intently to my complex symptoms and diagnosed my hypertension when others rushed through examinations. My numbers are completely stable now!',
    author: 'Michael R.',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Hypertension Management',
    date: '2 weeks ago',
  },
  {
    id: 'review-2',
    quote:
      'The compassion, punctuality, and deep clinical acumen of Dr. Aman Kumar are unmatched. He explained every aspect of my diabetic treatment clearly without intimidating jargon.',
    author: 'Sarah Jenkins',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Type 2 Diabetes Protocol',
    date: '1 month ago',
  },
  {
    id: 'review-3',
    quote:
      'Having suffered from persistent respiratory issues for months, Dr. Aman Kumar accurately pinpointed my chronic cough etiology. Within two weeks on his regimen, I was breathing normally again.',
    author: 'David Rodriguez',
    role: 'Verified Patient',
    rating: 5.0,
    conditionTreated: 'Asthma & Bronchial Care',
    date: '3 weeks ago',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'The Silent Threat: Recognizing Early Signs of Hypertension',
    summary:
      'Why arterial hypertension often flies under the radar and the non-negotiable daily screening practices that protect vascular longevity.',
    content:
      'High blood pressure is often described as the "silent killer" because it frequently produces no noticeable symptoms until significant cardiovascular damage has already occurred. Regular ambulatory monitoring, dietary sodium awareness, and baseline arterial elasticity checks are critical cornerstones for long-term health...',
    readTime: '5 min read',
    date: 'Oct 14, 2025',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    category: 'Cardiovascular Care',
  },
  {
    id: 'article-2',
    title: 'Metabolic Syndrome: Bridging Lifestyle and Medical Intervention',
    summary:
      'Understanding insulin resistance, lipid profiles, and practical evidence-backed protocols to halt diabetic progression.',
    content:
      'Metabolic syndrome encompasses a cluster of conditions occurring together: increased blood pressure, high blood sugar, excess visceral body fat, and abnormal cholesterol levels. Early targeted intervention can successfully arrest progression to irreversible diabetes and coronary artery disease...',
    readTime: '6 min read',
    date: 'Nov 02, 2025',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    category: 'Preventive Health',
  },
  {
    id: 'article-3',
    title: 'Respiratory Wellness: Navigating Seasonal Flare-ups & Asthma',
    summary:
      'Essential strategies for maintaining peak lung capacity and safeguarding airway reactivity during seasonal weather shifts.',
    content:
      'Seasonal environmental triggers present challenges to patients with hyperreactive airways and asthma. Maintaining an updated asthma action plan, monitoring peak flow variability, and understanding environmental trigger remediation ensures uninterrupted respiratory comfort year-round...',
    readTime: '4 min read',
    date: 'Dec 18, 2025',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    category: 'Pulmonology',
  },
];
