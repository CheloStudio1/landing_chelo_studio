"use client";

import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { name: "GitHub", icon: <Github size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="relative h-12 w-48 mb-6">
              <Image
                src="/logo.png"
                alt="Chelo Studio"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Creamos experiencias visuales que elevan tu marca al siguiente nivel. Minimalismo, impacto y calidad.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Estudio</h4>
            <ul className="space-y-3 text-center md:text-left">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">Nosotros</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Servicios</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-white transition-colors text-sm">Portafolio</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Legal</h4>
            <ul className="space-y-3 text-center md:text-left">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacidad</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Términos</a></li>
            </ul>
          </div>

          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40">Redes</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-xs tracking-widest uppercase text-center md:text-left">
          <p className="text-center md:text-left">© {currentYear} CHELO STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="text-center md:text-right">DISEÑADO POR AGENCIA</p>
        </div>
      </div>
    </footer>
  );
};
