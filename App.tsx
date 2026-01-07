import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Others } from './components/Others';
import { Contact } from './components/Contact';
import { Quote } from './components/Quote';

function App() {
  return (
    <div className="bg-darker min-h-screen text-slate-300">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Quote />
        <Skills />
        <Others />
      </main>
      <Contact />
    </div>
  );
}

export default App;