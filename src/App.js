import './App.css';
import Navbar from './components/Navbar'
import Row from './components/Row'
import Banner from './components/Banner'
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/trending")
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div style={{ background: "#000", color: "#fff" }}>
      <h1>Netflix Clone</h1>

      {movies.map(movie => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
