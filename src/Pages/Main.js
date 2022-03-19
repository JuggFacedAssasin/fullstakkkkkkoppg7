import { useEffect, useState } from 'react'
import Movie from '../components/Movie.js'
import Movies from '../components/Movies.js'
import Search from '../components/Search.js'



const key = 'ab2be16c';
const url = 'http://www.omdbapi.com/?apikey=ab2be16c&s=';

const Main = () => {
  
  const [search, setSearch] = useState('star wars')
  const [movies, setMovies] = useState([])
  const [limit, setLimit] = useState(true)

  const click = async () => {
    const response = await fetch(`${url}${search}`);
    const data = await response.json();
    if(limit){
      setMovies(data?.Search.slice(0,5));
      setLimit(false);
    } else {
      setMovies(data?.Search);
    }
  }

  useEffect(()=> {
    click();
  }, [search])

  return(
    <main className="main">
      {/* <Movies movies={movies} setMovies={setMovies} search={search} /> */}
      <Search search={search} setSearch={setSearch} click={ click } />
      <section>
        { movies? movies.map((movieDatabase)=>{
          const {imdbID: id, Title, Year, Type, Poster}=movieDatabase;
          return <Movie key={id} id={id} title={Title} year={Year} type={Type} poster={Poster} />
        }) : null }
      </section>
    </main>
  )
}

export default Main;