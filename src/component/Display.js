import React from "react";
import { Table } from "reactstrap";

import Row from "./Row";
import { Search } from "./Search";

const Display = (props) => {
  const handleChange = (search, option) => {
    console.log(search, option);
  };

  return (
    <>
      <Search handleChange={handleChange} />

      <Table responsive style={{ border: "1rem solid black", width: "100%" }}>
        <thead style={{ backgroundColor: "#ADD8E6" }}>
          <tr>
            <th>Sr. No.</th>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>City</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <Row />
        </tbody>
      </Table>
    </>
  );
};

export default Display;
