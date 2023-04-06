import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend=useLoaderData();
    console.log(friend)
    return (
        <div>
           <h2>Everything new nothing gaining</h2> 
           <h2>name:{friend.name}</h2>
           <p>phone:{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;