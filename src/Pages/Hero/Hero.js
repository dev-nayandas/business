import React from 'react';
import b4 from "../Assets/Images/b4.jpg"

const Hero = () => {
    return (
        <div className='mt-40'>
            <div className="hero  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={b4} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Why we are best</h1>
      <p className="py-5">The materials we are use are best and high quality</p>
      <button className="btn btn-primary">Know Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;