import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { lodash } from "lodash";

export default function useHarkerNewsAPI() {
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
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  const handleSetValue = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  return {
    loading,
    hits,
    errorMessage,
    query,
  };
}
