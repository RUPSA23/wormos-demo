import React from "react";

const Creativity = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-gradient-to-r from-green-100">
        <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
          <img
            src="https://wormos.in/wp-content/uploads/2021/11/Programming-amico.png"
            className="max-w-sm rounded-lg"
          />
          <div className="text-left dark:text-black">
            <h1 className="text-5xl font-bold">Where Imagination </h1>
            <h1 className="text-5xl font-bold">meet Creativity.</h1>
            <p className="py-6">
              Establish your Online Presence Get your Professional Website and
              Management by Wormos.
            </p>
            <div className="text-left">
              <li> Backed Upon AWS Servers</li>
              <li>Including Maintenance & Security</li>
              <li>24 x 7 On call Support </li>
            </div>

            <button className="btn btn-outline mt-5 dark:text-black">Get Yours</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 dark:text-black">
        <div>
          <button className="btn rounded-full mr-4">Contact</button>
        </div>

        <div className="mr-4 mt-3">
          <p>Looking for a corporate solution ?</p>
        </div>

        <div className="mt-3 text-green-400 underline">
          <a href="/http://localhost:3000/">Contact us.</a>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
