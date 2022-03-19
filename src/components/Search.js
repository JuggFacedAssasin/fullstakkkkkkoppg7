const Search = ({ click, search, setSearch }) => {

  const searchChange = (event) => {
    setSearch(event.target.value);
  }

  return(
    <>
      <form className="form">
        <label htmlFor='search'>Search Movie </label>
        <input type='text' id='search' onChange={searchChange} value={search}/>
        <button type='button' onClick={click} >Search</button>
      </form>
    </>
  )
}

export default Search;