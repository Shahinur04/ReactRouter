import React from 'react';
import './fnd.css'

const Fnd = ({fnd}) => {
    console.log(fnd)
    const {id,name,email,phone}=fnd;
    return (
        <div className='fnd-div'>
            <h3>name{name}</h3>
            <p>Phone:{phone}</p>
            <h3>email:{email}</h3>
        </div>
    );
};

export default Fnd;