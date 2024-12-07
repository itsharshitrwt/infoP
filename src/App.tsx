import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { CodeMatrix } from './components/CodeMatrix';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="fixed inset-0 bg-[#10B981]/5 pointer-events-none" />
      <Navbar />
      <Hero />
      <AboutMe />
      <CodeMatrix />
      <TechStack />
      <Projects />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;