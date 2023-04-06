import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pst from '../pst/Pst';

const Post = () => {
    const post=useLoaderData();
    console.log(post)
    return (
        <div>
            <h1>All are selfish{post.length}</h1>
            {
                post.map(pst=><Pst key={pst.id}
                pst={pst}></Pst>)
            }
        </div>
    );
};

export default Post;