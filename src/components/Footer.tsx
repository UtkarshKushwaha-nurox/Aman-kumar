import React from 'react';
import {
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Heart,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="pt-8 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Slate-Teal Footer Card matching the screenshot */}
        <div className="bg-[#3D5B67] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Heartbeat / ECG Wave Graphic running across the header of the footer card */}
          <div className="absolute top-6 left-0 right-0 opacity-15 pointer-events-none">
            <svg
              viewBox="0 0 1000 80"
              fill="none"
              className="w-full stroke-teal-200"
              strokeWidth="2"
            >
              <path d="M0,40 L300,40 L320,10 L335,70 L350,25 L360,55 L370,40 L600,40 L620,5 L640,75 L655,20 L670,55 L685,40 L1000,40" />
            </svg>
          </div>

          <div className="relative z-10 space-y-12">
            {/* Top Row: Heading and Back-to-top */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/15">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-200 block mb-1">
                  Stay In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Let's Connect With Me
                </h2>
              </div>

              <button
                onClick={scrollToTop}
                className="self-start sm:self-auto w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20 active:scale-95"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Grid: Branding & Links */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand Info */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-teal-200">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-white block leading-tight">
                      {DOCTOR_INFO.name}
                    </span>
                    <span className="text-xs text-teal-200 font-medium tracking-wide">
                      {DOCTOR_INFO.degrees}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200/80 leading-relaxed max-w-sm">
                  Master in Ayurveda & Panchakarma Specialist providing authentic Nadi Pariksha, Panchakarma rejuvenation, classical herbal medicine, and long-term holistic wellness.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2.5 pt-2">
                  <a
                    href="#footer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#footer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#footer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#footer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Navigation Links */}
              <div className="md:col-span-3 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-200">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200/90">
                  <li>
                    <a href="#about" className="hover:text-white transition-colors">
                      About Dr. Aman Kumar
                    </a>
                  </li>
                  <li>
                    <a href="#why-me" className="hover:text-white transition-colors">
                      Why Choose Me
                    </a>
                  </li>
                  <li>
                    <a href="#expertise" className="hover:text-white transition-colors">
                      Areas of Expertise
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors">
                      Clinical Services
                    </a>
                  </li>
                  <li>
                    <a href="#fees" className="hover:text-white transition-colors">
                      Consultation Fees
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors">
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Clinic Details */}
              <div className="md:col-span-4 space-y-3 text-xs sm:text-sm text-slate-200/90">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-200">
                  Clinical Center
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-200 shrink-0 mt-0.5" />
                    <span>{DOCTOR_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-teal-200 shrink-0" />
                    <span>{DOCTOR_INFO.workingHours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-200 shrink-0" />
                    <a href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                      {DOCTOR_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-teal-200 shrink-0" />
                    <a href={`mailto:${DOCTOR_INFO.email}`} className="hover:text-white">
                      {DOCTOR_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & Disclaimer */}
            <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
              <p>
                © {new Date().getFullYear()} Dr. Aman Kumar Medical Practice. All rights reserved.
              </p>
              <p className="flex items-center gap-1 opacity-80 text-center">
                <span>Medical care with accuracy & compassion</span>
                <Heart className="w-3 h-3 text-rose-300 fill-rose-300" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
