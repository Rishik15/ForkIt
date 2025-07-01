import React from "react";
import { Github, Linkedin, Globe, Users } from "lucide-react";

export default function AboutTeam() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-primary mb-4">
          <Users className="w-6 h-6" />
          <h2 className="text-3xl font-bold">Our Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center">
          <div className="bg-base-200 p-6 rounded-xl shadow w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Rishik Yesgari</h3>
            <p className="text-sm text-base-content/70 mb-4">Backend and Recommendation Logic</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Rishik15" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition" />
              </a>
              <a href="https://www.linkedin.com/in/rishikreddyyesgari/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition" />
              </a>
              <a href="https://rishik-portfolio-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 hover:text-primary transition" />
              </a>
            </div>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow w-full max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2">John Acosta</h3>
            <p className="text-sm text-base-content/70 mb-4">Frontend and Database Management</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/502che" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition" />
              </a>
              <a href="https://www.linkedin.com/in/johnacosta1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition" />
              </a>
              {/* <a href="" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 hover:text-primary transition" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
