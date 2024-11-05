"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", feedback: "Amazing community! I've made great friends and learned so much here.", avatar: "👤" },
  { name: "Jane Smith", feedback: "I love the events and support from fellow members. Highly recommend joining!", avatar: "👤" },
  { name: "Alex Johnson", feedback: "Fantastic platform for gamers and developers alike!", avatar: "👤" },
];

const CommunityTestimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-6 sm:mb-8"
      >
        What Our Members Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{testimonial.avatar}</div>
            <p className="text-lg sm:text-xl font-semibold">{testimonial.name}</p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">"{testimonial.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityTestimonials;
