import React from 'react';
import { config } from '../data/config';

export function Photography() {
  return (
    <section id="photography" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.photography.map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}