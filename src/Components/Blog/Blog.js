import React from "react";

const Blog = () => {
  return (
    <div className="dark:bg-white">
      <div className="badge badge-primary badge-outline mb-4 p-4">Office Blog</div>
      <h1 className="text-5xl font-bold">Latest Posts</h1>
      <div className="flex flex-col lg:flex-row md:flex-row gap-20 m-10">
        <div className="card card-side">
          <figure>
            <img src="images/blog2.png" alt="Blog1" className="rounded-lg"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              5 reasons to purchase desktop computers
            </h2>
            <p>
              Hustle and Cashflow is a blog that aims to educate millennials on
              personal finance.
            </p>
          </div>
        </div>
        <div className="card card-side ">
          <figure>
            <img src="images/blog1-370x470.png" alt="Blog2" className="rounded-lg"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Utilizing mobile technology in the field
            </h2>
            <p>
              I think that you should be able to select more than one reason for
              rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
