"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Edit3, Palette, Share2 } from "lucide-react";
import { services } from "../../data/mock";
import { Reveal } from "../ui/Reveal";

const iconMap: { [key: string]: any } = {
  Video: Video,
  Edit3: Edit3,
  Palette: Palette,
  Share2: Share2,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              NUESTRAS <br />
              <span className="opacity-40">CAPACIDADES.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="max-w-xs text-sm md:text-base text-white/50 tracking-wider">
              Ofrecemos soluciones creativas integrales desde la concepción hasta la entrega final de cada proyecto.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="bg-black p-12 space-y-8 min-h-[400px] flex flex-col justify-between group transition-colors"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(32,26,255,0.4)] transition-all duration-500">
                    <Icon size={24} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight uppercase">{service.title}</h3>
                </div>
                
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>

                <div className="pt-8 flex items-center gap-2 group-hover:gap-4 transition-all duration-500 opacity-20 group-hover:opacity-100">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-accent transition-colors">Saber más</span>
                  <div className="h-[1px] w-8 bg-accent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
