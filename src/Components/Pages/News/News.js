import React from 'react';
import { Card, CardImg, } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useLoaderData } from 'react-router-dom';


const News = () => {
    const news = useLoaderData();
    const { author } = news;

    return (
        <div>
            <Card>

                <CardHeader><h4>{news.title}</h4></CardHeader>
                <Card.Body>
                    <CardImg src={news.image_url} alt="" />
                    <p>{news.details}</p>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;