import React, { useEffect,useState } from 'react'
import './Movie.css'

const Movie = ({ currunt_id }) => {

  const [movieName, setmovieName] = useState();
  const [movieImg, setmovieImg] = useState();
  const [movieInfo, setmovieInfo] = useState();
  const [budget, setbudget] = useState();

  const [movieallinfo, setmovieallinfo] = useState({})

  useEffect(() => {

    fetch("https://movie-task.vercel.app/api/movie?movieId=" + currunt_id,)
      .then((resp) => resp.json())
      .then((ans) => {

        setmovieallinfo(
          {
            "name" : ans.data.original_title,
            "img" : ans.data.poster_path,
            "overview" : ans.data.overview,
            "budget" : ans.data.budget,
            "popularity" : ans.data.popularity,
            "release_date" : ans.data.release_date
          }
        )
      });


  }, [])


  return (
    <div className='movieWrap'>

      <div className="moviebox">
      <div className='info'>
        <h1>{movieallinfo.name}</h1>
        <p className='movieInfo'>{movieallinfo.overview}</p>
        <h3>Budget : {movieallinfo.budget}</h3>
        <h3>Popularity : {movieallinfo.popularity}</h3>
        <h1>Release Date : {movieallinfo.release_date} </h1>
      </div>
      <img className='img' src={"https://image.tmdb.org/t/p/original" + movieallinfo.img} alt="POSTER" />
      </div>
    </div>
  )
}

export default Movie;