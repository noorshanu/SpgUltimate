/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaTelegram />, name: 'Telegram', url: 'https://t.me/spgtoken' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/spgtoken' },
    { icon: <FaDiscord />, name: 'Discord', url: 'https://discord.gg/spgtoken' },
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/spgtoken' },
  ];

  return (
    <footer className="py-12 px-4 text-white relative z-10">
      <div className="max-w-7xl mx-auto">
      

        {/* Copyright */}
        <motion.div 
          className="border-t border-[#33FFFF]/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            &copy; {currentYear} SPG Token. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This website is for informational purposes only. Cryptocurrency investments are subject to high market risks.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer; 