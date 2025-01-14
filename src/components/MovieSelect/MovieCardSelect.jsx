import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCardSelect = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie selected</div>;
  }

  return (
    <div className="movie-grid">
      <div key={movie.id}>
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h5>{movie.release_date}</h5>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
        <video src={movie.trailer} controls></video>
      </div>
    </div>
  );
};

export default MovieCardSelect;
