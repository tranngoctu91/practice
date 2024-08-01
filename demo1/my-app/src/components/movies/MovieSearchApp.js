import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import useHandleChange from "../../hooks/useHandleChange";
import useDebound from "../../hooks/useDebound";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(true);
  const { handleInputChange, values } = useHandleChange({
    keyword: "lan",
  });
  const { deboundValue } = useDebound(values.keyword, 500);
  useEffect(() => {
    const fetchData = async (q) => {
      setloading(true);
      var response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=83f28695f9770ca51bcb242449b233e9`
      );

      if (response.data.results) {
        setMovies(response.data.results);
        setloading(false);
      }
    };

    fetchData(deboundValue);

    return () => {};
  }, [deboundValue]);

  return (
    <div>
      <div>
        <input
          defaultValue={values.keyword}
          onChange={handleInputChange}
          type="text"
          name="keyword"
        />
      </div>
      {loading && <div>Loading...</div>}
      {!loading &&
        movies.map((item, index) => (
          <MovieItem key={item.id} data={item}></MovieItem>
        ))}
    </div>
  );
};

export default MovieSearchApp;
