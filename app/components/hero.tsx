"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-[#170e24] overflow-hidden bg-[url('/image/herobg.jpg')] bg-cover bg-center bg-no-repeat mt-16 sm:mt-20">
   
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-blue-900/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-amber-400 text-lg xs:text-xl sm:text-2xl mt-10 sm:mb-3 md:mb-4 font-semibold">
              WORLD GAMING
            </h2>
            <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              Create <span className="text-amber-400">Manage</span> Matches
            </h1>
            <p className="text-gray-100 text-sm xs:text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
              Find technology or people for digital projects in public sector and
              Find an individual specialist, developer, or researcher.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-md font-bold text-sm sm:text-base
                       hover:from-amber-500 hover:to-amber-600 transition-all flex items-center space-x-2 mx-auto lg:mx-0"
            >
              READ MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mt-6 lg:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  filter: ['drop-shadow(0 0 20px #9333ea)', 'drop-shadow(0 0 30px #9333ea)', 'drop-shadow(0 0 20px #9333ea)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/image/hero1-removebg.png"
                  alt="Game Character"
                  width={500}
                  height={500}
                  priority
                  className="w-[200px] xs:w-[280px] sm:w-[400px] lg:w-[500px] h-auto mx-auto filter drop-shadow-[0_0_25px_rgba(147,51,234,0.7)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
