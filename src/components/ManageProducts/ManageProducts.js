import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cherry-cupcake-64673.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <h2>Manage Product</h2>
            <div className='p-5 shadow mt-5 rounded'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageProducts;