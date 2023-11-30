import React from "react";
import ReservationForm from "./ReservationForm";
import { useState } from "react";

const Reservation = (props) => {
  return (
    <ReservationForm
      availableTime={props.availableTime}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Reservation;
