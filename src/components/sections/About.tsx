"use client";

import React from "react";
import { Reveal } from "../ui/Reveal";
import { Typewriter } from "../ui/Typewriter";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-24">
          <Reveal width="100%">
            <Typewriter 
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] text-glow uppercase"
              segments={[
                { text: "EL " },
                { text: "DETALLE", className: "text-accent text-glow-accent" },
                { text: " ES NUESTRO" },
                { isLineBreak: true },
                { text: "ESTÁNDAR DE " },
                { text: "EXCELENCIA", className: "text-accent text-glow-accent" },
                { text: "." }
              ]}
            />
          </Reveal>

          <div className="space-y-16 max-w-5xl mx-auto text-center">
            <Reveal delay={0.4}>
              <p className="text-2xl md:text-4xl font-light text-white leading-tight max-w-4xl mx-auto text-center font-mona lowercase">
                “en <span className="font-bold">chelo studio</span>, no solo creamos imágenes, construimos historias visuales que perduran y conectan emocionalmente con tu audiencia.”
              </p>
            </Reveal>

            <Reveal delay={0.6} width="100%">
              <div className="space-y-8 text-center">
                <p className="text-white/40 leading-relaxed text-sm md:text-lg text-center font-mona lowercase max-w-2xl mx-auto">
                  somos un estudio creativo boutique con base en el minimalismo y la elegancia. nos especializamos en elevar marcas a través de una dirección creativa impecable y una ejecución técnica de primer nivel.
                </p>
                <p className="text-white/40 leading-relaxed text-sm md:text-lg text-center font-mona lowercase max-w-2xl mx-auto">
                  cada proyecto es una oportunidad para desafiar los límites de la creatividad visual, manteniendo siempre una estética limpia y sofisticada que es el sello distintivo de <span className="font-bold text-white/60">chelo studio</span>.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8} width="100%">
              <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-32 pt-8">
                <div className="text-center font-mona">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent text-glow-accent">100+</h4>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mt-2">Proyectos</p>
                </div>
                <div className="text-center font-mona">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent text-glow-accent">5+</h4>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mt-2">Años de Exp.</p>
                </div>
                <div className="text-center font-mona">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent text-glow-accent">100%</h4>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mt-2">Excelencia</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
