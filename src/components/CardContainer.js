
import React, {useState} from "react"; 
import {data} from "../helper/data";

const CardContainer =()=>{
  const [search ,setSearch] = useState("");
  const [selectedCard ,setSelectedCard] = useState(null);

  const handleSearch = (e) =>{
    setSearch(e.target.value);
  };

  const handleCardClick = (index) =>{
    setSelectedCard(index === selectedCard ? null : index);
  };

  const filteredData = data.filter((item) =>
   item.name.toLowerCase().includes(search.toLowerCase())
  );

   return(
    <div className="main-container">
      <div className="header">
      <label htmlFor="searchInput">
       <input type="search" id="searchInput" value={search} onChange={handleSearch} placeholder="Search here..."/>
       {/* Search:{' '} */}
      </label>
      </div>
     <div className="container1">
     {
       filteredData.map((item, index) => (
          <div className="image-container" key={index}>
            <div className="card" onClick={() => handleCardClick(index)}>
              <img src={item.img} alt="legend" />
              <p>{item.name}</p>
              {
                selectedCard === index && (
                  <div className="description">
                    <ul className="statisticList">
                    {item.statistics.map((statistic, i) =>(
                      <li key={i}>{statistic}</li>
                    ))}
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        ))
     }
     </div>

    </div>

    

   )

}


export default CardContainer