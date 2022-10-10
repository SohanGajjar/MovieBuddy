import React, { useState } from 'react'
import "./Home.css"
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Home = ({movieInfo,setmovieInfo,setcurrunt_id}) => {

  const history = useHistory();

  const renderMovie = (card, index) => {

    return (
      <Card  className="box" style={{ width: "18rem", height: "28rem" }} key={index}>
            <Card.Img className='mainImg' variant="top" src={"https://image.tmdb.org/t/p/original" + card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                <span className='date'>Release Date</span> : {card.release_date}
              </Card.Text>

              <div className="btm">
                <div className="rating">Rating : {card.vote_average}</div>
                <div className="btn">
                  <button onClick={() => 
                  {
                      // window.open("https://movie-task.vercel.app/api/movie?movieId="+ card.id, '_blank', 'noopener,noreferrer');
                      // eslint-disable-next-line no-restricted-globals
                      setcurrunt_id(card.id);
                      history.push('/'+ card.id);
                      window.location.reload();
                  }
                  }  className='learnMore'>Learn more</button>
                </div>
                </div>

            </Card.Body>

          </Card>
    )
  }

  return (
    <div className='homeWrap'>
      <div className="homeContent">
        <div className="heading">
          Your favorite movies are here !
        </div>
        <div className="content grid">

          {movieInfo.map(renderMovie)}
        </div>
      </div>
    </div>
  )
}

export default Home