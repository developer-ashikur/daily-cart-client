import React from 'react';

const ManageProduct = ({product}) => {
    const {productName, weight, price, _id} = product;
    const handleDeleteProduct = (id) => {
        fetch(`https://cherry-cupcake-64673.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <>
            <tr>
                <td>{productName}</td>
                <td>{weight}</td>
                <td>${price}</td>
                <td>
                    <img src="https://i.ibb.co/y6xZRqn/Group-307.png" alt="" style={{width: '30px', marginRight: '5px'}} />
                    <img onClick={() => handleDeleteProduct(_id)} src="https://i.ibb.co/hDpsLrH/Group-33150.png" alt="" style={{width: '30px', cursor: 'pointer'}} />
                </td>
            </tr>
        </>
    );
};

export default ManageProduct;