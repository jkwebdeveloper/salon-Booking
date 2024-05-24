"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
const Customdatepicker = () => {
  const [value, onChange] = useState();
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
};

export default Customdatepicker;
