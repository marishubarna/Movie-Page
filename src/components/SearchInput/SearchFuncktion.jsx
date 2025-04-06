import React, { useState, useEffect } from "react";
import * as Select from "@radix-ui/react-select";
import { useNavigate, Link } from "react-router-dom";
import classNames from "classnames";
import "@radix-ui/themes/styles.css";
import "./SearchStyle.css";

const SelectItem = React.forwardRef(
  ({ children, className, movie, handleSelect, ...props }, forwardedRef) => (
    <Link
      to={`/movie/${movie.id}`}
      className={classNames("search-link", className)}
      onClick={() => handleSelect(movie.id)}
    >
      <div {...props} ref={forwardedRef}>
        {children}
      </div>
    </Link>
  )
);

const SearchFuncktion = ({ handleSelect }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [MovieSearch, setMovieSearch] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    const results = movies.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setTimeout(() => setMovieSearch(results), 100);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="SearchContainerDisplay">
      <Select.Root
        onValueChange={setValue}
        onOpenChange={() => setMovieSearch(movies)}
      >
        <div className="w-72 max-w-full">
          <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
            <Select.Value placeholder="Search...">{value}</Select.Value>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              avoidCollisions={false}
              className="w-[var(--radix-select-trigger-width)] overflow-hidden mt-3 bg-white border rounded-lg shadow-sm text-sm"
            >
              <div className="shadow flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 text-gray-500 w-full rounded-md outline-none"
                  onInput={handleSearch}
                />
              </div>
              <Select.Viewport className="max-h-64 mt-2 overflow-y-auto">
                {MovieSearch.length < 1 ? (
                  <div className="px-3 py-2 text-gray-600">Nothing found.</div>
                ) : (
                  MovieSearch.map((movie) => (
                    <SelectItem
                      key={movie.id}
                      value={movie.title}
                      movie={movie}
                      handleSelect={handleSelect}
                    >
                      {movie.title}
                    </SelectItem>
                  ))
                )}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </div>
      </Select.Root>
    </div>
  );
};

export default SearchFuncktion;
