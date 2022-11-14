import React from "react";

const Features = () => {
  return (
    <div >
<div className="hero min-h-screen ">
      <div className="hero-content flex flex-col lg:flex-row-reverse md:flex-row-reverse  justify-between">
      <div>
      <img
          src="https://wormos.in/wp-content/uploads/2021/11/cash.png"
          className="max-w-sm rounded-lg"
          alt=""
        />
      </div>
       
        <div className="">
        <div className="badge badge-accent badge-outline p-4 mb-4">Features</div>
          <h1 className="text-5xl font-bold">EMI Option </h1>
          <h1 className="text-5xl font-bold">Available Now!</h1>
          <p className="py-6">
          No need to worry about One Time about 
          <br />
          anymore. Just select EMI Option and Continue 
          <br />
          Yearly Service on Monthly Payments
          </p>
          
          <button className="btn btn-ghost">Know More</button>

        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Features;
