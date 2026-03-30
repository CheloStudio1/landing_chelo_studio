"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background atmospheric details */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-glow-white opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-glow-white opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <Reveal width="100%">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-8 text-glow">
            REDEFINIENDO EL <br />
            <span className="text-accent text-glow-accent">ESTILO VISUAL.</span>
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
              className="px-10 py-5 bg-accent text-white text-sm font-bold tracking-widest uppercase transition-all hover:bg-accent-hover hover:scale-105 shadow-[0_0_30px_rgba(32,26,255,0.4)] hover:shadow-[0_0_50px_rgba(32,26,255,0.6)]"
            >
              TRABAJEMOS JUNTOS
            </a>
            <a
              href="#portfolio"
              className="px-10 py-5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-all backdrop-blur-sm"
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
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-accent/60 animate-pulse" />
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 text-accent font-bold">SCROLL</span>
      </motion.div>
    </section>
  );
};
