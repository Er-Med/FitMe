import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

function Testimonial({ name, description }) {
  return (

    <div className="rate flex-1">
      <BsFillStarFill className="star-icon" />
      <BsFillStarFill className="star-icon" />
      <BsFillStarFill className="star-icon" />
      <BsFillStarFill className="star-icon" />
      <BsFillStarFill className="star-icon" />
      <div className="card">
        <h3> {name} </h3>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default Testimonial;