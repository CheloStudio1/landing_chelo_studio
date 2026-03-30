"use client";

import React from "react";
import { Reveal } from "../ui/Reveal";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-48 bg-black relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[200px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-12">
            ¿LISTO PARA <br />
            <span className="opacity-40">DESTACAR?</span>
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
              href="mailto:hola@spstudio.com"
              className="text-2xl md:text-4xl font-bold tracking-tighter border-b-2 border-white pb-2 hover:opacity-50 transition-all"
            >
              HOLA@SPSTUDIO.COM
            </a>
            
            <div className="hidden md:block w-px h-12 bg-white/20" />

            <button
               className="px-12 py-6 bg-white text-black font-black tracking-[0.2em] uppercase hover:bg-white/90 transition-all hover:scale-105"
            >
              EMPEZAR AHORA
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
