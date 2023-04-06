import React from 'react';

const Pst = ({pst}) => {
    const{id,title,body}=pst;
    return (
        <div>
            <p>id:{id}</p>
            <h2>Title{title}</h2>
            <h3>body:{body}</h3>
        </div>
    );
};

export default Pst;