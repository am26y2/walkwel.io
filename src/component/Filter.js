import React, { useState } from "react";

export const Filter = () => {
  const [option, setOption] = useState("");
  return (
    <>
      <label for="type">Filter By:{option}</label>
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="gender">gender</option>
        <option value="city">city</option>
      </select>
    </>
  );
};
