import React, { useState } from 'react';
import { ArrowUpRight, Clock, Calendar, BookOpen, X } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';

export const ReadArticles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="articles" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B67] block mb-2">
              Medical Insights & Health Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19272E] tracking-tight">
              Read Articles
            </h2>
          </div>

          <button
            onClick={() => setSelectedArticle(ARTICLES[0])}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#3D5B67] bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs transition-colors"
          >
            <span>See More</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, index) => (
            <article
              key={article.id}
              id={`article-card-${index}`}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#3D5B67] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Bottom Read Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3D5B67] group-hover:underline">
                    Read Full Article
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#EDF3F5] text-[#1E2E36] flex items-center justify-center group-hover:bg-[#1E2E36] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#3D5B67]/10 text-[#3D5B67] text-xs font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedArticle.readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="rounded-2xl overflow-hidden aspect-16/9 relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed pt-2">
                <p className="font-semibold text-slate-900">
                  {selectedArticle.summary}
                </p>
                <p>{selectedArticle.content}</p>
                <p>
                  Proper clinical management requires customized biometric targets. If you or a loved one are experiencing these symptoms, schedule an in-depth clinical consultation with Dr. Thomas for comprehensive evaluations and tailored prescriptions.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#1E2E36] text-white text-xs font-semibold"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
