import React, { useState } from "react";

export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("Fname");
  console.log(option, search);
  return (
    <>
      <input
        type="string"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={()=>props.handleChange(search,option)}> Search</button>
      <label for="type">Search By:{option}</label>
      <select
        id="type"
        name="cars"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="Fname">Fname</option>
        <option value="Email">Email</option>
      </select>
    </>
  );
};
