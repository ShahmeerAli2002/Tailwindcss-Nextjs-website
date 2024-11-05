"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing platform! I've made so many friends and the tournaments are thrilling.",
    avatar: "/image/images1.jpeg"
  },
  {
    name: "Jane Smith",
    feedback: "The best place to find exclusive items for my favorite games. Highly recommend!",
    avatar: "/image/images2.jpeg"
  },
  {
    name: "Sam Wilson",
    feedback: "Fantastic experience! The community and events are top-notch.",
    avatar: "/image/images3.jpeg"
  }
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-6 sm:mb-8"
      >
        What Our Users Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow text-center"
          >
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4"
            />
            <p className="text-base sm:text-lg italic leading-relaxed">"{testimonial.feedback}"</p>
            <h3 className="mt-3 sm:mt-4 font-bold text-sm sm:text-base">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
