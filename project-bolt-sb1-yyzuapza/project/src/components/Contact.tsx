import React from 'react';
import { Mail, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { config } from '../data/config';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-primary-900 mb-12">Get In Touch</h2>
        <div className="bg-white rounded-lg p-8">
          <div className="flex flex-col space-y-4">
            <a href={`mailto:${config.email}`} 
               className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              {config.email}
            </a>
            <div className="flex items-center text-primary-600">
              <MessageSquare className="w-5 h-5 mr-2" />
              {config.discord}
            </div>
            {Object.entries(config.socials).map(([platform, url]) => {
              if (platform === 'discord') return null;
              const Icon = {
                github: Github,
                linkedin: Linkedin,
                twitter: Twitter
              }[platform];
              
              return Icon ? (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                  <Icon className="w-5 h-5 mr-2" />
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}