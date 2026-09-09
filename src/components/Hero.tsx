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
              Dedicated Internal Medicine specialist delivering compassionate, evidence-based care in diagnosing, treating, and preventing complex chronic conditions.
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
                <span>Board Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3D5B67]" />
                <span>Hospital Affiliated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with Experience Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Soft Ambient Halo behind Doctor */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#3D5B67]/10 blur-3xl -z-10"></div>

            {/* Portrait Frame */}
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-linear-to-b from-slate-100 to-slate-200 aspect-4/5 sm:aspect-square md:aspect-4/5">
                <img
                  src={DOCTOR_INFO.heroImage}
                  alt="Dr. Aman Kumar - Internal Medicine Specialist"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent"></div>
                
                {/* Floating Bottom Name Bar inside Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      {DOCTOR_INFO.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      Senior Consultant Physician
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#3D5B67] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: Satisfied Patients (Top-Left / Left) */}
              <div
                id="hero-stat-patients"
                className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 animate-in fade-in duration-500"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#3D5B67]/10 text-[#3D5B67] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#19272E] leading-tight">
                    10k+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500">
                    Satisfied Patients
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2: Years Experience (Bottom-Right / Right) */}
              <div
                id="hero-stat-experience"
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 animate-in fade-in duration-700"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#3D5B67] text-white flex items-center justify-center font-bold shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#19272E] leading-tight">
                    10+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-500">
                    Years of Experience
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
