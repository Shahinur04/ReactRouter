import React from 'react';
import './fnd.css'
import { Link } from 'react-router-dom';

const Fnd = ({fnd}) => {
    console.log(fnd)
    const {id,name,email,phone}=fnd;
    return (
        <div className='fnd-div'>
            <h3>name{name}</h3>
            <p>Phone:{phone}</p>
            <h3>email:{email}</h3>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Fnd;