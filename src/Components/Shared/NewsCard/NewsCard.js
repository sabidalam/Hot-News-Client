import React, { createRef } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details, rating, total_view } = news
    const ref = createRef();
    return (
        <div>
            <Card className="mb-5" ref={ref}>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex '>
                        <Image
                            roundedCircle
                            src={author.img}
                            style={{ height: '50px' }}>
                        </Image>
                        <div className='ms-3'>
                            <p className='m-0'>{author.name ?
                                author.name
                                :
                                <span>No Name Found</span>
                            }</p>
                            <p className='m-0'>{author.published_date ? author.published_date : <span>No Date Found</span>}</p>
                        </div>
                    </div>
                    <div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='my-3' variant="top" src={image_url} alt='Image' />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div>
                        <FaStar className='text-warning mb-1 me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='mb-1 me-2'></FaEye>
                        <span>{total_view ? total_view : <span>No Views</span>}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsCard;