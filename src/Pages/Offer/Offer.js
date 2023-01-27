import React from 'react';

const Offer = () => {
    return (
        <div className='mt-56'>
            <h3 className='text-4xl mt-40 text-primary'>New year Offers end at </h3>
           <div className='grid place-content-center mt-10'>
           <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-3 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-3 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-3 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-3 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":42}}></span>
    </span>
    sec
  </div>
</div>
           </div>
        </div>
    );
};

export default Offer;