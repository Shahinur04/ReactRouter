import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const pst = useLoaderData();
  console.log(pst);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Id: {pst.id}</h2>
      <h2>Show your all post details{pst.body}</h2>
      <p>Title:{pst.title}</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default PostDetail;
