import { useState, useEffect } from "react";

import useFetch, { IStatus } from "./hooks/fetchData";
import "./App.css";
import "./scss/styles.scss";
import Container from "./components/container/Container";
import Header from "./components/container/Header";

const App = () => {
  const { response, error, status } = useFetch({
    url: "https://getgreenspark.mocklab.io/products",
  });

  console.log(response, "response");
  console.log(error, "error");
  console.log(status, "isLoading");

  return (
    <div className="App app">
      {status !== IStatus.Succeeded || response === null ? (
        <>Loading</>
      ) : (
        <Container>
          <Header text="Per product widgets" />
          <div className="">{JSON.stringify(response[0])}</div>
          <div className="">{JSON.stringify(response[1])}</div>
          <div className="">{JSON.stringify(response[2])}</div>
        </Container>
      )}
    </div>
  );
};

export default App;
