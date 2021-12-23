import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
const rootUrl = 'http://localhost:5000';

const T43_15_crown2_create = () => {
    const[ product,setProduct]= useState( {
        id:50,
        name: 'hat1',
        cat_id: 1,
        price: 20.99,
        remote_url:'https://i.ibb.co/XzcwL5s/black-shearling.png',
        local_url:'https://i.ibb.co/XzcwL5s/black-shearling.png'
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        const url = `${rootUrl}/crown2_15/create`;
        await fetch(url, {
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
        setName('');
        setEmail('');
    } catch (err){
        console.log(err);
    }
}
    return <>
    <article>
        <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor='id'>Name: </label>
            <input type="text" name='id' value={product.id} onChange={(e) => setProduct({...product,id:e.target.value})}/>
        </div>
        <div className="form-control">
            <label htmlFor='name'>Name: </label>
        </div>
        </form>
    </article>

export default T43_15_crown2_create;
