"use client"
import { motion } from 'framer-motion';
import { FormEvent } from 'react';

const Contact = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
 
  };

  return (
    <div className="bg-[#2a1b3d] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-400 text-3xl font-semibold mb-6"
        >
          Contact Us
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-lg mb-10"
        >
          Have any questions or need assistance? Feel free to reach out to us!
        </motion.p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded-md bg-[#1f1a2e] text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 rounded-md bg-[#1f1a2e] text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-[#1f1a2e] text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 rounded-md font-bold hover:from-amber-500 hover:to-amber-600 transition-all"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
