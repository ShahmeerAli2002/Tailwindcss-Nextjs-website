"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  { question: "How can I participate in tournaments?", answer: "Simply register on our platform and look for upcoming tournaments to join." },
  { question: "Is this platform free to use?", answer: "Yes, our platform is free to use with optional in-app purchases available." },
  { question: "Can I communicate with other players?", answer: "Absolutely! We have an in-game chat feature for team and rival communication." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 text-center mb-4 md:mb-8"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-2 md:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index }}
            className="bg-[#2a1b3d] p-3 md:p-4 rounded-lg shadow-lg"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-white text-sm md:text-base lg:text-lg font-bold flex justify-between items-center"
            >
              <span className="pr-2 md:pr-4">{faq.question}</span>
              <span className="text-lg md:text-xl flex-shrink-0">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <motion.p 
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.4 }}
                className="text-gray-300 mt-2 text-xs md:text-sm lg:text-base leading-relaxed"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;