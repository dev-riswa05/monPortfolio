import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamStack = () => {
  const [showAll, setShowAll] = useState(false);

  // TON STACK COMPLET (20 TECHNOS)
  const stacks = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://images.seeklogo.com/logo-png/40/1/tailwind-css-wordmark-logo-png_seeklogo-409466.png", large: true },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flask", icon: "https://tse1.mm.bing.net/th/id/OIP.pNv5hoaND-MKiZ5uHJOeOwHaEK?w=750&h=422&rs=1&pid=ImgDetMain&o=7&rm=3", large: true },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23007ACC'/%3E%3Ctext x='12' y='16' font-size='8' text-anchor='middle' fill='white'%3EREST%3C/text%3E%3C/svg%3E" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLAlchemy", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%230078D5'/%3E%3Ctext x='12' y='16' font-size='6' text-anchor='middle' fill='white'%3ESQLA%3C/text%3E%3C/svg%3E" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },  
    { name: "Gemini IA", icon: "data:image/svg+xml,%3Csvg xmlns='https://share.google/dLBxYIkn50ImuINre' viewBox='0 0 128 128'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ff4b4b'/%3E%3Cstop offset='25%25' stop-color='%23ffcc33'/%3E%3Cstop offset='50%25' stop-color='%234fb7ff'/%3E%3Cstop offset='100%25' stop-color='%2343d363'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M64 4C96.4 4 124 31.6 124 64C124 96.4 96.4 124 64 124C31.6 124 4 96.4 4 64C4 31.6 31.6 4 64 4Z' fill='url(%23g)'/%3E%3Cpath d='M64 18C43.4 18 26 35.4 26 56C26 76.6 43.4 94 64 94C84.6 94 102 76.6 102 56C102 35.4 84.6 18 64 18Z' fill='%23ffffff' opacity='0.15'/%3E%3Cpath d='M64 28C47.9 28 34 41.9 34 58C34 74.1 47.9 88 64 88C80.1 88 94 74.1 94 58C94 41.9 80.1 28 64 28Z' fill='white' opacity='0.2'/%3E%3C/svg%3E" },
  ];

  const duplicatedStacks = [...stacks, ...stacks, ...stacks];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* HEADER PROFESSIONNEL - RESPONSIVE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 border-l-2 sm:border-l-4 border-blue-600 pl-4 sm:pl-6 lg:pl-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mb-3 sm:mb-4 tracking-tighter leading-tight">
              Mon <span className="text-blue-600">Arsenal</span> Technologique.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              En tant que développeur indépendant, je rassemble mes compétences pour créer des 
              architectures <strong className="font-bold text-blue-600 dark:text-blue-500">Full-Stack</strong> fiables et modernes. 
              Du design d'interface à la gestion de bases de données, mon stack est pensé pour la performance,
              l'évolutivité et des expériences utilisateurs soignées.
            </p>
          </div>
        </div>
      </div>

      {/* DÉFILEMENT INFINI - RESPONSIVE */}
      {!showAll ? (
        <div className="relative flex overflow-hidden py-6 sm:py-8 lg:py-10 pointer-events-none">
          {/* Gradients de protection - adaptés à la couleur de fond */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

          <motion.div
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-33.33%" }}
            transition={{
              ease: "linear",
              duration: 40, // Légèrement plus rapide sur mobile pour fluidité
              repeat: Infinity,
            }}
          >
            {duplicatedStacks.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center mx-4 sm:mx-8 lg:mx-12 pointer-events-auto"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`object-contain transition-transform hover:scale-125 duration-300 
                    ${tech.large 
                      ? "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" 
                      : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    }`} 
                />
                <span className="mt-2 sm:mt-3 lg:mt-4 text-[8px] sm:text-[10px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-wider sm:tracking-widest">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* GRILLE FIXE AU CLIC - RESPONSIVE */
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          >
            {stacks.map((tech) => (
              <motion.div 
                key={tech.name} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`mb-2 sm:mb-3 lg:mb-4 object-contain 
                    ${tech.large 
                      ? "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" 
                      : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    }`} 
                />
                <span className="font-bold text-[10px] sm:text-xs lg:text-sm dark:text-white uppercase tracking-tight text-center break-words">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* BOUTON MINIMALISTE - RESPONSIVE */}
      <div className="mt-10 sm:mt-12 lg:mt-16 text-center px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="text-[8px] sm:text-[9px] lg:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] text-slate-900 dark:text-white border-b-2 border-blue-600 pb-1 sm:pb-2 hover:text-blue-600 hover:border-blue-700 transition-all duration-300 uppercase"
        >
          {showAll ? " Réduire la vue" : " Voir tout l'arsenal"}
        </motion.button>
      </div>

      {/* Légende optionnelle pour mobile */}
      <div className="mt-6 text-center text-[8px] sm:text-[10px] text-slate-400 dark:text-slate-600 px-4">
        
        
      </div>
    </section>
  );
};

export default TeamStack;