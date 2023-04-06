import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pst.css";

const Pst = ({ pst }) => {
  const { id, title, body } = pst;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/pst/${id}`);
  };
  return (
    <div className="pst">
      <p>id:{id}</p>
      <h2>Title{title}</h2>
      {/* <h3>body:{body}</h3> */}
      <Link to={`/pst/${id}`}>
        <button>Show post detail</button>pst
      </Link>
      <button onClick={handleNavigation}>With buttonHandler</button>
      
    </div>
  );
};

export default Pst;
