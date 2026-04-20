import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Photography } from './components/Photography';
import { GithubContributions } from './components/GithubContributions';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <GithubContributions />
        <Photography />
        <Interests />
        <Contact />
      </main>
      <footer className="py-6 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-primary-500 text-sm">
            © {new Date().getFullYear()} - Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;