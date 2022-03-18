const Search = ({ search, setSearch }) => {

  const searchChange = (event) => {
    setSearch(event.target.value);
  }

  return(
    <>
      <p>Search stuff</p>
      <form>
        <label htmlFor='search'>Search Movie </label>
        <input type='text' id='search' onChange={searchChange} value={search}/>
        <button type='submit'>Search</button>
      </form>
    </>
  )
}

export default Search;