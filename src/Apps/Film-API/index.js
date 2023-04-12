import { getMovieList, searchMovies} from './api.js'
import {useEffect, useState} from 'react'

function FilmSearch() {
  
  const baseImgUrl = 'http://image.tmdb.org/t/p/w500'
  const [popularMovies, setpopularMovies] = useState([])


  useEffect(() => {
    getMovieList().then((result) => {
      setpopularMovies(result)
    })
  }, [])



  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      const dateStr = movie.release_date;
      const parts = dateStr.split("-")
      const formatedDate = `${parts[2]}-${parts[1]}-${parts[0]}`

      return (
      <div key={i} className='Movie-wrapper'>
        <div className='Movie-title'>{movie.title}</div>
        <img className='Movie-image' src={`${baseImgUrl}/${movie.poster_path}`} alt=""/>
        <div className='Movie-date'>{formatedDate}</div>
        <div className='Movie-rate'>{movie.vote_average.toFixed(1)}</div>
      </div>
      )  
    })
  }
  
  const search = async (q) => {
    if(q.length > 3) {
      const query = await searchMovies(q)
      setpopularMovies(query.results)
    }
  }
  
  console.log({popularMovies : popularMovies})

  return (
    <div className="App-film">
      <header className="App-header">
        <h1>Movie-Search</h1>
        <input placeholder='cari film' 
        className='Movie-search'
        onChange={({target}) => search(target.value)}
        />
        <div className='Movie-container'>
         <PopularMovieList />
        </div> 
      </header>
    </div>
  );
}

export default FilmSearch;