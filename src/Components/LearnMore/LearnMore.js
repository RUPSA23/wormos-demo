import React from "react";

const LearnMore = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center my-10">
      <div className="flex m-5 pr-5">
        <div>
          <img
            src="https://www.kindpng.com/picc/m/130-1300317_png-file-svg-user-setting-icon-png-transparent.png"
            alt="User-setting"
            width="100"
            height="100"
            className="mr-8 rounded-lg"
          />
        </div>
        <div>
          <h2 className="mb-5 mt-4 font-bold text-lg">Personalized Experience</h2>
          <h2 className="text-orange-300 font-medium">Learn More</h2>
        </div>
      </div>
      <div className="flex m-5 pr-5">
        <div>
          <img
            src="https://img.freepik.com/free-vector/brain-cartoon-vector-icon-illustration-education-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3565.jpg?w=2000"
            alt="brain"
            width="100"
            height="100"
            className="mr-8 rounded-lg"
          />
        </div>
        <div>
          <h2 className="mb-5 mt-4 font-bold text-lg">Innovate Approaches</h2>
          <h2 className="text-blue-500 font-medium">Learn More</h2>
        </div>
      </div>

      <div className="flex m-5">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/529/598/original/hand-holding-money-bag-icon-in-flat-style-success-target-goal-money-in-hand-cartoon-illustration-vector.jpg"
            alt="Money"
            width="100"
            height="100"
            className="mr-8 rounded-lg"
          />
        </div>
        <div>
          <h2 className="mb-5 mt-4 font-bold text-lg">Budget Friendly</h2>
          <h2 className="text-purple-400 font-medium">Learn More</h2>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
