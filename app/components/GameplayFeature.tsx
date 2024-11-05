  "use client";
  import { motion } from "framer-motion";

  const features = [
    { title: "Real-time Multiplayer", description: "Play with friends in real-time and experience the thrill of competition.", icon: "🎮" },
    { title: "In-game Chat", description: "Communicate with teammates and rivals with in-game chat features.", icon: "💬" },
    { title: "Exclusive Rewards", description: "Unlock special rewards as you progress through challenges.", icon: "🏆" },
  ];

  const GameplayFeatures = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-6 sm:mb-8"
        >
          Exciting Gameplay Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  export default GameplayFeatures;
