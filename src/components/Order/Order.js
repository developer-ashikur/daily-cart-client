import React from 'react';

const Order = ({order}) => {
    const {productName, weight, price} = order.products;
    return (
        <>
            <tr>
                <td>{productName}-{weight}</td>
                <td>{order.orderTime}</td>
                <td>${price}</td>
            </tr>
        </>
    );
};

export default Order;