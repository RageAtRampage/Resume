import React from 'react';
import { Award, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import { AWARDS, EDUCATION, PUBLICATION } from '../constants';

export const Others: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Education & Publication */}
          <div className="space-y-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="bg-card p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-1">{EDUCATION.institution}</h3>
                <p className="text-primary mb-2">{EDUCATION.degree} in {EDUCATION.major}</p>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{EDUCATION.location}</span>
                  <span>{EDUCATION.period}</span>
                </div>
                {EDUCATION.percentage && (
                  <div className="mt-2 text-sm text-slate-500">
                    Grade/Percentage: <span className="text-slate-300">{EDUCATION.percentage}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Publication */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-white">Publication</h2>
              </div>
              <div className="bg-card p-6 rounded-xl border border-slate-700/50">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    "{PUBLICATION.title}"
                  </h3>
                  {PUBLICATION.link && (
                    <a 
                      href={PUBLICATION.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-primary transition-colors p-1"
                      aria-label="View Publication"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-400 italic mb-3">
                  {PUBLICATION.authors}
                </p>
                <p className="text-sm text-slate-300 mb-2">
                  {PUBLICATION.conference} ({PUBLICATION.year})
                </p>
                <div className="mt-4 p-3 bg-dark rounded border border-slate-800">
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-primary">Abstract:</span> {PUBLICATION.abstract}
                  </p>
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  DOI: {PUBLICATION.doi}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Awards & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-white">Certifications & Awards</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AWARDS.map((award, index) => (
                <div key={index} className="bg-card p-4 rounded-xl border border-slate-700/50 hover:border-primary/30 transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{award.title}</h4>
                    <p className="text-xs text-slate-400">{award.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};