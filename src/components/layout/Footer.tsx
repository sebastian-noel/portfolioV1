'use client';

import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { heroContent } from '@/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-sm border-t border-white/10 overflow-visible shadow-[0_-8px_16px_rgba(255,255,255,0.09)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group text-muted-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6 group-hover:text-primary group-hover:scale-125 transition-all duration-300" />
          </button>
          
          {/* Social Links */}
          <div className="flex gap-6 items-center justify-center">
            <a
              href={heroContent.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={heroContent.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={heroContent.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Sebastian Noel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
