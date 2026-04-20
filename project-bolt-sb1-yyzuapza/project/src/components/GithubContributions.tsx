import React from 'react';
import { config } from '../data/config';

export function GithubContributions() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">GitHub Activity</h2>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <img
            src={`https://ghchart.rshah.org/${config.github}`}
            alt="Github Contributions"
            className="w-full"
          />
          <div className="mt-8 text-center">
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              View my GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}