import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

const MovieList = ({ handleSelect }) => {
  const [movies, setMovies] = useState([]);
  const [TVshow, setTVShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  /*Get Movie*/
  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjZDAyY2E5NzJlOTFkYTQ5YWE1YzBmYzc1YzE5ZiIsIm5iZiI6MTczNjQ0ODk3OS4zMDA5OTk5LCJzdWIiOiI2NzgwMWJkMzYwMWFjZmU3YmQ0ZWExY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HGORtpmEehpt_P0QpewtFn3oMBrJYsaHL2SboaLbhys",
          },
        }
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      setError(error.message);
    }
  };

  /*Get TVShow*/
  const getTVShow = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjZDAyY2E5NzJlOTFkYTQ5YWE1YzBmYzc1YzE5ZiIsIm5iZiI6MTczNjQ0ODk3OS4zMDA5OTk5LCJzdWIiOiI2NzgwMWJkMzYwMWFjZmU3YmQ0ZWExY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HGORtpmEehpt_P0QpewtFn3oMBrJYsaHL2SboaLbhys",
          },
        }
      );
      const data = await response.json();
      setTVShow(data.results || []);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getMovie();
      await getTVShow();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleMovieClick = (id) => {
    handleSelect(id);
    navigate(`/movie/${id}`);
  };

  return (
    <div className="mediaDisplay">
      <div className="BlurPageofProduct">
        <div className="GenreHeader">Upcoming Movie</div>
        <div className="center">
          <ul className="Column">
            {movies.map((movie) => (
              <li
                className="Li fade-in"
                onClick={() => handleMovieClick(movie.id)}
                key={movie.id}
              >
                <img
                  className="ImagesWidth"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3 id="TitleOfMovies" className="TitleofMovie">
                  {movie.title}
                </h3>
                {/* <p>{movie.overview}</p> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="GenreHeader">Popular TV Show</div>
        <div className="center">
          <ul className="Column">
            {TVshow.map((show) => (
              <li
                className="Li fade-in"
                onClick={() => handleMovieClick(show.id)}
                key={show.id}
              >
                <img
                  className="ImagesWidth"
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                />
                <h3 className="TitleofMovie">{show.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
