import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Fnd from '../Components/Fnd/Fnd';

const Friend = () => {
    const friend=useLoaderData();
    
    return (
        <div>
            <h2>My Friends:{friend.length}</h2>
            <div>
                {
                    friend.map(fnd=><Fnd key={fnd.id} fnd={fnd}></Fnd>)
                }
            </div>
        </div>
    );
};

export default Friend;