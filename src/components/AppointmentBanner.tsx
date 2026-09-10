import React from 'react';
import { ArrowUpRight, PhoneCall, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/mockData';

interface AppointmentBannerProps {
  onOpenBooking: () => void;
}

export const AppointmentBanner: React.FC<AppointmentBannerProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#DEE8EC] border border-slate-300/70 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67]">
              Need Professional Consultation?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#19272E] tracking-tight">
              Get in touch with me for Appointment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Immediate consultation slots available for general inquiries and chronic care reviews.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${DOCTOR_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs font-bold tracking-wide border border-slate-300/80 shadow-2xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#3D5B67]" />
              <span>Call Reception</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#1E2E36] hover:bg-[#2F4752] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
