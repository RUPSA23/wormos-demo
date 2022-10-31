import React from "react";

const Enlarged = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-sky-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://wormos.in/wp-content/uploads/2022/10/Home-2048x1536.png"
          className="max-w-md rounded-lg "
        />
        <div className="mr-20">
          <h1 className="text-5xl font-bold">Let's</h1>
          <h1 className="text-5xl font-bold">Enlarge.</h1>
          <p className="p-6 m-8">
            Let Wormos Handle your Technical workload and help you to Enlarge
            your Business.
          </p>
          <button className="btn btn-success">Try Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default Enlarged;
