import React from "react";

const Toolkit = () => {
  return (
    <div className="hero min-h-screen flex flex-col lg:flex-row md:flex-row m-5">
     <div>
        <p className="py-6 text-2xl font-semibold text-left text-green-800">
          Complete Design Toolkit – huge collection 
           of elements, rich customization options. 
           <br /> Flexible layouts, and instant results! 
           <br />Choose a pre-built header or create a custom layout that perfectly
          suits your needs.
        </p>
      </div>
      <div className="hero-content grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-3 ">
    
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://ak.picdn.net/shutterstock/videos/1091005935/thumb/6.jpg?ip=x480"
            alt="drwing-brash"
            width="190"
            height="200"
            className="rounded-full"
          />
           <h1 >Smooth 
          <br />
          User Experience</h1>
        </div>
        

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg"
            alt=""
            width="190"
            height="150"
            className="rounded-full"
          />
          <h1>Secure
          <br /> Servers</h1>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://ak.picdn.net/shutterstock/videos/1048894123/thumb/1.jpg?ip=x480"
            alt=""
            width="250"
            height="250"
            className="rounded-full"
          />
          <h1>Global
          <br /> Identity</h1>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://w0.peakpx.com/wallpaper/605/368/HD-wallpaper-small-but-perfectly-formed-cute-comic-smiley-face-smiley-face-smile-cartoon-happy.jpg"
            alt="smile"
            width="250"
            height="250"
            className="rounded-full"
          />
          <h1>
            Personalized
            <br />
            Solutions
          </h1>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://cdn1.iconfinder.com/data/icons/essential-21/128/Hide-512.png"
            alt=""
            width="180"
            height="200"
            className="rounded-full"
          />
          <h1>
            Risk Analysis
            <br />
            And Report
          </h1>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
          <img
            src="https://img.freepik.com/free-vector/illustration-headphones-icon_53876-5571.jpg?w=360"
            alt=""
            width="250"
            height="250"
            className="rounded-full"
          />
          <h1>Dedicated 
          <br />
          Team</h1>
        </div>

      </div>

     
    </div>
  );
};

export default Toolkit;
