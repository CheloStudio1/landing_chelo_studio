"use client";

import React from "react";
import { Reveal } from "../ui/Reveal";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-48 bg-black relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glow-white opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-12 text-glow">
            ¿LISTO PARA <br />
            <span className="text-accent text-glow-accent">DESTACAR?</span>
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <p className="text-lg md:text-xl text-white/50 font-light tracking-widest uppercase mb-16 max-w-2xl mx-auto">
            HABLEMOS SOBRE TU PRÓXIMO PROYECTO Y HAGÁMOSLO REALIDAD CON UNA VISIÓN ÚNICA.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.6}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:chelostudio.contact@gmail.com"
              className="text-base sm:text-lg md:text-4xl font-bold tracking-tighter border-b-2 border-accent pb-2 text-glow hover:text-accent transition-all break-all md:break-normal text-center"
            >
              CHELOSTUDIO.CONTACT@GMAIL.COM
            </a>
            
            <div className="hidden md:block w-px h-12 bg-white/20" />

            <button
               className="px-8 sm:px-12 py-4 sm:py-6 bg-accent text-white font-black tracking-[0.2em] text-sm md:text-base uppercase hover:bg-accent-hover transition-all hover:scale-105 shadow-[0_0_40px_rgba(32,26,255,0.3)] hover:shadow-[0_0_60px_rgba(32,26,255,0.5)] w-full sm:w-auto"
            >
              EMPEZAR AHORA
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
