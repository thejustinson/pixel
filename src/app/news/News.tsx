"use client"

import Image from "next/image"
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
// import { API_URL } from "../constants";
import OtherNews from "./OtherNews";
import NewsDataJSON from "@/app/json/newsdata.json"

interface NewsItem {
  id: string;
  news_headline: string;
  news_body: string;
  news_image: string;
  eta: string;
}

interface NewsData {
  data: NewsItem[];
}

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  })
};

const shimmerVariant = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

interface LoadingSkeletonProps {
  className: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className }) => (
  <motion.div
    className={`bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 bg-[length:400%_100%] ${className}`}
    variants={shimmerVariant}
    animate="animate"
  />
);

const NewsHeader: React.FC<{ date: string | null }> = ({ date }) => (
  date ? (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-neutral-200 py-1 px-4 rounded-full text-neutral-700 mb-5 hover:border-blue-500 transition-colors"
    >
      {date}
    </motion.div>
  ) : (
    <LoadingSkeleton className="w-[200px] h-[30px] rounded-full mb-5 mx-auto" />
  )
);

const NewsHeadline: React.FC<{ headline: string | null }> = ({ headline }) => (
  headline ? (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl md:text-4xl font-bold mb-2 text-center"
    >
      {headline}
    </motion.h2>
  ) : (
    <LoadingSkeleton className="w-[300px] lg:w-[896px] h-[50px] mb-2" />
  )
);

const NewsImage: React.FC<{ image: string | null }> = ({ image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg"
  >
    {image ? (
      <Image
        src={image}
        height={300}
        width={300}
        alt="news image"
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
      />
    ) : (
      <LoadingSkeleton className="w-full h-full" />
    )}
  </motion.div>
);

const NewsContent: React.FC<{ paragraphs: string[] | null }> = ({ paragraphs }) => (
  <div className="my-10 space-y-5">
    {paragraphs ? (
      paragraphs.map((paragraph, index) => (
        <motion.div
          key={index}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1 * index}
          className="text-gray-700 leading-relaxed"
        >
          {paragraph}
        </motion.div>
      ))
    ) : (
      Array.from({ length: 10 }).map((_, i) => (
        <LoadingSkeleton
          key={i}
          className="w-[300px] lg:w-[896px] h-[30px] mb-2"
        />
      ))
    )}
  </div>
);

const News = () => {
  const searchParam = useSearchParams();
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [newsBody, setNewsBody] = useState<string[]>([]);

  useEffect(() => {
    // const fetchNewsData = async () => {
    //   try {
    //     let apiUrl = `${API_URL}fetchnews`;
    //     const id = searchParam.get('id');
    //     if (id) {
    //       apiUrl += `?id=${id}`;
    //     }
    //     const response = await fetch(apiUrl, {
    //       method: 'POST'
    //     });
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch news data');
    //     }
    //     const data = await response.json();
    //     setNewsData({ data: data });
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };

    // fetchNewsData();
    const id = searchParam.get('id');
    const highlightNews = NewsDataJSON.data.filter(item => item.id == id)
    setNewsData({data: highlightNews})
  }, [searchParam.get('id')]);

  useEffect(() => {
    if (newsData?.data?.[0]?.news_body) {
      const newsParagraphs = newsData.data[0].news_body;
      const tx = newsParagraphs.replace(/(?:\\r\\n|\\r|\\n|\r\n|\r|\n)/g, '\n');
      const paragraphArray = tx.split('\n');
      setNewsBody(paragraphArray);
    }
  }, [newsData]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 bg-white px-10 border-b border-b-neutral-200"
    >
      <div className="flex flex-col items-center w-fit mx-auto max-w-4xl border-b border-b-neutral-200 pb-10">
        <NewsHeader date={newsData?.data[0]?.eta ?? null} />
        <NewsHeadline headline={newsData?.data[0]?.news_headline ?? null} />
        <NewsImage image={newsData?.data[0]?.news_image ?? null} />
        <NewsContent paragraphs={newsData ? newsBody : null} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col mx-auto max-w-4xl py-10"
      >
        <div className="flex items-center mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-1 w-10 bg-blue-600 rounded mr-4 origin-left"
          />
          <h2 className="text-xl font-bold">Read more like this</h2>
        </div>
        <OtherNews id={searchParam.get('id') ?? ''} />
      </motion.div>
    </motion.section>
  );
};

const SuspenseNews = () => {
  return (
    <Suspense>
      <News />
    </Suspense>
  );
};

export default SuspenseNews;