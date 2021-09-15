import React, { useState } from "react";


const Search = (props) => {
  // useState -- add state to functional components. 
  // one arg -- initialState, 
  // returns an array(searchValue) containing the current state.
  // and a function to update the current state (setSearchValue)
  const [searchValue, setSearchValue] = useState("");
  
  // getting field value via e.target.value...
  // we invoke that useState function 'SetSearchValue'
  // passing that value param to set the state. 
  // searchValue will then be === e.target.value
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  // Clear the input field.. invoke useStates setSearchValue
  // to empty ''. 
  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;