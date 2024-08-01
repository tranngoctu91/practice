import useHarkerNewsAPI from "../../hooks/useHarkerNewsAPI";

const HackerNewsWithHook = () => {
  const { hits, errorMessage, loading, query } = useHarkerNewsAPI();

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

export default HackerNewsWithHook;
