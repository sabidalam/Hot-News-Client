import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {
                allNews.map(news => <NewsCard
                    key={news._id}
                    news={news}>
                </NewsCard>)
            }
        </div>
    );
};

export default Home;