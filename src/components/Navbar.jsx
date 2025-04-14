import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Navbar() {
  const socialIcons = [
 
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaTelegram />, href: 'https://x.com/SPG_Payout' },
  ];

  return (
    <nav className="fixed w-full  backdrop-blur-sm shadow-sm z-50 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold text-gray-800"><img src="images/logo.png" className='w-20 h-20' alt="" /></h1>
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#33FFFF] hover:text-[#E0FFFF] text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;