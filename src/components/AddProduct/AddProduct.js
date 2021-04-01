import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '947fb59bf3b63ff1b74306d43dfc26de');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = data => {
        const eventData = {
            productName: data.productName,
            price: data.price,
            weight: data.weight,
            image: imageURL
        }
        fetch('https://cherry-cupcake-64673.herokuapp.com/addProduct',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(result => {
            console.log(result);
        })
    };
    return (
    <>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto mt-5 shadow p-5 rounded'>
            <h5>Product Name</h5>
            <input name="productName" placeholder='Enter Name' className='form-control mb-4' ref={register} />
        
            <h5>Add Price </h5>
            <input name="price" placeholder='Enter Price' className='form-control mb-4' ref={register} />
        
            <h5>Weight</h5>
            <input name="weight" placeholder='Enter Weight' className='form-control mb-4' ref={register} />

            <h5>Add Photo</h5>
            <input type='file' className='mb-4' ref={register} onChange={handleImageUpload} /> <br/>
        
            <input className='btn btn-success' type="submit" />
        </form>
    </>
    );
};

export default AddProduct;