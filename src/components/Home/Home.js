import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch('https://cherry-cupcake-64673.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    },[])
    return (
        <>
            <Header />
            <form action="" className='d-flex w-25 mx-auto my-5'>
                <input type="text" name="" placeholder='Search Product' className='form-control' id=""/>
                <button className='btn btn-success'>Search</button>
            </form>
            <Container>
                <Row>
                    {
                        products.length === 0 && <div className='mx-auto'><Spinner animation="border" variant="danger" /></div>
                    }
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
                </Row>
            </Container>
        </>
    );
};

export default Home;