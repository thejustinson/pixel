import { useEffect, useState } from "react";
import NewsItem from "@/components/NewsItem";
import Link from "next/link";
import { API_URL } from "@/app/constants";
import NewsDataJSON from "@/app/json/newsdata.json"

interface OtherNewsProps {
    id: string; // Define the id prop
}

const OtherNews = ({ id }: OtherNewsProps) => {
    interface NewsItemData {
        id: string;
        news_headline: string;
        news_body: string;
        news_image: string;
        // Add more properties as needed
    }

    const [newsData, setNewsData] = useState<NewsItemData[]>([]);

    useEffect(() => {
        // const fetchNewsData = async () => {
        //     try {
        //         const response = await fetch(`${API_URL}fetchnews?id=${id}&otherNews`, {
        //             method: 'POST' // Use POST method to match the PHP script
        //         });
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch news data');
        //         }
        //         const data = await response.json();
        //         setNewsData(data);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };

        // fetchNewsData();
        const otherNewsData = NewsDataJSON.data.filter(item => item.id !== id);

        setNewsData(otherNewsData)
    }, [id]); // Include id in the dependency array

    return (      
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-4">
            {newsData.map((newsItem, index) => (
                <Link href={`/news?id=${newsItem.id}`} key={index}>
                    <NewsItem
                        imageUrl={newsItem.news_image}
                        title={newsItem.news_headline}
                        description={newsItem.news_body}
                    />
                </Link>
            ))}
        </div>
    );
}

export default OtherNews;