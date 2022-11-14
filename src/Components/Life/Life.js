import React from 'react';

const Life = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-between m-20 px-10 shadow-2xl">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold text-left mb-5">Bring your ideas life 
               <br /> and build your site visually.</h1>
            </div>
            <div className="mb-5 mt-5">
                <img src="https://wormos.in/wp-content/uploads/2021/11/Group-35747.png" alt="" width="300"/>
            </div>
            <div className="flex items-center mb-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Sign up free</button>
            </div>
        </div>
    );
};

export default Life;