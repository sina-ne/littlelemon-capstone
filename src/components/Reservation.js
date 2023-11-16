import React from "react";

const Reservation = () => {
  return (
    <div>
      <h2 id="reserve-table">Reservations</h2>

      <form>
        <label for="date">Choose a date</label>
        <br></br>
        <input type="date" id="choose-date" />
        <input type="time" id="choose-time" />
        <input type="number" id="choose-people" />
      </form>
    </div>
  );
};
export default Reservation;
