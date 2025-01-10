import React, { useEffect, useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handelFilter = (event) => {
    const filterValue = event.target.value;

    if (filterValue === "high") {
      setMovies(movies.filter((movie) => movie.vote_average >= 7));
    } else if (filterValue === "eng") {
      setMovies(movies.filter((movie) => movie.original_language === "en"));
    } else if (filterValue === "dateYear") {
      setMovies(
        movies.filter(
          (movie) => new Date(movie.release_date).getFullYear() === 2024
        )
      );
    } else {
      setMovies(movies);
    }
  };

  const getMovie = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFjZDAyY2E5NzJlOTFkYTQ5YWE1YzBmYzc1YzE5ZiIsIm5iZiI6MTczNjQ0ODk3OS4zMDA5OTk5LCJzdWIiOiI2NzgwMWJkMzYwMWFjZmU3YmQ0ZWExY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HGORtpmEehpt_P0QpewtFn3oMBrJYsaHL2SboaLbhys",
      },
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  // useEffect(() => {
  //   if (movies.length > 0) {
  //     let index = 0;

  //     const interval = setInterval(() => {
  //       setVisible((prev) => [...prev, movies[index]]);
  //       index += 1;

  //       if (index >= movies.length) {
  //         clearInterval(interval);
  //       }
  //     }, 300);
  //   }
  // }, [movies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="body">
      <div className="checkBox">
        <select onChange={handelFilter} className="filter-select">
          <option value="all">All Movies</option>
          <option value="high">Rating 7.0-9.0</option>
          <option value="eng">English Language</option>
          <option value="dateYear">Release Year 2024</option>
        </select>
      </div>
      <div className="MovieDisplayCenter">
        <ul className="MovieDisplay">
          {movies.map((movie) => (
            <li className="LiMovieList fade-in" key={movie.id}>
              <img
                className="ImagesWidth"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="MovieTitle">{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
