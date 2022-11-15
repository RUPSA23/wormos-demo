import React from "react";

const Support = () => {
  return (
    <div className="hero min-h-screen dark:bg-white">
      <div className="hero-content flex-col lg:flex-row md:flex-row justify-around">
        <img
          src="https://wormos.in/wp-content/uploads/2021/11/6308-2048x1280.jpg"
          className="rounded-lg"
          width="500"
        />
        <div>
          <div className="badge badge-accent badge-outline mb-4 p-4">Support</div>
          <h1 className="text-5xl font-bold">Customized </h1>
          <h1 className="text-5xl font-bold">Environment</h1>
          <p className="m-6">
            We build great and solid product experiences 
            <br />
            that convert our Leads
            into Customers..
          </p>

          <div className="card w-96 bg-base-100 shadow-xl dark:bg-white">
            <div className="card-body">
            <div className="flex">
            <div className="avatar">
                <div className="w-20 m-6 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
              <p>
                Hammad : I Prefer Wormos as my First choice whenever I want to
                innovate something in my Business
              </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
