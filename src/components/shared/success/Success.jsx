import React from "react";

const Success = () => {
  const handleGoToHome = () => {
    // window.location.href = "/";
    // window.location.reload();
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="">
        <h1 className="">Successfully submitted!!!</h1>

        <button
          onClick={handleGoToHome}
          type="button"
          className={`gtr-btn global-btn mt-4 mx-2 `}
        >
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};

export default Success;
