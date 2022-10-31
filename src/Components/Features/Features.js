import React from "react";

const Features = () => {
  return (
    <div >
<div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://wormos.in/wp-content/uploads/2021/11/cash.png"
          className="max-w-sm rounded-lg ml-20"
        />
        <div className="mr-20">
        <div className="badge badge-accent badge-outline">Features</div>
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
