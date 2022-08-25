import React from "react";

import { useState } from "react";
import Table from "./Table";


const Search = ({ item }) => {
  const [query, setquery] = useState("");

  const keys = ["firstName", "lastName", "email", "department", "tel"];

  let filtered = item.filter((emp) => {
    return keys.some((key) =>
      emp[key].toLowerCase().includes(query.toLowerCase())
    );
  });

  const inputChangeHandler = (e) => {
    setquery(e.target.value);
  };

  const buttonHandler = () => {
    alert('Check Console for Message');
    if (filtered.length > 0) console.log(JSON.stringify(filtered));
    else console.log("No Data");
  };

  return (
    <>
      <h3>Search</h3>
      

      <input
        type="text"
        value={query}
        placeholder="Search...."
        onChange={inputChangeHandler}
        className="search"
      />
      <button type="button" onClick={buttonHandler}>
        Submit
      </button>

      {filtered.length > 0 ? <Table data={filtered}/> : <div>No Data</div>}
      
    </>
  );
};

export default Search;
