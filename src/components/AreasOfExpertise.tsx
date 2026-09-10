import React, { useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { AREAS_OF_EXPERTISE } from '../data/mockData';
import { ExpertiseItem } from '../types';

interface AreasOfExpertiseProps {
  onSelectExpertise: (title: string) => void;
}

export const AreasOfExpertise: React.FC<AreasOfExpertiseProps> = ({
  onSelectExpertise,
}) => {
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null);

  return (
    <section id="expertise" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "See More ↗" */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
              Areas of Expertise
            </h2>
          </div>

          <a
            href="#services"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#3D5B67] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs transition-colors"
          >
            <span>See More</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Medical Expertise Cards matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AREAS_OF_EXPERTISE.map((item, index) => (
            <div
              key={item.id}
              id={`expertise-card-${index}`}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white flex flex-col justify-end aspect-4/5 sm:aspect-3/4 md:aspect-4/5 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for high text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/40 backdrop-blur-md text-white border border-white/20">
                  {item.tag}
                </span>
              </div>

              {/* Bottom pill / info bar matching the design */}
              <div className="relative p-5 sm:p-6 z-10 space-y-2">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                {/* Bottom title pill with arrow */}
                <div className="flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-white/70 group-hover:bg-white transition-colors">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-7 h-7 rounded-xl bg-[#1E2E36] text-white flex items-center justify-center shrink-0 group-hover:bg-[#3D5B67] group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile See More link */}
        <div className="sm:hidden mt-6 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-5 py-2.5 rounded-full border border-slate-200"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Expertise Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative">
            <div className="h-48 relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {selectedItem.tag}
                </span>
                <h3 className="text-xl font-bold">{selectedItem.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ayurvedic Protocols Include:
                </h4>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3D5B67]" />
                    <span>Nadi Pariksha & Prakriti (Dosha) assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3D5B67]" />
                    <span>Customized classical herbal & Rasayana formulations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3D5B67]" />
                    <span>Pathya-Apathya dietary & Dinacharya lifestyle guidance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectExpertise(title);
                  }}
                  className="px-5 py-2 text-xs font-semibold bg-[#1E2E36] hover:bg-[#2F4752] text-white rounded-full flex items-center gap-1.5"
                >
                  <span>Book Consultation for this</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
