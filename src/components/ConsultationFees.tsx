import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';

interface ConsultationFeesProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const ConsultationFees: React.FC<ConsultationFeesProps> = ({ onSelectPlan }) => {
  return (
    <section id="fees" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight mb-3">
            Consultation Fees
          </h2>
          <p className="text-sm text-slate-600">
            Clear, transparent pricing with no hidden charges. Choose the level of clinical evaluation that best fits your medical needs.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${index}`}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#3D5B67] text-white shadow-2xl md:-translate-y-2 border-2 border-teal-300/30 ring-4 ring-[#3D5B67]/20'
                    : 'bg-white text-slate-900 shadow-lg border border-slate-200/80 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-200 text-[#1E2E36] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Title & Duration */}
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        isFeatured ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-white/15 text-teal-100'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {plan.duration}
                    </span>
                  </div>

                  <p
                    className={`text-xs mb-6 ${
                      isFeatured ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-current/10">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {plan.currencySymbol || '₹'}{plan.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isFeatured ? 'text-slate-200' : 'text-slate-500'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isFeatured ? 'text-teal-200' : 'text-slate-400'
                      }`}
                    >
                      Includes:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-teal-200 text-[#1E2E36]'
                              : 'bg-[#3D5B67]/10 text-[#3D5B67]'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={
                            isFeatured ? 'text-slate-100' : 'text-slate-700'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  id={`select-plan-${plan.id}`}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 ${
                    isFeatured
                      ? 'bg-white hover:bg-slate-100 text-[#1E2E36] shadow-md'
                      : 'bg-[#1E2E36] hover:bg-[#2F4752] text-white shadow-xs'
                  }`}
                >
                  <span>Book Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
