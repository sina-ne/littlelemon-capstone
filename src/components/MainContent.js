import React from "react";
import Reservation from "./Reservation";

/* Check routing
<Routes>
  <Route path="/" element={<MainContent />}></Route>
  <Route path="/reserve-table" element={<Reservation />}></Route>
</Routes>;*/

const MainContent = () => {
  return (
    <main className="main">
      <div>
        <section className="intro">
          <div className="blurb">
            <h1>Little Lemon</h1>
            <p>
              <strong>Based in Chicago</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button>Reserve a table</button>
          </div>
          <div>
            <img src="../imgs/restauranfood.jpg" alt="Restaurant Impression" />
          </div>
        </section>
      </div>
      <section className="specials">
        <div>
          <h2 id="menu">Our New Specials</h2>
        </div>
        <div>
          <button>Online Menu</button>
        </div>
        <div className="cards">
          <article>
            <img src="../imgs/bruschetta.png" alt="dish-bruschetta" />
            <h3>Bruschetta $2.96</h3>
            <p>
              This is the ultimate summer party appetizer and a great way to use
              up those sweet and juicy summer tomatoes. We grow tomatoes and
              basil in our garden and homegrown ingredients will make the best
              bruschetta you will try.
            </p>
            <button id="order-online">Order a delivery</button>
          </article>
          <article>
            <img src="../imgs/greeksalad.jpg" alt="dish-greeksalad" />
            <h3>Greek Salad $3.96</h3>
            <p>
              Inspired by our journey to Mykonos, we brought home a dash of the
              Mediterranean ambiance. The classic table salad uses just a few
              humble ingredients, yet has become a totally iconic dish that's
              beloved around the world.
            </p>
            <button>Order a delivery</button>
          </article>
          <article>
            <img src="../imgs/lemondessert.jpg" alt="dish-lemondessert" />
            <h3>Lemon Cheescake $4.95</h3>
            <p>
              Look no further, this is the only lemon cheesecake you'll ever eat
              again. Savor every sweet-tart taste of creamiest cheesecake
              flavored with fresh lemon, nestled between a buttery crust and a
              layer of homemade lemon curd.
            </p>
            <button>Order a delivery</button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
