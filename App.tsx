/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'en' | 'ar';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={lang === 'ar' ? 'font-arabic' : 'font-display'}>
      {/* Global Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <div className="glass flex w-full max-w-7xl items-center justify-between px-6 py-3 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter font-display" dir="ltr">
              <span className="text-neon">&lt;</span>JUBA<span className="text-neon">/&gt;</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-neon transition-colors" href="#projects">{t.nav.caseStudies}</a>
            <a className="text-sm font-medium hover:text-neon transition-colors" href="#stack">{t.nav.techStack}</a>
            <a className="text-sm font-medium hover:text-neon transition-colors" href="#stats">{t.nav.github}</a>
            <a className="text-sm font-medium hover:text-neon transition-colors" href="#contact">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors px-2"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              {t.nav.letsBuild}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-5xl font-bold text-slate-100 leading-tight ${lang === 'en' ? 'font-arabic' : 'font-display'}`}>
                {t.hero.subtitle}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                {t.hero.title1} <br />
                <span className="text-primary">{t.hero.title2}</span>
              </h1>
            </div>
            <div className="h-8">
              <p className="text-lg md:text-xl text-slate-400 font-medium cursor-blink">
                {t.hero.description1}<span className="text-neon">{t.hero.description2}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-neon text-background-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all">
                {t.hero.viewProjects}
              </button>
              <button className="border border-slate-700 hover:border-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all backdrop-blur-sm">
                {t.hero.contactMe}
              </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="relative w-full aspect-square max-w-md">
              {/* Abstract 3D-style Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#007acc', stopOpacity: 1 }}></stop>
                      <stop offset="100%" style={{ stopColor: '#00F0FF', stopOpacity: 1 }}></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" fill="none" r="40" stroke="url(#grad1)" strokeDasharray="4 2" strokeWidth="0.5"></circle>
                  <circle cx="100" cy="100" fill="none" r="60" stroke="url(#grad1)" strokeWidth="0.2"></circle>
                  <rect fill="rgba(0,122,204,0.1)" height="60" rx="8" stroke="url(#grad1)" strokeWidth="1" width="60" x="70" y="70"></rect>
                  <path d="M100 30 L100 70 M100 130 L100 170 M30 100 L70 100 M130 100 L170 100" opacity="0.5" stroke="#00F0FF" strokeWidth="1"></path>
                  <circle cx="100" cy="30" fill="#00F0FF" r="3"></circle>
                  <circle cx="100" cy="170" fill="#00F0FF" r="3"></circle>
                  <circle cx="30" cy="100" fill="#007acc" r="3"></circle>
                  <circle cx="170" cy="100" fill="#007acc" r="3"></circle>
                </svg>
              </div>
              <img alt="Minimalist 3D abstract server client architecture" className="w-full h-full object-contain mix-blend-lighten" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bLUodmdf1WaMSDyaR0EbbNCpV3LzEVX0cijNwVQSeXAYdqcDoC-OFnd9NNzWUrguyezRQ01iu0ADTcEtJtXNegn_76b6iZC-0Z77mYK2Y6hHe6xjImYI_B1E19lcJa8f9l-7numsQjAkjMr1MVM4JITRT2mI2i7-H9rzqhj4BF_u8ouWHMGVEpFtZQL_iMvOlS23y637fdaiVSErkR7Xmj-mhuH5x5mA5GRE5_PjBfsUBF0vavOZNl2p9t9kgH6b3jRKbkgb4pY" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Bento Box Grid: Case Studies */}
        <section className="max-w-7xl mx-auto px-6 py-20" id="projects">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-neon font-bold tracking-widest uppercase text-sm mb-2">{t.portfolio.tag}</h3>
              <h2 className="text-4xl font-bold">{t.portfolio.title}</h2>
            </div>
            <div className="hidden md:block text-slate-500 text-sm italic">
              {t.portfolio.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
            {/* Project 1: Large Bento */}
            <div className="md:col-span-2 md:row-span-2 glass rounded-xl overflow-hidden bento-card group flex flex-col">
              <div className="relative h-2/3 overflow-hidden">
                <img alt="Quantum Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7EhmH3psDk4DuEKmyTJH04Ua6GQsCfhNF67S8KtqrWVq4vJtr44KYM1hViWqcewCcmcnFMXIHm9jf7HNtjUFmJ9U1KlgXSBc4lUcmoQtvkAwrV-n7B843_7usTaIMhTqekpqpBBcTDXHYmqW_urMUZGCYZ8H_I2YFmQboL6dnRSiSUbsjEGlAnvSaQ2nIng84X0jcu3TleW3-IsHWrxqQbnHmFWmHsufwdXOB_s7pjiLGAmAIHuHlTaMoU-xQaqEMVK4mSiim5mU" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full border border-primary/30" dir="ltr">React</span>
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full border border-primary/30" dir="ltr">Node.js</span>
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full border border-primary/30" dir="ltr">GraphQL</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.portfolio.quantumTitle}</h3>
                  <p className="text-slate-400 max-w-lg">{t.portfolio.quantumDesc}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-neon font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                  {t.portfolio.explore} <span className={`material-symbols-outlined text-sm ${lang === 'ar' ? 'rotate-180' : ''}`}>arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Project 2: Vertical Bento */}
            <div className="glass rounded-xl overflow-hidden bento-card group flex flex-col">
              <div className="h-48 overflow-hidden">
                <img alt="Neural Network Visualizer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWB7Mlg6LNymjUVaBXV-hPRgVu0JU9wqRag-dnJ-Evup4bTl6xprP2Dubmzfvn88XOsm_jFoGoKlFBhEZWzNrN9THkKcAly3cZwGmI11IKS2LEH74xNMAuwpHXFEzFDc-f_eI-gIhFKT00JsyX6wDpUyCO4NQmBsIDoGiEdUeZ8pruwzKU5EhIptmgwvA8PZY15CVwmrDIVBBo6-DwxYuLAnWnWo7qi5-8z7jcqVj6iqOoZCNy1H_gu3EckK2ZfvcebmeWUoYDoy4" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full" dir="ltr">Python</span>
                  <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full" dir="ltr">Three.js</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{t.portfolio.neuralTitle}</h3>
                <p className="text-slate-400 text-sm">{t.portfolio.neuralDesc}</p>
              </div>
            </div>

            {/* Project 3: Small Horizontal Bento */}
            <div className="glass rounded-xl overflow-hidden bento-card group flex flex-col">
              <div className="h-48 overflow-hidden">
                <img alt="E-ink Commerce" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa2ECGs_PJ928VTVqQpsvKkUrJzcoj_5EdyhpCsFS7V2yRnZIuSCbfHcPYHJq2KOyiZuufqEAzecf8DIQfzAEsivVs35Y3-_WC413SKjGccRichL9Ky4Ui0pTdloEuzWiIAefmBIXBd6Ypw6q2htO03UgekZqHutAPpNGxhIE8BUNGtuI2tVCGw0otKX6XjiLCvpfndjK_G6n2MIFQfIT9VOPp3TtqkvS_7OqveyBA5KHoEHdCkGCj8Wa-R7F7HeQYp4HpjMgA3hA" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full" dir="ltr">Go</span>
                  <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full" dir="ltr">Redis</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{t.portfolio.syncTitle}</h3>
                <p className="text-slate-400 text-sm">{t.portfolio.syncDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-slate-custom/30 py-20" id="stack">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">{t.stack.title}</h2>
            <div className="flex flex-wrap justify-center gap-4" dir="ltr">
              {['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS', 'Go', 'Docker', 'Redis', 'Python'].map((tech) => (
                <div key={tech} className="bg-slate-custom px-6 py-3 rounded-lg border border-slate-700 hover:border-neon transition-colors flex items-center gap-3">
                  <span className="text-primary font-bold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live GitHub Stats */}
        <section className="max-w-7xl mx-auto px-6 py-24" id="stats">
          <div className="glass rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
            <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} p-8 opacity-10`}>
              <span className="material-symbols-outlined text-9xl">monitoring</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{t.stats.title}</h2>
                <p className="text-slate-400 mb-6">{t.stats.subtitle}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-slate-custom/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-neon text-2xl font-bold" dir="ltr">2.4k+</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{t.stats.commits}</div>
                  </div>
                  <div className="bg-slate-custom/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-neon text-2xl font-bold" dir="ltr">48</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{t.stats.repos}</div>
                  </div>
                  <div className="bg-slate-custom/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-neon text-2xl font-bold" dir="ltr">1.2k</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{t.stats.stars}</div>
                  </div>
                  <div className="bg-slate-custom/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-neon text-2xl font-bold" dir="ltr">99.9%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{t.stats.uptime}</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="h-32 bg-slate-custom/50 rounded-xl border border-slate-700 p-4 overflow-hidden relative">
                  {/* Placeholder for contribution graph */}
                  <div className="flex items-end gap-1 h-full w-full">
                    <div className="bg-primary/20 w-full h-[20%] rounded-t-sm"></div>
                    <div className="bg-primary/40 w-full h-[40%] rounded-t-sm"></div>
                    <div className="bg-primary/60 w-full h-[30%] rounded-t-sm"></div>
                    <div className="bg-neon w-full h-[70%] rounded-t-sm"></div>
                    <div className="bg-primary/30 w-full h-[50%] rounded-t-sm"></div>
                    <div className="bg-primary/80 w-full h-[90%] rounded-t-sm"></div>
                    <div className="bg-neon w-full h-[60%] rounded-t-sm"></div>
                    <div className="bg-primary/20 w-full h-[30%] rounded-t-sm"></div>
                    <div className="bg-primary/40 w-full h-[80%] rounded-t-sm"></div>
                    <div className="bg-neon w-full h-[100%] rounded-t-sm shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>
                  </div>
                  <div className={`absolute top-2 ${lang === 'ar' ? 'left-2' : 'right-2'} text-[10px] text-slate-500 font-bold`}>{t.stats.contributions}</div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 border border-slate-700 py-3 rounded-lg hover:bg-slate-700 transition-all font-bold">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                  {t.stats.viewGithub}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center" id="contact">
          <h2 className="text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-neon rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative bg-background-dark text-white px-12 py-5 rounded-xl text-xl font-bold border border-slate-800 flex items-center gap-3">
              {t.contact.start}
              <span className={`material-symbols-outlined ${lang === 'ar' ? 'rotate-180' : ''}`}>send</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter font-display" dir="ltr">
              <span className="text-neon">&lt;</span>JUBA<span className="text-neon">/&gt;</span>
            </span>
            <span className="text-slate-600 mx-2">{t.footer.copyright}</span>
          </div>
          <div className="flex gap-6" dir="ltr">
            {/* Security: Use rel="noopener noreferrer" on external links with target="_blank" to prevent reverse tabnabbing */}
            <a className="text-slate-400 hover:text-white transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
            <a className="text-slate-400 hover:text-white transition-colors" href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
          <div className="text-slate-600 text-sm">
            {t.footer.builtWith}
          </div>
        </div>
      </footer>
    </div>
  );
}
