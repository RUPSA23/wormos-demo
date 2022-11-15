import React from "react";

const Enlarged = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-sky-100 dark:bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
      <div class="">
      <img
          src="https://wormos.in/wp-content/uploads/2022/10/Home-2048x1536.png"
          className=" rounded-lg"
          width="700"
          alt=""
        />
      </div>
        
        <div className="m-auto lg:mr-20 md:m-auto">
          <h1 className="text-5xl font-bold">Let's</h1>
          <h1 className="text-5xl font-bold">Enlarge.</h1>
          <p className="p-5 m-8">
            Let Wormos Handle your Technical workload and help you to Enlarge
            your Business.
          </p>
          <button className="btn btn-success btn-outline mr-4">Try Us Now</button>
          <button className="btn btn-outline">Select your plan</button>
        </div>
      </div>
    </div>
  );
};

export default Enlarged;
