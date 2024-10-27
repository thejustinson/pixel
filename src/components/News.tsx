"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";
import Link from "next/link";
import { API_URL } from "@/app/constants";
import NewsDataJSON from "@/app/json/newsdata.json"

interface NewsItemData {
  id: string;
  news_headline: string;
  news_body: string;
  news_image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const News = () => {
  const [newsData, setNewsData] = useState<NewsItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const fetchNewsData = async () => {
    //   try {
    //     const response = await fetch(`${API_URL}fetchnews`, {
    //       method: 'POST'
    //     });
        
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch news data');
    //     }
        
    //     const data = await response.json();
    //     setNewsData(data);
    //   } catch (error) {
    //     setError(error instanceof Error ? error.message : 'An error occurred');
    //     console.error('Error:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchNewsData();

    setNewsData(NewsDataJSON.data)
    setTimeout(() => {
        setIsLoading(false)
    }, 5000);
  }, []);

  return (
    <section className="py-20 bg-gray-50 px-10 sm:px-6 lg:px-10 border-t border-b border-neutral-200" id="news">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Latest News
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-1 w-24 bg-blue-600 mx-auto rounded"
          />
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
          </div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-600 p-4 rounded-lg bg-red-50"
          >
            {error}
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {newsData.map((newsItem, index) => (
              <motion.div
                key={newsItem.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/news?id=${newsItem.id}`}>
                  <NewsItem
                    imageUrl={newsItem.news_image}
                    title={newsItem.news_headline}
                    description={newsItem.news_body}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default News;