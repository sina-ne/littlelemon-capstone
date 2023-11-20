import React from "react";
import { useState } from "react";

const Reservation = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <div className="reservation">
      <h2 id="reserve-table">Reservations</h2>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="choose-date">Choose Date</label>
              <input
                id="choose-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="choose-time">Choose Time</label>
              <select
                id="choose-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
                required
              ></select>
            </div>
            <div>
              <label htmlFor="choose-guests">Choose number of guests</label>
              <input
                id="choose-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type={"number"}
                placeholder={0}
                max={10}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="choose-occasion">
                Is it a special occassion?
              </label>
              <select
                id="choose-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option>no special occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Make Your Reservation"}
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default Reservation;
