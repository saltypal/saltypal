import React from 'react';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { config } from '../data/config';

export function Header() {
  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium text-primary-900">{config.name}</h1>
          <div className="flex space-x-8">
            <a href="#about" className="text-primary-600 hover:text-primary-900 text-sm">About</a>
            <a href="#projects" className="text-primary-600 hover:text-primary-900 text-sm">Projects</a>
            <a href="#contact" className="text-primary-600 hover:text-primary-900 text-sm">Contact</a>
          </div>
          <div className="flex space-x-4">
            {config.socials.github && (
              <a href={config.socials.github} target="_blank" rel="noopener noreferrer" 
                 className="text-primary-400 hover:text-primary-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {config.socials.linkedin && (
              <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-primary-400 hover:text-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {config.socials.twitter && (
              <a href={config.socials.twitter} target="_blank" rel="noopener noreferrer"
                 className="text-primary-400 hover:text-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}