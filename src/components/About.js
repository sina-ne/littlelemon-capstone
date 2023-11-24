import React from "react";

const About = () => {
  return (
    <div className="about">
      <section className="cards">
        <div className="blurb">
          <h2 id="#about">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Our family is deeply rooted in Italian culture. In fourth generation
            we are now running this restaurant, aspiring to mix modern cuisine
            with italian culture. All our goods are sourced locally and make
            everything by hand. From linguine to the bruschetta bread everything
            you eat has been crafted with passion.
          </p>
        </div>
        <div>
          <img src="../imgs/marioadrian.jpg" alt="family owned business" />
        </div>
      </section>
    </div>
  );
};

export default About;
