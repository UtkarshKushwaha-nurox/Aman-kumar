import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Activity, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const PatientReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentIndex];
  const nextReview = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (
    <section id="reviews" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Block: Slate-Teal Box with ECG Heartbeat Wave matching screenshot */}
          <div className="lg:col-span-4 bg-[#3D5B67] text-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
            {/* ECG Pulse Graphic in Background */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-20 pointer-events-none">
              <svg viewBox="0 0 500 120" fill="none" className="w-full stroke-teal-200" strokeWidth="2.5">
                <path d="M0,60 L120,60 L140,20 L160,100 L180,40 L195,75 L210,60 L320,60 L340,10 L365,110 L385,45 L400,70 L415,60 L500,60" />
              </svg>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-teal-200">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Patient Voice
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                My Patient Review
              </h2>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed pt-2">
                Real clinical experiences and recovery journeys shared by patients under the long-term medical care of Dr. Aman Kumar.
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="pt-8 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-1 text-teal-200 font-bold text-xs">
                <span>0{currentIndex + 1}</span>
                <span className="opacity-50">/</span>
                <span className="opacity-50">0{TESTIMONIALS.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="reviews-prev-btn"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors active:scale-95 border border-white/20"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  id="reviews-next-btn"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors active:scale-95 border border-white/20"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Area: Active Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-200/80 flex flex-col justify-between space-y-6 relative group">
              <Quote className="w-10 h-10 text-[#3D5B67]/15 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">
                    {activeReview.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{activeReview.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {activeReview.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {activeReview.conditionTreated}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#3D5B67] bg-[#3D5B67]/10 px-2.5 py-1 rounded-full">
                  {activeReview.date}
                </span>
              </div>
            </div>

            {/* Secondary Card (showing the next testimonial) */}
            <div className="bg-white/80 backdrop-blur-xs rounded-3xl p-7 sm:p-8 shadow-md border border-slate-200/70 flex flex-col justify-between space-y-6 opacity-90 hover:opacity-100 transition-opacity">
              <Quote className="w-8 h-8 text-[#3D5B67]/10 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">
                    {nextReview.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic line-clamp-4">
                  "{nextReview.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {nextReview.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {nextReview.conditionTreated}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {nextReview.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
