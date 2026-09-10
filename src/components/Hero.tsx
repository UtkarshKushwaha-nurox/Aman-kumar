import React from 'react';
import { ArrowUpRight, Award, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Watermark Text as seen in Behance screenshot */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.035] font-black text-7xl sm:text-9xl md:text-[13rem] tracking-tight whitespace-nowrap text-slate-900 z-0"
        aria-hidden="true"
      >
        Meet Dr. Aman Kumar
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-[#2D4550] tracking-wide uppercase">
                {DOCTOR_INFO.specialty}
              </span>
            </div>

            {/* Main Display Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#19272E] tracking-tight leading-[1.1]">
                Meet <span className="text-[#3D5B67]">Dr. Aman Kumar</span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-slate-500 tracking-wider uppercase">
                {DOCTOR_INFO.degrees}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dedicated Master in Ayurveda & Panchakarma Specialist delivering authentic, evidence-based holistic healing through Nadi Pariksha, classical Panchakarma, and root-cause disease reversal.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 bg-[#1E2E36] hover:bg-[#2F4752] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Book Appointment</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#253942] bg-white/80 hover:bg-white border border-slate-200/80 transition-all shadow-2xs"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#3D5B67]" />
                <span>Ayush Registered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3D5B67]" />
                <span>Certified Panchakarma</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with Structured Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Soft Ambient Halo behind Doctor */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#3D5B67]/10 blur-3xl -z-10"></div>

            {/* Container following clean vertical order: Image -> Aman Kumar Box -> Side-by-Side Stats */}
            <div className="w-full max-w-md space-y-3 sm:space-y-3.5">
              {/* 1. Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/90 bg-linear-to-b from-slate-100 to-slate-200 aspect-4/5 sm:aspect-square md:aspect-4/5">
                <img
                  src={DOCTOR_INFO.heroImage}
                  alt="Dr. Aman Kumar - Master in Ayurveda & Panchakarma Specialist"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* 2. Dr. Aman Kumar Box */}
              <div
                id="hero-doctor-name-card"
                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-md flex items-center justify-between transition-all"
              >
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {DOCTOR_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D5B67] font-semibold">
                    Master in Ayurveda & Panchakarma Specialist
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#3D5B67] text-white flex items-center justify-center shadow-xs shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* 3. Side-by-Side Experience & Patients Boxes */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {/* Experience Box */}
                <div
                  id="hero-stat-experience"
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-md flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3D5B67] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-extrabold text-[#19272E] leading-tight">
                      10+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight truncate">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* Side-by-Side Second Box: Satisfied Patients */}
                <div
                  id="hero-stat-patients"
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-md flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center font-bold shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-extrabold text-[#19272E] leading-tight">
                      10k+
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight truncate">
                      Satisfied Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
