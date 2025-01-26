import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovies, fetchTVShows } from "../../api/movieApi";
import "./MovieList.css";

const MovieList = ({ handleSelect }) => {
  const [movies, setMovies] = useState([]);
  const [TVshow, setTVShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieData, tvData] = await Promise.all([
          fetchMovies(),
          fetchTVShows(),
        ]);
        setMovies(movieData);
        setTVShow(tvData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Rest of your component remains the same
};

export default MovieList;
