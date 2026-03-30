"use client";

import React from "react";
import { process } from "../../data/mock";
import { Reveal } from "../ui/Reveal";

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-48 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              NUESTRO <br />
              <span className="opacity-40">PROCESO.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {process.map((step, index) => (
            <div key={step.id} className="relative p-12 border border-white/10 group hover:border-white/30 transition-all duration-500">
              <Reveal delay={index * 0.2}>
                <span className="text-6xl font-black text-accent/50 mb-8 block group-hover:text-accent transition-all duration-500">0{index + 1}</span>
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-6">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
              
              {/* Decorative lines */}
              <div className="absolute top-0 right-0 w-12 h-[1px] bg-accent/20 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-accent/20 group-hover:bg-accent group-hover:h-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
