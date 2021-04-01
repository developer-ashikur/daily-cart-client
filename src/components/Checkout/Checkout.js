import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkoutProduct, setCheckoutProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://cherry-cupcake-64673.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setCheckoutProduct(data))
    }, [id]);
    const { productName, weight, price } = checkoutProduct;
    const orderDetails = {...loggedInUser, products: checkoutProduct, orderTime: new Date() }
    const handleAddOrder = () => {
        fetch('https://cherry-cupcake-64673.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };
return (
    <>
        <Header />
        <Container>
            <h2 className='py-4'>Checkout</h2>
            <div className='p-5 shadow rounded'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{productName}-{weight}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <th colSpan='2'>Total</th>
                            <th>${price}</th>
                        </tr>
                    </tbody>
                </table>
                <div className='text-right'>
                    <button className='btn btn-success' onClick={handleAddOrder}>Checkout</button>
                </div>
            </div>
        </Container>
    </>
);
};

export default Checkout;