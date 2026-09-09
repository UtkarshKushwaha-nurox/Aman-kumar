import React from 'react';
import { HeartHandshake, ShieldCheck, Clock, HeartPulse } from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data/mockData';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-teal-200" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-200" />;
      case 'ClockAlert':
        return <Clock className="w-5 h-5 text-teal-200" />;
      case 'HandHeart':
      default:
        return <HeartHandshake className="w-5 h-5 text-teal-200" />;
    }
  };

  return (
    <section id="why-me" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
              Commitment & Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
              Why Choose Me
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Delivering gold-standard internal medicine diagnostics paired with empathetic bedside care.
          </p>
        </div>

        {/* 4 Slate-Teal Cards matching the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_ME.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${index}`}
              className="bg-[#3D5B67] hover:bg-[#344E58] text-white p-6 sm:p-7 rounded-2xl md:rounded-3xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group border border-white/10"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-white/12 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-teal-200/70 font-semibold tracking-wide uppercase">
                <span>Core Pillar</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
