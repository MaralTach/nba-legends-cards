import React, { useState } from "react";
import { data } from "../helper/data";
console.log(data);

const CardContainer = () => {
  const [Search, setSearch] = useState("");
  const [Click, setClick] = useState(true);

  const toggleClass = () => {
    setClick(!Click);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(Search.toLowerCase())
  );
  return (
    <div className="main-container">
      <label htmlFor="searchInput">
        <input
          type="text"
          id="searchInput"
          value={Search}
          onChange={handleSearch}
        />
      </label>

      <div className="container1">
        {filteredData.map((item, index) => (
          <div className="image-container">
            <div
              onClick={toggleClass}
              className={Click ? "image-title1" : "image-title"}
            >
              <img src={item.img} alt="legend" />
              <p key={index}>{item.name}</p>
            </div>
            <div
              onClick={toggleClass}
              className={Click ? "decription" : "decription1"}
            >
              <ul>
                <li>{item.statistics[0]}</li>
                <li>{item.statistics[1]}</li>
                <li>{item.statistics[2]}</li>
                <li>{item.statistics[3]}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
