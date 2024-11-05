"use client";
import { motion } from "framer-motion";

const mediaContent = [
  { 
    type: 'video',
    title: "Gaming Highlights",
    url: "/video/video1.mp4",
    thumbnail: "/thumbnails/gaming.jpg",
    description: "Best moments from our gaming events"
  },
  { 
    type: 'image',
    title: "Community Meetup",
    url: "/image/events.jpg",
    description: "Photos from our latest community gathering"
  },
  { 
    type: 'video',
    title: "Workshop Recording",
    url: "/video/viddeo2.mp4",
    thumbnail: "/thumbnails/workshop.jpg",
    description: "Recent developer workshop highlights"
  },
  
  { 
    type: 'video',
    title: "Tech Talk",
    url: "/video/video3.mp4",
    thumbnail: "/thumbnails/tech-talk.jpg",
    description: "Latest tech discussion series"
  }
];

const CommunityMedia = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-6 sm:mb-8"
      >
        Community Media
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {mediaContent.map((media, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-[#2a1b3d] text-white p-4 sm:p-6 rounded-lg shadow-lg"
          >
            {media.type === 'video' ? (
              <video 
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                poster={media.thumbnail}
                controls
                playsInline
                muted
                loop
              >
                <source src={media.url} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            ) : (
              <img 
                src={media.url} 
                alt={media.title}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
              />
            )}
            <h3 className="text-lg sm:text-xl font-bold mb-2">{media.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{media.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityMedia;