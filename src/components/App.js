import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";
import Sort from "./Sort";

function App() {
  const [hogsList, setHogslist] = useState(hogs);
  const [filterBy, setFilterBy] = useState('All');
  const [sortBy, setSortBy] = useState(null)

  const hogsToDisplay = hogsList
  .filter((hog) => {
    if (filterBy === null || filterBy === 'All') {
        return true; // Show all hogs
      }
      return hog.greased === filterBy;
  })
  .sort((a, b) => {
	if(sortBy === 'name'){
		return a.name.localeCompare(b.name)
	}else if(sortBy === 'weight'){
		return a.weight - b.weight
	}
	return 0
  })

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value === 'true');
  };

  const handleSortChange = (event) => {
	setSortBy(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <Filter onFilterChange={handleFilterChange} />
	  <Sort onSortChange={handleSortChange}/>
	  <div>
		{hogsToDisplay.map((hog, index) => (
        <Tile key={index} hog={hog} />
      ))}
	  </div>
      
    </div>
  );
}

export default App;
