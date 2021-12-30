import React, { useState } from 'react'
import List_15 from './List_15';
import './Grocery_15.css'

const Grocery_15 = () => {

  const [name, setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing, setIsEditing]=useState(false);
  const [editId,setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //alert
    }else if(name && isEditing){

    }else{
      const newItem = {
        id: new Date.getTime().toString(),
        title:name
      }
      setList(...list,newItem);
      setName('');
     }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit= {handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            { isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      { list.length > 0 &&(
         <div className="grocery-container">
         <List_15 item={list}/>
         <button className="clear-btn">clear items</button>
     </div>
  )}
  </section>
    );
};

export default Grocery_15;