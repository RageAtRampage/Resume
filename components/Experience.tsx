import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary border-4 border-darker shadow-lg shadow-primary/50"></div>
              
              <div className="bg-card rounded-xl p-6 md:p-8 border border-slate-700/50 hover:border-primary/30 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <div className="text-primary font-medium text-lg flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.company}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0"></span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};