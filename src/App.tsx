import { useState, useEffect } from "react";
import logo from "./logo.svg";

import useFetch, { IStatus } from "./hooks/fetchData";
import "./App.css";
import "./scss/styles.scss";

const App = () => {
  const { response, error, status } = useFetch({
    url: "https://getgreenspark.mocklab.io/products",
  });

  console.log(response, "response");
  console.log(error, "error");
  console.log(status, "isLoading");

  return (
    <div className="App">
      {status !== IStatus.Succeeded || response === null ? (
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
