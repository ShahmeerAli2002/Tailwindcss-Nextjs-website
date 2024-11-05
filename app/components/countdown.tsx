  "use client";
  import { motion } from "framer-motion";
  import { useState, useEffect } from "react";

  const CountdownBanner = () => {
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    useEffect(() => {
      const targetDate = new Date('2024-11-29'); // Black Friday 2024
      
      const timer = setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-yellow-500 text-black py-2 sm:py-3 text-center my-2 sm:my-4 px-2 sm:px-4"
      >
        <p className="font-bold text-sm sm:text-base md:text-lg">
          Exclusive Black Friday! Offer ends in{" "}
          <span className="bg-black text-yellow-500 px-1 sm:px-2 py-0.5 sm:py-1 rounded inline-flex flex-wrap gap-1 justify-center">
            <span>{countdown.days}d</span>
            <span>{countdown.hours}h</span>
            <span>{countdown.minutes}m</span>
            <span>{countdown.seconds}s</span>
          </span>
        </p>
      </motion.div>
    );
  };

  export default CountdownBanner;