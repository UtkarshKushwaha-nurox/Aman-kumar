import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Award, HeartHandshake, FileText, X } from 'lucide-react';
import { DOCTOR_INFO } from '../data/mockData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image of Doctor attending patient in clinical bed */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 aspect-4/3 sm:aspect-16/11 group">
              <img
                src={DOCTOR_INFO.aboutImage}
                alt="Dr. Aman Kumar attending patient in clinic"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#19272E]/60 via-transparent to-transparent"></div>

              {/* Tag overlay inside image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/80">
                <p className="text-xs sm:text-sm font-bold text-[#19272E]">
                  Inpatient & Outpatient Clinical Care
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Compassionate beside medicine
                </p>
              </div>
            </div>

            {/* Accent badge behind */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-24 h-24 bg-[#3D5B67]/10 rounded-2xl -z-10 transform rotate-6"></div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67]">
                About
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#19272E] tracking-tight leading-snug">
              Dr. Aman Kumar is an Internal Medicine specialist skilled in diagnosing, treating, and preventing chronic diseases.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Holding prestigious <strong className="text-slate-800">MBBS</strong> and <strong className="text-slate-800">FCPS (Medicine)</strong> qualifications, Dr. Aman Kumar combines over a decade of clinical rigor with deep patient-centered warmth. He emphasizes holistic disease root-cause discovery over mere symptom suppression.
              </p>
              <p>
                Trusted medical care focused on clinical accuracy, compassion, and durable long-term health outcomes. Whether dealing with stubborn hypertension, metabolic imbalances, or complex respiratory disorders, Dr. Aman Kumar provides a calm, methodical approach.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/60 border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-[#3D5B67] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  Evidence-Based Protocols
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/60 border border-slate-200/70">
                <Award className="w-5 h-5 text-[#3D5B67] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  FCPS Certified Specialist
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/60 border border-slate-200/70">
                <HeartHandshake className="w-5 h-5 text-[#3D5B67] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  Individualized Patient Plans
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/60 border border-slate-200/70">
                <FileText className="w-5 h-5 text-[#3D5B67] shrink-0" />
                <span className="text-xs font-semibold text-slate-700">
                  Comprehensive Lab Analysis
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="about-read-more-btn"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 bg-[#1E2E36] hover:bg-[#2F4752] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#3D5B67] hover:text-[#1E2E36] px-4 py-3 underline underline-offset-4 transition-colors"
              >
                Book a consultation today →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Bio Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D5B67]/10 text-[#3D5B67] text-xs font-bold">
                Clinical Profile & Qualifications
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Dr. Aman Kumar, MBBS, FCPS (Internal Medicine)
              </h3>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Dr. Aman Kumar completed his Bachelor of Medicine and Bachelor of Surgery (MBBS) with honors, followed by rigorous post-graduate fellowship training earning the Fellowship of College of Physicians and Surgeons (FCPS) in Internal Medicine.
                </p>
                <p>
                  Over the past decade, he has served as attending physician across prestigious university medical centers and private referral clinics, diagnosing complex multisystem conditions where symptoms overlap.
                </p>
                <h4 className="text-base font-bold text-slate-900 pt-2">
                  Areas of Clinical Focus:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Resistant & secondary hypertension diagnostic workups</li>
                  <li>Type 2 Diabetes remission and glycemic stabilization</li>
                  <li>Adult asthma, chronic cough, and COPD respiratory therapies</li>
                  <li>Dyslipidemia and atherosclerotic cardiovascular risk prevention</li>
                  <li>Routine preventive wellness checkups and biomarker optimization</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#1E2E36] hover:bg-[#2F4752] text-white"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
