"use client";
import { motion } from "framer-motion";
import { FaGamepad, FaUsers, FaShoppingCart } from "react-icons/fa";

const features = [
  { title: "Gaming Community", icon: <FaUsers size={30} />, description: "Join the best gaming community around." },
  { title: "Exclusive Shop", icon: <FaShoppingCart size={30} />, description: "Get exclusive items in our store." },
  { title: "Exciting Tournaments", icon: <FaGamepad size={30} />, description: "Participate in thrilling tournaments." },
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4 text-yellow-400">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
