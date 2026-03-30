"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute inset-0 z-0 opacity-20 transition-opacity">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-8">
            REDEFINIENDO EL <br />
            <span className="text-white/40">ESTILO VISUAL.</span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.5}>
          <p className="text-base md:text-xl text-white/60 font-light tracking-widest uppercase max-w-2xl mx-auto mb-12">
            CREAMOS EXPERIENCIAS VISUALES QUE ELEVAN TU MARCA AL SIGUIENTE NIVEL.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.75}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase transition-transform hover:scale-105"
            >
              TRABAJEMOS JUNTOS
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              VER PORTAFOLIO
            </a>
          </div>
        </Reveal>
      </div>

      {/* Hero Bottom Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-30">SCROLL</span>
      </motion.div>
    </section>
  );
};
