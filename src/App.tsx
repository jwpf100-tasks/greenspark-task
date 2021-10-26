import { useState, useEffect } from "react";
import logo from "./logo.svg";

import useFetch from "./hooks/fetchData";
import "./App.css";
import "./scss/styles.scss";

const App = () => {
  const { response, error, isLoading } = useFetch({
    url: "https://getgreenspark.mocklab.io/products",
  });

  console.log(response, "response");
  console.log(error, "error");
  console.log(isLoading, "isLoading");

  return (
    <div className="App">
      {isLoading || response === null ? (
        <>Loading</>
      ) : (
        <>
          <div className="">{JSON.stringify(response[0])}</div>
          <div className="">{JSON.stringify(response[1])}</div>
          <div className="">{JSON.stringify(response[2])}</div>
        </>
      )}
    </div>
  );
};

export default App;
