import React from 'react';
import { config } from '../data/config';

export function About() {
  return (
    <section id="about" className="py-24 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">About Me</h2>
        <div className="bg-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=300&h=300"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-medium mb-4 text-primary-900">{config.title}</h3>
              <p className="text-primary-600 whitespace-pre-line leading-relaxed">{config.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}