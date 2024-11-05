"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Members", value: "12,000+" },
  { label: "Online Players", value: "1,200" },
  { label: "Active Groups", value: "150+" },
];

const CommunityOverview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 sm:mb-8"
      >
        Join Our Growing Community
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityOverview;
