import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 bg-darker relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <QuoteIcon className="text-primary/40" size={48} />
        </div>
        <blockquote className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
          "The important thing is to never stop questioning. Even if the question is: <span className="text-primary">‘Why did I write this code six months ago?’</span>"
        </blockquote>
        <cite className="text-slate-400 text-lg font-medium not-italic">
          — Matt Parker
        </cite>
      </div>
    </section>
  );
};