const Movies = ({ movies, setMovies, search }) => {
  
  const key = 'ab2be16c';

  const url = 'http://www.omdbapi.com/?apikey=ab2be16c&s=';
  
  const click = async () => {
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    console.log(data);
  }

  return(

    <>
      <p>MovieSSSSSS</p>
      <button type='button' onClick={click}>CLICK THIS</button>
    </>
  )
}

export default Movies;