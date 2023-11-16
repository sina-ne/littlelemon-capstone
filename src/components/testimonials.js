import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>

      <div className="cards">
        <div name="testimonial-1">
          <img src="#" alt="customer-1" />
          <h3>susannarama</h3>
          <q>Really love their food and ordering online is super simple.</q>
        </div>
        <div name="testimonial-2">
          <img src="#" alt="customer-2" />
          <h3>dongiovanni</h3>
          <q>Truly feels like food from an Italian mom!</q>
        </div>
        <div name="testimonial-3">
          <img src="#" alt="customer-3" />
          <h3>babsi20</h3>
          <q>
            Their dishes are absolutely to die for! Really like their desserts.
          </q>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
