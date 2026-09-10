import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { AreasOfExpertise } from './components/AreasOfExpertise';
import { MyServices } from './components/MyServices';
import { ConsultationFees } from './components/ConsultationFees';
import { ContactSection } from './components/ContactSection';
import { CaseStudySection } from './components/CaseStudySection';
import { FaqSection } from './components/FaqSection';
import { PatientReviews } from './components/PatientReviews';
import { ReadArticles } from './components/ReadArticles';
import { AppointmentBanner } from './components/AppointmentBanner';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PricingPlan } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleOpenBooking = () => {
    setSelectedService('');
    setSelectedPlan(null);
    setModalOpen(true);
  };

  const handleSelectExpertise = (title: string) => {
    setSelectedService(title);
    setSelectedPlan(null);
    setModalOpen(true);
  };

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setSelectedPlan(null);
    setModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    const sym = plan.currencySymbol || '₹';
    setSelectedService(`${plan.name} (${sym}${plan.price})`);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EDF3F5] text-slate-800 selection:bg-[#3D5B67] selection:text-white relative">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. Hero Section: "Meet Dr. Aman Kumar" */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Section: Bedside care photo & clinical bio */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 3. Why Choose Me: 4 Slate-Teal feature cards */}
        <WhyChooseMe />

        {/* 4. Areas of Expertise: 3 Specialty cards with photo pills */}
        <AreasOfExpertise onSelectExpertise={handleSelectExpertise} />

        {/* 5. My Services: Slider info box & service cards */}
        <MyServices onBookService={handleBookService} />

        {/* 6. Consultation Fees: 3 Pricing tiers (₹500, ₹800, ₹1200) */}
        <ConsultationFees onSelectPlan={handleSelectPlan} />

        {/* 7. Contact Info / Booking: Consultation photo + booking form */}
        <ContactSection initialService={selectedService} />

        {/* 8. Case Study: Clinical evidence & Before/After metrics */}
        <CaseStudySection />

        {/* 9. Any Question? (FAQ Accordion) */}
        <FaqSection />

        {/* 10. My Patient Review: ECG heartbeat wave box & patient quotes */}
        <PatientReviews />

        {/* 11. Read Articles: Medical publications & insights */}
        <ReadArticles />

        {/* 12. Appointment Banner */}
        <AppointmentBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* 13. Footer: "Let's Connect With Me" with ECG heartbeat wave */}
      <Footer />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
        preselectedPlan={selectedPlan}
      />
    </div>
  );
}
