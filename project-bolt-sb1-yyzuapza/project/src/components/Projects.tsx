import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/config';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-primary-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-2 text-primary-900">{project.title}</h3>
              <p className="text-primary-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-primary-500 hover:text-primary-700 transition-colors">
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-primary-500 hover:text-primary-700 transition-colors">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}