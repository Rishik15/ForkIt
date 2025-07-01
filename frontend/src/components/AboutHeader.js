import React from "react";

export default function AboutHeader() {
  return (
    <section className="text-center px-4 mb-6 mt-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        About ForkIt
      </h1>
      <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
        ForkIt is a group decision-making platform designed to help people collaboratively choose restaurants that fit everyone’s preferences.
      </p>
    </section>
  );
}
