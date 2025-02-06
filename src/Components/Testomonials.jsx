import React from 'react';
import './Testnomials.css';
import Customers from '../Constant/Customers';

const Testimonial = () => {
 
  return (
    <div className="testimonial-section">
      <h1 className="testimonial-heading">Testimonials</h1>
      <p className="customer-trust">10k+ Customers Trust Us</p>
      <div className="testimonial-container">
        {Customers.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
