import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Category = () => {
    const allCategory = useLoaderData();

    return (
        <div>
            <h4 className='mb-4'>{allCategory.length} News Found for this Category</h4>
            {
                allCategory.map(news => <NewsCard
                    key={news._id}
                    news={news}>
                </NewsCard>)
            }

        </div>
    );
};

export default Category;