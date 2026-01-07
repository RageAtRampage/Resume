import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-darker pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              I am currently looking for new opportunities in Java Microservices and Backend Development. 
              Feel free to reach out if you have any questions or just want to say hi!
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors border border-slate-700 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-base sm:text-lg break-all">{PROFILE.email}</span>
              </a>
              
              {/* <a href={`tel:${PROFILE.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors border border-slate-700 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-base sm:text-lg">{PROFILE.phone}</span>
              </a> */}

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-slate-700 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-base sm:text-lg">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
             <div className="bg-card p-8 rounded-2xl border border-slate-800 max-w-sm w-full text-center">
                <h3 className="text-xl font-bold text-white mb-6">Find me on</h3>
                <div className="flex justify-center gap-6">
                  <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                    <div className="p-3 bg-dark rounded-full">
                      <Linkedin size={24} />
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                    <div className="p-3 bg-dark rounded-full">
                      <Github size={24} />
                    </div>
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};