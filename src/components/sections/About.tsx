"use client";

import React from "react";
import { Reveal } from "../ui/Reveal";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight max-w-sm">
              EL DETALLE <span className="opacity-40">ES NUESTRO</span> <br />
              ESTÁNDAR.
            </h2>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={0.4}>
              <p className="text-lg md:text-2xl font-light text-white/70 leading-relaxed italic">
                “En SP Studio, no solo creamos imágenes, construimos historias visuales que perduran y conectan emocionalmente con tu audiencia.”
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  Somos un estudio creativo boutique con base en el minimalismo y la elegancia. Nos especializamos en elevar marcas a través de una dirección creativa impecable y una ejecución técnica de primer nivel.
                </p>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  Cada proyecto es una oportunidad para desafiar los límites de la creatividad visual, manteniendo siempre una estética limpia y sofisticada que es el sello distintivo de Samuel Peralta Studio.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="flex gap-16">
                <div>
                  <h4 className="text-3xl font-bold tracking-tighter">100+</h4>
                  <p className="text-[10px] tracking-widest uppercase text-white/40">Proyectos</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold tracking-tighter">5+</h4>
                  <p className="text-[10px] tracking-widest uppercase text-white/40">Años de Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold tracking-tighter">100%</h4>
                  <p className="text-[10px] tracking-widest uppercase text-white/40">Excelencia</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
