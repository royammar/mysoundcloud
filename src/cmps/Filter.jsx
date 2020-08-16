import React, { useState, useContext } from "react";


export default function Filter({handleSearch,setNavigation,setTransition,transition}) {


  const [term, setTerm] = useState("");

  async function onSearchSubmit(ev) {
    ev.preventDefault();
    handleSearch(term)
  }


  function handleHistory () {
    setNavigation('searchHistory');
    setTransition(!transition);

  }

 

  return (
      <div className="filter flex column align-center justify-center">
     
    <form className="search-form flex align-center justify-center" onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(ev) => setTerm(ev.target.value)}
      />
      <button>Search</button>
    </form>
       <div onClick={handleHistory} className="search-history">
         Search History
        </div>
    </div>

  );
}
