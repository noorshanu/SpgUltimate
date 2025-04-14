import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

function Hero() {
  const texts = [
    "Welcome to SPG",
    "The Ultimate Payout Token",
    "Join the Revolution"
  ];

  return (
    <div className="flex items-center justify-center px-4 pt-28 pb-10 text-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center backdrop-blur-sm py-2.5 rounded-md border border-[#33FFFF]/30 shadow-[0_0_15px_rgba(51,255,255,0.3)] hover:shadow-[0_0_25px_rgba(51,255,255,0.5)] transition-shadow duration-500">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src="/fonts/hero.jpeg" 
            alt="SPG Token" 
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Glowing Title with Typewriter */}
          <div className="text-4xl md:text-6xl font-bold relative z-20">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#33FFFF] to-[#E0FFFF] animate-pulse">
              <Typewriter
                options={{
                  strings: texts,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 2000,
                  cursor: '|',
                  wrapperClassName: 'text-white',
                }}
              />
            </div>
          </div>

          {/* Token Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-4">
              <span className="text-[#33FFFF] font-bold">Name:</span>
              <span>Solana payout glitch</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#33FFFF] font-bold">Symbol:</span>
              <span>$SPG</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#33FFFF] font-bold">CA:</span>
              <span className="text-sm break-all">DJmM4AWzP9nvqq8YRq8NpKhKzwptQPEMbNZ6eUKGE97i</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300"
          >
            Experience the future of payout with SPG Token. Join our community of gamers and investors in this revolutionary blockchain payout ecosystem. Secure, fast, and designed for the payout community.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;