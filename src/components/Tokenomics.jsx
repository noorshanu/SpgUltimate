import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

function Tokenomics() {
  const tokenomicsData = [
    { label: 'Total Supply', value: '1,000,000,000 SPG' },
    { label: 'Initial Burn', value: 'after every  few minutes' },
    { label: 'Liquidity Pool', value: '100%' },
    { label: 'Marketing', value: '3%' },
    { label: 'Tax', value: '9%' },
    { label: 'Community Rewards', value: '5%' },
  ];

  const socialLinks = [
    { icon: <FaTelegram />, name: 'Telegram', url: 'https://x.com/SPG_Payout' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://x.com/SPG_Payout' },
    { icon: <FaDiscord />, name: 'Discord', url: 'https://discord.gg/spgtoken' },
  ];

  return (
    <div className="py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#33FFFF] to-[#E0FFFF]">
              Solana Payout Token
            </div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SPG Token is a Solana-based payout token designed to revolutionize the way creators and businesses handle payments and rewards.
          </p>
        </motion.div>

        {/* Tokenomics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm rounded-md border border-[#33FFFF]/30 p-6 shadow-[0_0_15px_rgba(51,255,255,0.3)] hover:shadow-[0_0_25px_rgba(51,255,255,0.5)] transition-shadow duration-500"
            >
              <h3 className="text-[#33FFFF] font-bold text-xl mb-2">{item.label}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* How to Buy Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33FFFF] to-[#E0FFFF]">
              How to Get SPG
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Follow these simple steps to start using SPG for your payouts
          </p>
        </motion.div>

        {/* Steps to Buy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { step: '1', title: 'Create Solana Wallet', description: 'Download Phantom or Solflare wallet and create a new Solana wallet' },
            { step: '2', title: 'Get SOL', description: 'Buy SOL from an exchange and send it to your wallet' },
            { step: '3', title: 'Connect to DEX', description: 'Visit Raydium or Orca and connect your wallet' },
            { step: '4', title: 'Swap for SPG', description: 'Swap your SOL for SPG tokens' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm rounded-md border border-[#33FFFF]/30 p-6 shadow-[0_0_15px_rgba(51,255,255,0.3)] hover:shadow-[0_0_25px_rgba(51,255,255,0.5)] transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#33FFFF] flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="text-[#33FFFF] font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Join Our Community</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-[#33FFFF] text-3xl hover:text-[#E0FFFF] transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tokenomics; 