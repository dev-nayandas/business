import React from 'react';

const ContactUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter your email here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">What do you want to know?</span>
          </label>
          <textarea type="text" placeholder="Write Your Question Here" className="input input-bordered" />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ContactUs;