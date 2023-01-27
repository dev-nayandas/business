import React from 'react';
import b1 from "../Assets/Images/b1.jpg"
import b2 from "../Assets/Images/b2.jpg"
import b3 from "../Assets/Images/b3.jpg"

const Products = () => {
    return (
        <div className=''>
            <h3 className='text-4xl mt-40 text-primary'>Our Best Products</h3>
            <div className='grid place-items-center grid-cols-01 md:grid-cols-3 lg:grid-cols-3 mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={b2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model: xb-204</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={b1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model: xb-209</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={b3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Model: xb-202</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Products;