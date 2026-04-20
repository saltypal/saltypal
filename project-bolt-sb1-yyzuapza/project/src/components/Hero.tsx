import React from 'react';
import { config } from '../data/config';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=400&h=400"
            alt="Profile"
            className="w-64 h-64 object-cover shadow-2xl"
          />
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{config.name}</h1>
            <p className="text-xl text-gray-200 mb-8">{config.title}</p>
            <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">{config.about}</p>
            <div className="flex gap-6">
              {config.socials.github && (
                <a href={config.socials.github} target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-primary-200 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {config.socials.linkedin && (
                <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-primary-200 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {config.socials.twitter && (
                <a href={config.socials.twitter} target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-primary-200 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}