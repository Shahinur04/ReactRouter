import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const post=useLoaderData();
    console.log(post)
    return (
        <div>
            <h1>All are selfish</h1>
            <p>{post.name}</p>
        </div>
    );
};

export default Post;