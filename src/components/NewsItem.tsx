// NewsItem.tsx
"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface NewsItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ imageUrl, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-lg p-3 border border-neutral-200 flex bg-white hover:shadow-lg transition-shadow duration-300 group"
    >
      <motion.div 
        className="w-[120px] h-[120px] flex-shrink-0 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <Image 
          src={imageUrl} 
          width={500} 
          height={720} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </motion.div>
      <div className="ml-4 max-h-[120px] flex flex-col justify-center flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 overflow-ellipsis line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default NewsItem;