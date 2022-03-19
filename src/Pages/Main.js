import { useEffect, useState } from 'react'
import Movie from '../components/Movie.js'
import Movies from '../components/Movies.js'
import Search from '../components/Search.js'

const key = 'ab2be16c';
const url = 'http://www.omdbapi.com/?apikey=ab2be16c&s=';

const Main = () => {
  
  const [search, setSearch] = useState('star wars')
  const [movies, setMovies] = useState([])

  const click = async () => {
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    setMovies(data?.Search);
  }

  useEffect(()=> {
    click();
  }, [search])

  return(
    <main>
      <Movies movies={movies} setMovies={setMovies} search={search} />
      <Search search={search} setSearch={setSearch} click={ click } />
      { movies? movies.map((movieDatabase)=>{
        const {imdbID: id, Title, Year, Type, Poster}=movieDatabase;
        return <Movie key={id} id={id} title={Title} year={Year} type={Type} poster={Poster} />
      }) : null }
    </main>
  )
}

export default Main;