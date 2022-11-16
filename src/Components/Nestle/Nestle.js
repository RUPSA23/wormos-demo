import React from "react";

const Nestle = () => {
  return (
    <div className="">
      <p className="text-1xl flex justify-start text-gray-400 mt-5 dark:text-black">These world-class Coporate are already using Wormos</p>
      <div className="flex p-10 flex-col lg:flex-row md:flex-row ">
      <div className="mr-20 pr-20">
      <img
            src="https://wormos.in/wp-content/uploads/2022/10/markforged.png"
            className="max-w-sm rounded-lg" alt="demo"
            height="200"
            width="200"
          />
      </div>
     <div className="ml-20 pl-20">
     <img
            src="https://wormos.in/wp-content/uploads/2022/10/nestle-2048x710.png"
            className="max-w-sm rounded-lg" alt="demo"
            height="200"
            width="200"
          />
     </div>
      </div>
      
           
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://wormos.in/wp-content/uploads/2022/10/markforged.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src="https://wormos.in/wp-content/uploads/2022/10/nestle-2048x710.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Nestle;
