import React from 'react';
import { Users, Star, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Create Sessions",
      description: "Start a new recommendation session and invite your group."
    },
     {
      icon: Lightbulb,
      title: "Get Results",
      description: "Receive suggestions based on the group's preferences"
    },
    {
      icon: Star,
      title: "Browse & Rate",
      description: "Explore recommendations and rate options as group"
    }   
  ];

  return (
    <section className="py-8 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
