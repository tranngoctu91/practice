import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = () => {
    let value = document.getElementById("txt-query").value;
    setQuery(value);
  };
  useEffect(() => {
    handleFetchData.current();

    let button = document.getElementById("btn-fetch");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [query]);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    try {
      setLoading(true);
      var response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response?.data?.hits || []);
      setLoading(false);
    } catch (error) {
      debugger;
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  const handleSetValue = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  return (
    <div>
      <div>
        <input
          id="txt-query"
          type="text"
          defaultValue={query}
          //   onChange={handleSetValue}
        />
        <button id="btn-fetch">Fetch</button>
      </div>

      <div>{loading && <p>Loading...</p>}</div>
      {!loading && errorMessage && <p>{errorMessage}</p>}

      <div>{!loading && hits.map((s, i) => <p key={i}>{s.title}</p>)}</div>
    </div>
  );
};

export default HackerNews;
