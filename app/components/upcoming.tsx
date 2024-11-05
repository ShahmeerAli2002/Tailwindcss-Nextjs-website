  "use client";
  import { motion } from "framer-motion";

  const tournaments = [
    { name: "Champions League", date: "December 1, 2024" },
    { name: "Ultimate Battle", date: "January 15, 2025" },
    { name: "War of Titans", date: "February 28, 2025" },
  ];

  const UpcomingTournaments = () => {
    return (

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 text-center mb-4 md:mb-8"
        >
          Upcoming Tournaments
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}

              className="bg-[#2a1b3d] text-white p-3 md:p-6 rounded-lg shadow-lg text-center hover:bg-[#372652] transition-colors duration-300 transform hover:scale-105"
            >


              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">{tournament.name}</h3>
              <p className="text-gray-300 text-xs md:text-sm lg:text-base">{tournament.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };


  export default UpcomingTournaments;