"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "../../data/mock";
import { Reveal } from "../ui/Reveal";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-48 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              PROYECTOS <br />
              <span className="opacity-40">SELECCIONADOS.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 border border-white/10 hover:bg-white hover:text-black transition-all cursor-pointer">Todos</span>
              <span className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 opacity-40 hover:opacity-100 transition-all cursor-pointer">Video</span>
              <span className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 opacity-40 hover:opacity-100 transition-all cursor-pointer">Branding</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] group overflow-hidden bg-white/5"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 mb-2">{project.category}</p>
                <h3 className="text-xl font-bold tracking-tight uppercase">{project.title}</h3>
                <div className="mt-6 flex items-center gap-4">
                   <div className="h-px w-8 bg-white" />
                   <span className="text-[10px] font-bold tracking-widest uppercase">Ver Detalles</span>
                </div>
              </div>

              {/* Minimalist Overlay Detail */}
              <div className="absolute top-6 right-6 w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[10px] font-light">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <Reveal width="100%">
               <a 
                 href="#" 
                 className="inline-block text-xs font-bold tracking-[0.4em] uppercase border-b border-white/20 pb-4 hover:border-white transition-colors"
                >
                    Explorar Archivo Completo
                </a>
            </Reveal>
        </div>
      </div>
    </section>
  );
};
