import React from "react";

const MainContent = () => {
  return (
    <main class="main">
      <section class="Intro">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button>Reserve a table</button>
        </div>
        <div>
          <img src="#" alt="Restaurant Impression" />
        </div>
      </section>
      <section>
        <h2>Our New Specials</h2>
        <button>Online Menu</button>
        <div class="cards">
          <article>
            <h3>Dish 1</h3>
            <img src="" alt="article-img-1" />
            <p>Short description of the dish</p>
          </article>
          <article>
            <h3>Dish 2</h3>
            <img src="" alt="article-img-1" />
            <p>Short description of the dish</p>
          </article>
          <article>
            <h3>Dish 3</h3>
            <img src="" alt="article-img-1" />
            <p>Short description of the dish</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
