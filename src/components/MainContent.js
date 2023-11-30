import React, { useReducer, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Reservation from "./Reservation";
import ReservationSuccess from "./ReservationSuccess";
import Header from "./Header";

const MainContent = () => {
  const [availableTime, setAvailabeTime] = useState([
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]);

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTime, initialState);

  function updateTime(state, date) {
    return { availableTime: fetchAPI(new Date(date)) };
  }
  const Navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      Navigate("/confirmed");
    }
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/reservation"
          element={
            <Reservation
              availableTime={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/success" element={<ReservationSuccess />} />
      </Routes>
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
