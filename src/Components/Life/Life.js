import React from 'react';

const Life = () => {
    return (
        <div className="flex m-10 flex justify-between m-20 px-10 shadow-2xl">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold text-left">Bring your ideas life 
               <br /> and build your site visually.</h1>
            </div>
            <div>
                <img src="https://wormos.in/wp-content/uploads/2021/11/Group-35747.png" alt="" width="300"/>
            </div>
            <div className="flex items-center">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Sign up free</button>
            </div>
        </div>
    );
};

export default Life;