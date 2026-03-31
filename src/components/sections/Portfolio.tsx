"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio } from "../../data/mock";
import { Reveal } from "../ui/Reveal";

export const Portfolio = () => {
  // Triple the data for infinite look
  const loopedPortfolio = [...portfolio, ...portfolio, ...portfolio];
  
  const [currentIndex, setCurrentIndex] = useState(portfolio.length);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const motionControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Seamless Jump Logic
  const handleAnimationComplete = () => {
    setIsTransitioning(false);
    
    // Jump if we go past the "real" middle set
    if (currentIndex >= portfolio.length * 2) {
      setCurrentIndex(portfolio.length);
    } else if (currentIndex < portfolio.length) {
      setCurrentIndex(portfolio.length + (portfolio.length - 1));
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-48 bg-black overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-glow">
              PROYECTOS <br />
              <span className="opacity-40">SELECCIONADOS.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative group">
          <div className="relative overflow-visible py-4 -mx-4 px-4 h-full">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `calc(-${currentIndex * (100 / slidesToShow)}% - ${currentIndex * (2 / slidesToShow)}rem)` }}
              transition={isTransitioning ? { duration: 1.2, ease: [0.65, 0, 0.35, 1] } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
            >
              {loopedPortfolio.map((project, index) => (
                <div 
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 2 / slidesToShow}rem)` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % portfolio.length) * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative aspect-[3/4] group/item overflow-hidden bg-white/5 border border-white/5"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-1000 ease-in-out"
                    />
                    
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/60 to-transparent translate-y-4 group-hover/item:translate-y-0 opacity-0 group-hover/item:opacity-100 transition-all duration-500 z-20">
                      <p className="text-sm font-bold tracking-widest lowercase text-accent mb-3 font-mona">{project.category}</p>
                      <h3 className="text-2xl font-bold tracking-tight uppercase mb-6 leading-tight">{project.title}</h3>
                    </div>

                    <div className="absolute top-8 right-8 w-10 h-10 border border-white/10 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-700 backdrop-blur-sm z-20">
                      <span className="text-xs font-light">0{(index % portfolio.length) + 1}</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-12">
          {/* Custom Controls Row */}
          <div className="flex items-center gap-12">
            <button 
              onClick={prevSlide}
              className="flex items-center justify-center text-white/50 hover:text-accent transition-all duration-500 hover:scale-125 group/btn"
              aria-label="Anterior"
            >
              <div className="p-4 border border-white/10 rounded-full group-hover/btn:border-accent/50 transition-colors">
                <ChevronLeft size={32} strokeWidth={1} />
              </div>
            </button>

            <div className="flex justify-center gap-4">
              {portfolio.map((_, i) => {
                  const isActive = (currentIndex % portfolio.length) === i;
                  return (
                    <button
                        key={i}
                        onClick={() => {
                          if (isTransitioning) return;
                          setIsTransitioning(true);
                          setCurrentIndex(portfolio.length + i);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-1 transition-all duration-1000 ${isActive ? "w-16 bg-accent shadow-[0_0_15px_rgba(32,26,255,0.6)]" : "w-6 bg-white/10 hover:bg-white/30"}`}
                        aria-label={`Ir a proyecto ${i + 1}`}
                    />
                  )
              })}
            </div>

            <button 
              onClick={nextSlide}
              className="flex items-center justify-center text-white/50 hover:text-accent transition-all duration-500 hover:scale-125 group/btn"
              aria-label="Siguiente"
            >
              <div className="p-4 border border-white/10 rounded-full group-hover/btn:border-accent/50 transition-colors">
                <ChevronRight size={32} strokeWidth={1} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
