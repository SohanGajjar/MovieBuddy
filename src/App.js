import './App.css';
import Home from './Homepage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState  } from 'react';
import Movie from './Movie/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [movieInfo, setmovieInfo] = useState([])
  const [currunt_id, setcurrunt_id] = useState();

  useEffect(() => {
    fetch("https://movie-task.vercel.app/api/popular?page=1",)
      .then((resp) => resp.json())
      .then((ans) => {
        ans.data.results.map(element => {
          setmovieInfo(oldArray => [...oldArray, {
            "title": element.title,
            "release_date": element.release_date,
            "image": element.poster_path,
            "vote_average": element.vote_average,
            "id": element.id
          }]);
        });

      });
  }, [])

  


  return (


    <Router>
      <div>
        <Switch>
        {movieInfo.map((element, i) => (
            <Route key={i} path={"/" + element.id}>
              <Movie currunt_id={element.id}/>
            </Route>
          ))}
          <Route path="/">
            <div className="App">
              <Home setcurrunt_id={setcurrunt_id} movieInfo={movieInfo} setmovieInfo={setmovieInfo} />
            </div>
          </Route>

         
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
