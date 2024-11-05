"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4"
      >
        About Our Gaming Platform
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
        <div className="relative w-full h-[200px] sm:h-[300px]">
          <Image
            src="/image/about1.jpeg"
            alt="Professional Gaming Setup"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="relative w-full h-[200px] sm:h-[300px]">
          <Image
            src="/image/about2.jpg"
            alt="Esports Tournament"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-4 sm:mb-6 px-2"
      >
        Our platform offers gamers a space to find and participate in tournaments, 
        connect with other gaming enthusiasts, and shop for exclusive in-game items. 
        Join us to experience the best in online gaming!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-gray-300"
      >
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">Competitive Gaming</h3>
          <p className="text-sm sm:text-base">Join daily tournaments across popular games like PUBG, Fortnite, CS:GO, and more. Compete with players worldwide and win exciting prizes!</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">Gaming Community</h3>
          <p className="text-sm sm:text-base">Connect with millions of gamers, join gaming clans, participate in discussions, and share your gaming achievements with like-minded players.</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">Pro Gaming Support</h3>
          <p className="text-sm sm:text-base">Get coaching from professional gamers, access exclusive strategies, and improve your gaming skills with our expert community.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 sm:mt-8"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">Our Gaming Features</h3>
        <ul className="text-gray-300 text-base sm:text-lg space-y-2 sm:space-y-3 px-2">
          <li>✨ Cross-platform tournament support</li>
          <li>🎮 24/7 gaming servers worldwide</li>
          <li>🏆 Weekly and monthly championships</li>
          <li>💬 Real-time chat and voice communication</li>
          <li>🎯 Skill-based matchmaking system</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutSection;
