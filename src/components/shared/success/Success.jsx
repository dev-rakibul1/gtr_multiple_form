import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="">
        <h1 className="">Successfully submitted!!!</h1>
        <Link to="/">
          <button type="button" className={`gtr-btn global-btn mt-4 mx-2 `}>
            <span>Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
