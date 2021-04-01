import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { productName, weight, price, image, _id } = product;
    return (
        <div className="col-md-4">
            <Card className='mb-5 shadow rounded'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{productName}-{weight}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <h2 className='text-success'>${price}</h2>
                        <Button as={Link} to={`/product/${_id}`} variant="success">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;