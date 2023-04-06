import React from 'react';
import { Link } from 'react-router-dom';
import './pst.css'

const Pst = ({pst}) => {
    const{id,title,body}=pst;
    return (
        <div className='pst'>
            <p>id:{id}</p>
            <h2>Title{title}</h2>
            {/* <h3>body:{body}</h3> */}
            <Link to={`/pst/${id}`}>pst</Link>
            <button>Show post detail</button>
        </div>
    );
};

export default Pst;