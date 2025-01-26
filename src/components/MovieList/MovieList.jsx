import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";
import { useStore } from "../../zustand/zustanStore";

const MovieList = ({ handleSelect }) => {
  const addMovie = useStore((state) => state.addMovie);
  const [movies, setMovies] = useState([]);
  const [TVshow, setTVShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handelAddFavouriteMovie = (movie) => {
    if (movie && movie.id) {
      addMovie(movie);
    }
  };

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
                onClick={() => handelAddFavouriteMovie(movie)}
                key={movie.id}
              >
                <img
                  className="ImagesWidth"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="NameAndLiked">
                  <h3 id="TitleOfMovies" className="TitleofMovie">
                    {movie.title}
                  </h3>
                  <div className="favourite">
                    <div className="favourite">
                      <div title="Like" className="heart-container">
                        <input
                          id="Give-It-An-Id"
                          className="checkbox"
                          onChange={() => addMovie(movies)}
                          type="checkbox"
                        />
                        <div className="svg-container">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-outline"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-filled"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={100}
                            width={100}
                            className="svg-celebrate"
                          >
                            <polygon points="10,10 20,20" />
                            <polygon points="10,50 20,50" />
                            <polygon points="20,80 30,70" />
                            <polygon points="90,10 80,20" />
                            <polygon points="90,50 80,50" />
                            <polygon points="80,80 70,70" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="favourite">
                  <div title="Like" className="heart-container">
                    <input
                      id="Give-It-An-Id"
                      className="checkbox"
                      type="checkbox"
                    />
                    <div className="svg-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-outline"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-filled"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={100}
                        width={100}
                        className="svg-celebrate"
                      >
                        <polygon points="10,10 20,20" />
                        <polygon points="10,50 20,50" />
                        <polygon points="20,80 30,70" />
                        <polygon points="90,10 80,20" />
                        <polygon points="90,50 80,50" />
                        <polygon points="80,80 70,70" />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
