import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/brands/image1.jpeg';
import image2 from '../../../assets/brands/image2.png';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25 img-fluid"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default BrandCarousel;