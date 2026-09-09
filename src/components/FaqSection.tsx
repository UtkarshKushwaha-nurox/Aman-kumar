import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Send, X, Check } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAskModalOpen(false);
      setQuestionText('');
      setQuestionEmail('');
    }, 2000);
  };

  return (
    <section id="faq" className="py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
              Any Question?
            </h2>
          </div>

          <button
            onClick={() => setAskModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#1E2E36] hover:bg-[#2F4752] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Question</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#19272E]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EDF3F5] text-[#3D5B67] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#3D5B67] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Ask Question Modal */}
      {askModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setAskModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Question Sent!</h4>
                <p className="text-xs text-slate-500">
                  Dr. Thomas's team will reply to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAskSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#3D5B67]">
                  <HelpCircle className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Ask a Direct Question
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Have a specific question about treatments or preparations? Send it directly to Dr. Thomas.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email (for response)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={questionEmail}
                    onChange={(e) => setQuestionEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#3D5B67]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Question
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Type your medical or scheduling question here..."
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#3D5B67] resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setAskModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#1E2E36] hover:bg-[#2F4752] text-white rounded-full flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
