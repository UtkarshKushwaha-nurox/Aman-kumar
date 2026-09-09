import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface MyServicesProps {
  onBookService: (serviceName: string) => void;
}

export const MyServices: React.FC<MyServicesProps> = ({ onBookService }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= SERVICES.length - 2 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Block: Slate-Teal Information Box with [<] [>] controls */}
          <div className="lg:col-span-4 bg-[#3D5B67] text-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
            {/* Background subtle decor */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Clinical Care Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                My Services
              </h2>
              <p className="text-sm text-slate-200/90 leading-relaxed pt-2">
                Comprehensive clinical solutions designed to support your lifelong health, from proactive early screenings to intensive chronic condition management.
              </p>
            </div>

            {/* Slider Controls matching the screenshot */}
            <div className="pt-8 sm:pt-12 flex items-center justify-between relative z-10">
              <span className="text-xs text-teal-200/80 font-medium">
                Showing {currentIndex + 1}–{Math.min(currentIndex + 2, SERVICES.length)} of {SERVICES.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="services-prev-btn"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors active:scale-95 border border-white/20"
                  aria-label="Previous service"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  id="services-next-btn"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors active:scale-95 border border-white/20"
                  aria-label="Next service"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards: Active Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.slice(currentIndex, currentIndex + 2).map((service, idx) => (
              <div
                key={service.id}
                id={`service-card-${currentIndex + idx}`}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                {/* Top Image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-slate-700 flex items-center gap-1 shadow-2xs">
                    <Clock className="w-3 h-3 text-[#3D5B67]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#3D5B67] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {service.details}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3D5B67]" />
                      <span>Includes diagnostic analysis & report</span>
                    </div>
                  </div>

                  {/* Action Pill Button */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#3D5B67]">
                      In-Clinic & Virtual
                    </span>
                    <button
                      onClick={() => onBookService(service.title)}
                      className="inline-flex items-center gap-1.5 bg-[#1E2E36] hover:bg-[#2F4752] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                    >
                      <span>Book Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
