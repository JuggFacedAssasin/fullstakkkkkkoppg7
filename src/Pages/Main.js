import { useState } from 'react'
import Movie from '../components/Movie.js'
import Movies from '../components/Movies.js'
import Search from '../components/Search.js'


const Main = () => {
  
  const [search, setSearch] = useState('star wars')
  const [movies, setMovies] = useState([])


  return(
    <main>
      <p>MAIN PART</p>
      <Movies movies={movies} setMovies={setMovies} search={search} />
      <Movie movie={movies} />
      <Search search={search} setSearch={setSearch} />
    </main>
  )
}

export default Main;