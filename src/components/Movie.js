const Movie = ({ id, title, year, type, poster }) => {
  return(
    <>
      <article>
        <h2>{ title }</h2>
        <p>{ type }{ year }</p>
        <img src={ poster } alt='missing picture'></img>
      </article>
    </>
  )
}

export default Movie;