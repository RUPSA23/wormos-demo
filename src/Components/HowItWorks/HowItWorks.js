import React from "react";

const HowItWorks = () => {
  return (
    <div className="mb-20">
      <div className="flex">
        <div>
          <img
            src="https://wormos.in/wp-content/uploads/2021/11/rocket.png"
            alt=""
            width="300"
            height="600"
          />
        </div>
        <div>
          <div className="badge badge-accent badge-outline w-40 mb-10">
            How it Works
          </div>
          <h1 className="text-5xl font-bold">
            The Process - Behind the scenes.
          </h1>
        </div>
      </div>
      <ul className="steps">
  <li className="step step-success text-sm">Share you Concept and Requirments</li>
  <li className="step step-success text-sm">We'll work on it and share it</li>
  <li className="step step-success text-sm">After Confirmation, We'll Launch you Site</li>
  <li className="step step-success text-sm">After Completion, review it and Share your Feeback</li>
</ul>
    </div>
  );
};

export default HowItWorks;
