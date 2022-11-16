import React from "react";
// style="background-image: url('../../../public/images/handphone.png');

const faq = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-around dark:text-black">
      <div className="mt-10">
        <div className="badge badge-primary badge-outline mb-4 p-4">
          Support
        </div>
        <h1 className="text-4xl font-semibold">
          Have a question?
          <br />
          You’re covered.
        </h1>
      </div>

      <div className="mt-5">

      <div tabIndex={0} className="collapse collapse-plus rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-left">
  Google mobile can monetize your app
  </div>
  <div className="collapse-content text-center"> 
    <p>Click edit button to change this text. 
    <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
  </div>
</div>
<hr />

<div tabIndex={0} className="collapse collapse-plus  rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-left">
  Performance shared hosting in your account
  </div>
  <div className="collapse-content text-center"> 
    <p>Click edit button to change this text.
    <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
  </div>
</div>
<hr />

<div tabIndex={0} className="collapse collapse-plus  rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-left">
  Track the location of your cars
  </div>
  <div className="collapse-content text-center"> 
    <p>Click edit button to change this text.
    <br />
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     <br />
      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
  </div>
</div>
<hr />

<div tabIndex={0} className="collapse collapse-plus rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium text-left">
  Google mobile can monetize your app
  </div>
  <div className="collapse-content text-center"> 
    <p>Click edit button to change this text.
    <br /> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <br />
     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
  </div>
</div>
<hr />
</div>




    </div>
  );
};

export default faq;
