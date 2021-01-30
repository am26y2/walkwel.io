import React, { useState } from "react";
import { City } from "./City";
import { Gender } from "./Gender";
export const Filter = (props) => {
  const [option, setOption] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const genderset = (value) => {
    setGender(value);
    props.handleFilter(value,"gender");
  };
  const cityset = (value) => {
    setCity(value);
    props.handleFilter(value,"city");
  };
  return (
    <>
      <label for="type">Filter By:{option}</label>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="gender">gender</option>
        <option value="city">city</option>
      </select>
      {option === "gender" ? <Gender gender={genderset}  /> : ""}
      {option === "city" ? <City city={cityset} /> : ""}
    </>
  );
};
