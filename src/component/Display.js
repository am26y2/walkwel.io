import { useState } from "react";
import { Table } from "reactstrap";
import { Filter } from "./Filter";
import Row from "./Row";
import { Search } from "./Search";

const Display = (props) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [filtertype, setFiltertype] = useState("");
  const [filterData, setFilterdata] = useState("");

  const handleChange = (search, option) => {
    console.log(search, option);
    setInput(search);
    setSearch(option);
  };
  const handleFilter = (value, option) => {
    console.log(value, option);
    setFiltertype(option);
    setFilterdata(value);
  };

  return (
    <>
      <Search handleChange={handleChange} />
      <Filter handleFilter={handleFilter} />

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
          <Row
            input={input}
            search={search}
            filtertype={filtertype}
            filterData={filterData}
          />
        </tbody>
      </Table>
    </>
  );
};

export default Display;
