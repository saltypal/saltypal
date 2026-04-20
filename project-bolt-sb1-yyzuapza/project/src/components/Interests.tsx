import React from 'react';
import { Music, Film, Tv, Book } from 'lucide-react';
import { config } from '../data/config';

export function Interests() {
  const iconMap = {
    music: <Music className="w-6 h-6" />,
    movies: <Film className="w-6 h-6" />,
    tvShows: <Tv className="w-6 h-6" />,
    books: <Book className="w-6 h-6" />
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(config.interests).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg p-6 border border-primary-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {iconMap[category as keyof typeof iconMap]}
                <h3 className="text-xl font-medium text-primary-900 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}