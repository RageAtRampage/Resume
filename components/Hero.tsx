import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { PROFILE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Available for hire
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              {PROFILE.name}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
            {PROFILE.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed text-lg">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-sky-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/25 text-center flex items-center justify-center"
            >
              Contact Me
            </a>
            {PROFILE.resumeUrl && (
              <a 
                href={PROFILE.resumeUrl}
                download="Mihul_Singh_Solanki_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            )}
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-slate-400">
            <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <div className="flex items-center gap-2 text-sm border-l border-slate-700 pl-6 ml-2">
              <MapPin size={16} />
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};