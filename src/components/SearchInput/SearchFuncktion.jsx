import * as Select from "@radix-ui/react-select";
import "@radix-ui/themes/styles.css";
import React, { useState, useEffect } from "react";
import "./SearchStyle.css";

export default () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [MovieSearch, setMovieSearch] = useState([]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                  ""
                )}
                {MovieSearch.map((item, idx) => (
                  <SelectItem key={idx} value={item.title}>
                    {item.title}
                  </SelectItem>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </div>
      </Select.Root>
    </div>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-4 line-clamp-1">{children}</div>
        </Select.ItemText>
        <div className="w-6"></div>
      </Select.Item>
    );
  }
);
