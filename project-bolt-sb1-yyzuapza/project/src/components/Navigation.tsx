import React from 'react';
import { Home, FolderGit2, Camera, Mail } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6">
        <a href="#hero" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Home className="w-5 h-5 text-primary-600" />
        </a>
        <a href="#projects" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <FolderGit2 className="w-5 h-5 text-primary-600" />
        </a>
        <a href="#photography" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Camera className="w-5 h-5 text-primary-600" />
        </a>
        <a href="#contact" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Mail className="w-5 h-5 text-primary-600" />
        </a>
      </div>
    </nav>
  );
}