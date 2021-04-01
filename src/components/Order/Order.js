import React from 'react';

const Order = ({order}) => {
    const {productName, weight, price} = order.products;
    return (
        <>
            <tr>
                <td>{productName}-{weight}</td>
                <td>1</td>
                <td>${price}</td>
            </tr>
        </>
    );
};

export default Order;