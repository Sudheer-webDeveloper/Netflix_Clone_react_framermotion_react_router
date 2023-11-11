import React from "react";
import empty from "../images/nopage.png";
import { useNavigate } from "react-router-dom";
const Nopage = () => {
    const navigate = useNavigate();
  return (
    <div className="empty-6">
      <div className="noPage">
        <img src={empty} alt="Empty page" />
      </div>
      <h1>PAGE NOT FOUND :404</h1>
      <form>
        <button onClick={()=>navigate("/")}>HOME</button>
      </form>
    </div>
  );
};

export default Nopage;
