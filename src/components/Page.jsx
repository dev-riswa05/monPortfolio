import React, { useState, useEffect, useRef } from 'react';
import GridStack from './GridStack';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Remplace ces IDs par ceux de ton compte EmailJS
    const SERVICE_ID = "service_c5m9k2u";
    const TEMPLATE_ID = "template_taysonj";
    const PUBLIC_KEY = "y_m3LUvdRamRXkb3I";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          form.current.reset(); // Vide le formulaire après envoi
      }, (error) => {
          console.log(error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
      });
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Variantes d'animation pour les textes (Entrée de bas en haut)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } 
    }
  };

  // Variantes pour le conteneur (pour l'effet de cascade)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        {/* Navigation */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-primary/10 px-4 sm:px-6 md:px-20 py-3 sm:py-4 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 shadow-sm"
        >
          {/* Logo avec effet de pulse discret */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2"
            >
              <h2 className="text-slate-900 dark:text-slate-100 text-lg sm:text-xl md:text-2xl font-black leading-tight tracking-tight">
                Waris<span className="text-primary">.dev</span>
              </h2>
            </motion.div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4 lg:gap-8">
            <nav className="flex items-center gap-4 lg:gap-9">
              {[
                { name: "Accueil", href: "#Accueil" },
                { name: "À propos", href: "#team" },
                { name: "Projets", href: "#Projets" },
                { name: "Stack", href: "#stack" }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="relative text-xs lg:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 15 }}
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center rounded-xl w-8 h-8 lg:w-10 lg:h-10 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base lg:text-lg shadow-inner transition-all"
                title="Basculer le mode sombre"
              >
                {darkMode ? '☀️' : '🌙'}
              </motion.button>

              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative flex min-w-[120px] lg:min-w-[140px] items-center justify-center rounded-xl h-9 lg:h-11 px-4 lg:px-6 bg-primary text-white text-xs lg:text-sm font-bold shadow-[0_8px_30px_rgb(var(--primary-rgb),0.2)] hover:shadow-primary/40 transition-all overflow-hidden group">
                  <span className="relative z-10 text-slate-900">Contactez-nous</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </motion.a>
            </nav>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center rounded-xl w-8 h-8 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base"
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white focus:outline-none"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Mobile déroulant */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-6 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {[
                  { name: "Accueil", href: "#Accueil" },
                  { name: "À propos", href: "#team" },
                  { name: "Projets", href: "#Projets" },
                  { name: "Stack", href: "#stack" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </motion.header>

        <main className="flex flex-col flex-1 w-full">

          {/* HERO SECTION */}
          <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 overflow-hidden" id="Accueil">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
            />

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              <div className="flex flex-col gap-6 lg:gap-8 flex-1 lg:-mt-20 xl:-mt-40">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                    Développeur Full-Stack
                  </motion.span>

                  <motion.h1 variants={fadeInUp} className="text-slate-900 dark:text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
                    Transforme tes idées en <span className="text-primary">applications performantes</span>
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
                    Je suis un développeur full-stack passionné par la création de solutions digitales uniques. 
                    Du design à la mise en production, je transforme tes concepts en applications web performantes, intuitives et évolutives.
                  </motion.p>
                </div>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="group flex min-w-[160px] sm:min-w-[180px] items-center justify-center rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary text-white text-sm sm:text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                    <a href="#contact">Démarrer un projet</a>
                  </button>

                  <button className="flex min-w-[160px] sm:min-w-[180px] items-center justify-center rounded-lg h-12 sm:h-14 px-6 sm:px-8 border-2 border-primary/30 text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold hover:bg-primary/5 transition-all">
                    <a href="#Projets">Voir mes réalisations</a>
                  </button>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex-1 w-full max-w-xl lg:max-w-2xl mt-8 lg:mt-0"
              >
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl group">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="/images/img1.jpg"
                    alt="Développement web"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full animate-pulse"></div>
                      <div className="text-white text-xs sm:text-sm font-medium uppercase tracking-widest">Innovation Digitale</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* TEAM SECTION */}
          <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-slate-100 dark:bg-slate-800/50" id="team">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-7xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center px-2"
              >
                À propos de moi
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base md:text-lg leading-relaxed text-center px-4"
              >
                Je suis un développeur full-stack passionné par la création de solutions digitales performantes. 
                Grâce à la maîtrise de plusieurs langages et technologies modernes, je conçois des sites web et applications fiables, rapides et adaptés aux besoins de chaque client. 
                Mon objectif est d'offrir un travail de qualité, de respecter les délais et d'accompagner mes clients à chaque étape du projet afin de transformer leurs idées en solutions digitales concrètes et durables.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Développement Fullstack</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                   Développement d’applications web performantes, modernes et adaptées aux besoins des utilisateurs.
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Design UX/UI</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Interfaces modernes et intuitives centrées sur l'expérience utilisateur.
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-start p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20 sm:col-span-2 lg:col-span-1"
                >
                  <div className="p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6M5 12v6h14v-6M5 6v6h14V6H5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-primary">Gestion Agile</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Suivi régulier, communication transparente et livraisons rapides.
                  </p>
                </motion.div>
              </div>

              </motion.div>
          </section>

          {/* PROJETS SECTION */}
          <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-white dark:bg-slate-900/50" id="Projets">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="max-w-7xl mx-auto"
            >
              <div className="mb-8 sm:mb-12 px-2">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 justify-center text-center"
                >
                  Mes réalisations marquantes
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl justify-center text-center mx-auto leading-relaxed"
                >
                  Une sélection de mes projets les plus récents, alliant performance technique et design sur mesure.
                </motion.p>
              </div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
              >
                <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8 }}
  className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 transition-all"
>
  <div className="overflow-hidden">
    <img src="/images/pro5.png" alt="Interne" className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
  </div>
  <div className="p-4 sm:p-5 lg:p-6">
    <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg lg:text-xl">
      Simplon Code Hub
    </h3>
    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">
      Outil interne de gestion de code source et de collaboration.
    </p>

    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        React
      </span>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-cyan-100 text-cyan-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        Tailwind
      </span>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-yellow-100 text-yellow-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        JavaScript
      </span>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        Python
      </span>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        Flask
      </span>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
        PostgreSQL
      </span>
    </div>

    <a
      href="https://stage-7kal-f0yj7vliy-wariss-projects-b1b0641d.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary text-xs sm:text-sm font-bold mt-3 sm:mt-4 inline-flex items-center group-hover:underline"
    >
      Voir le projet 
    </a>
  </div>
</motion.div>


                {showMore && (
                  <>
                    
                    
                  </>
                                       /*ajouter d'autre projet qui seront viseble que si le bouton Découvrir plus de projets est cliqué a mettre dans showMore */

                )}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex justify-center mt-8 sm:mt-12 px-2">
                <button 
                  onClick={() => setShowMore(!showMore)} 
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white text-sm sm:text-base rounded-xl font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  {showMore ? "Réduire la galerie" : "Découvrir plus de projets"}
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* STACK SECTION */}
          <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-slate-50 dark:bg-slate-900/30" id="stack">
            <GridStack />
          </section>

          {/* CONTACT SECTION */}
          <section
  className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 bg-white dark:bg-slate-900/50"
  id="contact"
>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
  >
    {/* LEFT SIDE */}
    <div className="space-y-8">
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          Prêt à donner vie à <br />
          <span className="text-primary">ton projet ?</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg mt-4">
          Que ce soit pour une application web ou un projet digital,
          je suis disponible pour t'accompagner.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-5">
        {/* EMAIL */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition">
            ✉️
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
              Email
            </p>
            <p className="text-base font-bold dark:text-white break-all">
              warisouattara2@gmail.com
            </p>
          </div>
        </div>

        {/* LOCALISATION */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition">
            📍
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
              Localisation
            </p>
            <p className="text-base font-bold dark:text-white">
              Abidjan, Côte d'Ivoire
            </p>
          </div>
        </div>

        {/* TELEPHONE */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition">
            📞
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
              Téléphone
            </p>
            <a
              href="tel:+2250172251230"
              className="text-base font-bold dark:text-white"
            >
              01 72 25 12 30
            </a>
          </div>
        </div>
      </motion.div>
    </div>

    {/* RIGHT SIDE - FORM */}
    <motion.div
      variants={fadeInUp}
      className="p-6 md:p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Nom complet
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Ex: Jean Marc"
              className="w-full mt-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="votre@email.com"
              className="w-full mt-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Votre message
          </label>
          <textarea
            name="message"
            required
            placeholder="Décrivez votre projet..."
            className="w-full mt-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 h-28 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
        >
          Envoyer
        </motion.button>
      </form>
    </motion.div>
  </motion.div>
</section>
        </main>

        {/* FOOTER */}
        <footer className="w-full bg-slate-900 dark:bg-black py-8 sm:py-10 px-4 sm:px-6 md:px-8 border-t border-primary/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                <h2 className="font-extrabold text-xl sm:text-2xl text-white tracking-tighter">
                  Waris<span className="text-primary">.dev</span>
                </h2>

                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-blue-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Disponible pour tes projets
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                  Développeur full-stack basé à Abidjan, je réalise des sites et applications sur mesure pour les entrepreneurs et les PME.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-slate-400 text-xs sm:text-sm">
                  <li>
                    <a href="#team" className="hover:text-primary transition flex items-center justify-center sm:justify-start gap-1 sm:gap-2 group">
                      <span className="h-px w-0 bg-primary transition-all group-hover:w-2 sm:group-hover:w-3"></span>
                      À propos
                    </a>
                  </li>
                  <li>
                    <a href="#Projets" className="hover:text-primary transition flex items-center justify-center sm:justify-start gap-1 sm:gap-2 group">
                      <span className="h-px w-0 bg-primary transition-all group-hover:w-2 sm:group-hover:w-3"></span>
                      Projets
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-primary transition flex items-center justify-center sm:justify-start gap-1 sm:gap-2 group">
                      <span className="h-px w-0 bg-primary transition-all group-hover:w-2 sm:group-hover:w-3"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">Ce que je propose</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-slate-400 text-xs sm:text-sm italic">
                  <li>Code propre, maintenable et optimisé.</li>
                  <li>Livraison rapide et respect des délais.</li>
                  <li>Support et suivi après mise en ligne.</li>
                </ul>
              </div>
            </div>

           
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Page;