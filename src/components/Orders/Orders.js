import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://cherry-cupcake-64673.herokuapp.com/orders?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[loggedInUser.email]);
    console.log(orders);
    return (
        <>
            <Header />
            <Container>
                <h2 className='mb-4'>Hello {loggedInUser.name}! You have total {orders.length} orders. </h2>
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
                        {
                            orders.map(order => <Order key={order._id} order={order}></Order>)
                        }
                    </tbody>
                </table>
                </div>
            </Container>
        </>
    );
};

export default Orders;