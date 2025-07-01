import React from "react";
import Link from "next/link";
import { Github, Info, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        
        {/* Left: Made by */}
        <div className="flex items-center gap-2">
          <span>Made by</span>
          <span className="font-semibold">Rishik Reddy Yesgari</span>
          <span>and</span>
          <span className="font-semibold">John Acosta</span>
        </div>

        <div className="flex items-center gap-6">

          <a
            href="https://github.com/Rishik15/ForkIt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
