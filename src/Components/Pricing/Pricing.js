import React from "react";

const Pricing = () => {
  return (
    <div className="mt-20 dark:bg-white">
      <div className="flex flex-col lg:flex-row md:flex-row">
        <div className="mr-20 ml-20 ">
          <img
            src="https://wormos.in/wp-content/uploads/2022/10/Revenue-bro.png"
            alt=""
            width="290"
          />
        </div>
        <div className="mt-10 dark:text-black">
          <h1 className="text-5xl font-bold mb-8">
            Simple pricing foreveryone.
          </h1>
          <p className="text-2xl">
            Don't worry we are not going to charge you a high-fi amount.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row ml-5 lg:ml-10 md:ml-10 mt-20 ">
        <div className="card w-55 lg:w-96 md:w-96 bg-base-100 shadow-xl mr-4 mb-5 dark:bg-white">
          <div className="card-body items-center text-center ">
            <h6 className="text-1xl font-bold text-orange-400 dark:text-black">Simple Plan</h6>
            <h2 className="card-title dark:text-black">₹499 /month</h2>
            <div className="flex flex-col w-full">
              <div className="divider"></div>
            </div>
            <p className="pb-5 dark:text-black">First Step to Build Online Presence</p>
            <ul className="dark:text-black">
              <li className="pb-5">Free Logo Design</li>
              <li className="pb-5">4-5 Pages Website</li>
              <li className="pb-5">Google Map Integrated</li>
              <li className="pb-5">Blog Included</li>
              <li className="pb-5">SEO Optimized</li>
              <li className="pb-5">Responsive Design</li>
              <li className="pb-5">
                Contact us, About us & Services Page Included
              </li>
              <li className="pb-5">Time: 2 - 7 Days</li>
            </ul>
            <div className="card-actions">
              <button
                type="button"
                class="text-white bg-orange-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Jio Simple plan
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-55 lg:w-96 md:w-96 bg-base-100 shadow-xl mr-4 mb-5 dark:bg-white">
          <div className="card-body items-center text-center">
            <h6 className="text-1xl font-bold text-blue-800 dark:text-black">Standard Plan</h6>
            <h2 className="card-title dark:text-black">₹999 /month</h2>
            <div className="flex flex-col w-full">
              <div className="divider"></div>
            </div>
            <p className="pb-5 dark:text-black">Upscale your Business with more features</p>
            <ul className="pb-5 dark:text-black">
              <li className="pb-5">Free Yearly Domain & Hosting</li>
              <li className="pb-5">Quatarly Free Updates</li>
              <li className="pb-5">Free Business Email</li>
              <li className="pb-5">6-10 Pages Website</li>
              <li className="pb-5">Google Map Integrated</li>
              <li className="pb-5">Blog Included</li>
              <li className="pb-5">SEO Optimized</li>
              <li className="pb-5">Responsive Design</li>
              <li className="pb-5">
                Contact us, About us & Services Page Included
              </li>
              <li className="pb-5">Time: 4 - 10 Days</li>
            </ul>
            <div className="card-actions">
              <button
                type="button"
                class="text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Jio Standard plan
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-55 lg:w-96 md:w-96  bg-base-100 shadow-xl mr-4 mb-5 dark:bg-white">
          <div className="card-body items-center text-center">
            <h6 className="text-1xl font-bold text-green-400 dark:text-black">Premium Plan</h6>
            <h2 className="card-title dark:text-black">₹1499 /month</h2>
            <div className="flex flex-col w-full">
              <div className="divider"></div>
            </div>
            <p className="pb-5 dark:text-black">All Your Needs in One Plan</p>
            <ul className="dark:text-black">
              <li className="pb-5">Free Yearly Domain & Hosting</li>
              <li className="pb-5">Monthly Updates</li>
              <li className="pb-5">Free Multiple Business Emails</li>
              <li className="pb-5">8-16 Pages Website</li>
              <li className="pb-5">Google Map Integrated</li>
              <li className="pb-5">Blog Included</li>
              <li className="pb-5">SEO Optimized</li>
              <li className="pb-5">Responsive Design</li>
              <li className="pb-5">
                Contact us, About us & Services Page Included
              </li>
              <li className="pb-5">6 - 14 Days</li>
            </ul>
            <div className="card-actions">
              <button
                type="button"
                class="text-white bg-green-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Jio Premium plan
                <svg
                  aria-hidden="true"
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
