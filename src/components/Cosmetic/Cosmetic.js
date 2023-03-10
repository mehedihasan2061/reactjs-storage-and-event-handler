import React from 'react';
import { fakedb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = ({cosmetic}) => {
    // console.log(cosmetic);
    const {id, name, email, salary } = cosmetic;

    const handleBtn = (id) => {
        fakedb(id)
        
    }
    const removeData = id => {
        removeFromDb(id)
    }
    
    return (
        <div className='costim'>
            <h4>id: {id}</h4>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>Salary: {salary} tk</h4>
            <button onClick={() => handleBtn(id)}>Add to cart</button> 
            <button onClick={()=>removeData(id)}>remove</button>
        </div>
    );
};

export default Cosmetic;