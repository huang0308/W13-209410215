import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
const rootUrl = 'http://localhost:5000';

const T41_15_ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {
        id: new Date().getTime().toString(),
        name,
        email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setName('');
      setEmail('');
      console.log('people', people);
    } else {
      console.log('empty values');
    }
    /*
    if(!name || !email)return;

    const user = {name, email};

    try {
        const url =`${rootUrl}/crown2_15/create`;
        await fetch(url,{
            method:'POST',
            header :{
                'Contene-Type': 'application/json',
            },
            body:JSON.stringify(user)
        });
        setName('');
        setEmail('');
    } catch(err){
        console.log(err);
    }
    */
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-contral'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default T41_15_ControlledInputs;
