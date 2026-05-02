// import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.footer 
      className="w-full py-12 px-6 md:px-12 border-t border-blue-900/10 bg-slate-50"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="text-xl font-bold text-blue-900 font-['Noto_Serif']">
            SMMM US Region
          </div>
          <p className="text-slate-500 font-['Noto_Serif'] text-sm leading-relaxed">
            Living witness to the Mercy of God, serving the United States through faith and compassion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-blue-900 font-bold mb-4 font-['Noto_Serif']">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                Our History
              </a>
            </li>
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                Mission & Vision
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-blue-900 font-bold mb-4 font-['Noto_Serif']">Resources</h5>
          <ul className="space-y-2">
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                Superiors
              </a>
            </li>
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-slate-500 font-['Noto_Serif'] text-sm hover:text-blue-900 underline decoration-yellow-600 underline-offset-4 transition-opacity" href="#">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="text-blue-900 font-bold mb-4 font-['Noto_Serif']">Contact</h5>
          <p className="text-slate-500 font-['Noto_Serif'] text-sm">contact@smmmus.org</p>
          <div className="flex gap-4 mt-4">
            <span className="material-symbols-outlined text-blue-900 cursor-pointer hover:opacity-70 transition-opacity">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-blue-900 cursor-pointer hover:opacity-70 transition-opacity">
              mail
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-900/5 text-center">
        <p className="text-slate-500 font-['Noto_Serif'] text-xs">
          © 2026 Sons of Mary Mother of Mercy US Region. All rights reserved. 
        </p>
        <p className="text-slate-500 font-['Noto_Serif'] text-xs"> 
          <a href="https://henrycodes-portfolio.vercel.app/">Designed by HenryCodes™.</a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;