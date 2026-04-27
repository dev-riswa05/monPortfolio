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
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://images.seeklogo.com/logo-png/40/1/tailwind-css-wordmark-logo-png_seeklogo-409466.png", large: true },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://image.pngaaa.com/344/1947344-middle.png", large: true },
    { name: "Flask", icon: "https://tse1.mm.bing.net/th/id/OIP.pNv5hoaND-MKiZ5uHJOeOwHaEK?w=750&h=422&rs=1&pid=ImgDetMain&o=7&rm=3", large: true },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23007ACC'/%3E%3Ctext x='12' y='16' font-size='8' text-anchor='middle' fill='white'%3EREST%3C/text%3E%3C/svg%3E" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLAlchemy", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%230078D5'/%3E%3Ctext x='12' y='16' font-size='6' text-anchor='middle' fill='white'%3ESQLA%3C/text%3E%3C/svg%3E" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Elementor", icon: "https://logowik.com/content/uploads/images/elementor1618.jpg", large: true },
    { name: "WPBakery", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FF3366'/%3E%3Ctext x='12' y='16' font-size='5' text-anchor='middle' fill='white'%3EWPB%3C/text%3E%3C/svg%3E" },
  ];

  const duplicatedStacks = [...stacks, ...stacks, ...stacks];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* HEADER PROFESSIONNEL - RESPONSIVE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 border-l-2 sm:border-l-4 border-blue-600 pl-4 sm:pl-6 lg:pl-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white mb-3 sm:mb-4 tracking-tighter leading-tight">
              Notre <span className="text-blue-600">Arsenal</span> Technologique.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              En tant que collectif de développeurs, nous mutualisons nos compétences pour concevoir des 
              architectures <strong className="font-bold text-blue-600 dark:text-blue-500">Full-Stack</strong> robustes. 
              Du design d'interface à la gestion de bases de données complexes, notre stack est optimisée 
              pour la performance et l'évolutivité.
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
          {showAll ? "↑ Réduire la vue" : "↓ Voir tout l'arsenal"}
        </motion.button>
      </div>

      {/* Légende optionnelle pour mobile */}
      <div className="mt-6 text-center text-[8px] sm:text-[10px] text-slate-400 dark:text-slate-600 px-4">
        
        
      </div>
    </section>
  );
};

export default TeamStack;