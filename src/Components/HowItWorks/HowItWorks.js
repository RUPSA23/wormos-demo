import React from "react";

const HowItWorks = () => {
  return (
    <div className="mb-20 dark:bg-white">
      <div className="flex flex-col lg:flex-row md:flex-row">
        <div className="invisible lg:visible md:visible">
          <img
            src="https://wormos.in/wp-content/uploads/2021/11/rocket.png"
            alt=""
            width="300"
            height="600"
          />
        </div>
        <div>
          <div className="badge badge-accent badge-outline w-40 mb-10 p-4 dark:text-black">
            How it Works
          </div>
          <h1 className="text-5xl font-bold dark:text-black">
            The Process - Behind the scenes.
          </h1>
        </div>
      </div>

  <ul className="steps">
  <li className="step step-success text-sm dark:text-black">Share you Concept and Requirments</li>
  <li className="step step-success text-sm dark:text-black">We'll work on it and share it</li>
  <li className="step step-success text-sm dark:text-black">After Confirmation, We'll Launch you Site</li>
  <li className="step step-success text-sm dark:text-black">After Completion, review it and Share your Feeback</li>
</ul>
    </div>
  );
};

export default HowItWorks;
