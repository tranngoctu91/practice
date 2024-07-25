import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import lodash from "lodash";

const HackerNewsRDC = () => {
  const initialState = {
    hits: [],
    query: "",
    loading: true,
    errorMessage: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA": {
        return {
          ...state,
          hits: action.payload,
        };
      }
      case "SET_LOADING": {
        return {
          ...state,
          loading: action.payload,
        };
      }

      case "SET_Q": {
        return {
          ...state,
          query: action.payload,
        };
      }

      case "SET_E": {
        debugger;
        return {
          ...state,
          errorMessage: action.payload,
        };
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    let value = document.getElementById("txt-query").value;
    dispatch({
      type: "SET_Q",
      payload: value,
    });
  };
  useEffect(() => {
    handleFetchData.current();

    let button = document.getElementById("btn-fetch");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [state.query]);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      var response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
      dispatch({
        type: "SET_DATA",
        payload: response.data.hits || [],
      });

      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_E",
        payload: error.message,
      });
    }
  };
  const handleSetValue = lodash.debounce((e) => {
    dispatch({
      type: "SET_Q",
      payload: e.target.value,
    });
  }, 500);

  return (
    <div>
      <div>
        <input
          id="txt-query"
          type="text"
          defaultValue={state.query}
          onChange={handleSetValue}
        />
        <button id="btn-fetch">Fetch</button>
      </div>

      <div>{state.loading && <p>Loading...</p>}</div>
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}

      <div>
        {!state.loading && state.hits.map((s, i) => <p key={i}>{s.title}</p>)}
      </div>
    </div>
  );
};

export default HackerNewsRDC;
