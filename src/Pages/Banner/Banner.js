import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url("https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, height:"850px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='grid items-center banner fluid'>
         <div>
         <h1 className='text-8xl m-0'>Welcome To <span className='text-secondary'>Pro Backpack</span></h1>
            <h2 className='text-5xl m-0'>Get Your Desire Backpack Here</h2>
         </div>
        </div>
    );
};

export default Banner;