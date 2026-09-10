import React, { useState } from 'react';
import { ArrowUpRight, TrendingDown, CheckCircle, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

export const CaseStudySection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-study" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
              Clinical Evidence & Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
              Case Study
            </h2>
          </div>

          <button
            onClick={() => setActiveCase(CASE_STUDIES[0])}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#3D5B67] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs transition-colors"
          >
            <span>See More</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2 Case Study Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CASE_STUDIES.map((item, index) => (
            <div
              key={item.id}
              id={`case-study-card-${index}`}
              onClick={() => setActiveCase(item)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image with Tag */}
              <div className="h-60 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/50 backdrop-blur-md text-teal-200 border border-white/20">
                    {item.timeline}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-medium opacity-80">
                    {item.patientProfile}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#3D5B67] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#1E2E36] text-white flex items-center justify-center shrink-0 group-hover:bg-[#3D5B67] group-hover:rotate-45 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.outcome}
                  </p>
                </div>

                {/* Metrics Highlight Pill */}
                <div className="p-3.5 rounded-2xl bg-[#EDF3F5] border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-700">
                      {item.metrics.label}:
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-900">
                    <span className="text-rose-600 line-through mr-2">
                      {item.metrics.before}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">
                      {item.metrics.after}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#3D5B67]/10 text-[#3D5B67] text-xs font-bold uppercase tracking-wider">
                Clinical Case Review
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeCase.title}
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <p>
                  <strong className="text-slate-700">Patient Demographic:</strong>{' '}
                  {activeCase.patientProfile}
                </p>
                <p>
                  <strong className="text-slate-700">Presenting Condition:</strong>{' '}
                  {activeCase.condition}
                </p>
                <p>
                  <strong className="text-slate-700">Treatment Duration:</strong>{' '}
                  {activeCase.timeline}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <h4 className="font-bold text-slate-800">Intervention Protocol:</h4>
                <p>
                  Dr. Aman Kumar formulated an individualized Ayurvedic protocol integrating targeted classical herbal formulations, therapeutic Panchakarma procedures (such as localized Basti or Takradhara), and a strict Pathya (circadian diet) regimen to pacify aggravated Doshas and eliminate accumulated metabolic toxins (Ama).
                </p>
                <h4 className="font-bold text-slate-800 pt-2">Clinical Outcome:</h4>
                <p>{activeCase.outcome}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-emerald-900">
                  {activeCase.metrics.label}
                </span>
                <span className="font-bold text-emerald-700 bg-white px-3 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                  {activeCase.metrics.before} → {activeCase.metrics.after}
                </span>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setActiveCase(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1E2E36] text-white text-xs font-semibold"
                >
                  Close Case
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
