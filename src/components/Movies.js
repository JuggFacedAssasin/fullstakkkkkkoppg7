import Movie from "./Movie";

const Movies = ({ movies, setMovies, search }) => {

  return(


    <>
      { movies? movies.map((movieDatabase)=>{
        const {imdbID: id, Title, Year, Type, Poster}=movieDatabase;
        return 
        <article>
          <h2>{ Title }</h2>
          <p>{ Type }{ Year }</p>
          <img src={Poster} alt="missingPoster"></img>
        </article>
      }) : null }
    </>
  )
}

export default Movies;