import React from 'react';
import Login from "@/components/Login";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 text-base-content overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Group Recommendation
              <span className="block text-primary">System</span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-base-content/70 max-w-xl mx-auto lg:mx-0">
              Make better decisions together. Sign in with Google to start a session or join using an invitation code.
            </p>

            {/* Buttons */}
            <div className="w-full flex justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="btn btn-outline shadow hover:shadow-md bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
                  <Login />
                </a>
                <button className="btn btn-neutral shadow hover:shadow-md">
                  Have a code?
                </button>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative overflow-hidden w-full">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 shadow-2xl">
              <img
                src="/Images/landingpageimage.png"
                alt="Group collaboration"
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
