import { useState, useEffect } from "react";

import useFetch, { IStatus } from "./hooks/fetchData";
import "./App.css";
import "./scss/styles.scss";
import Container from "./components/container/Container";
import ContainerHeader from "./components/container/ContainerHeader";
import Card from "./components/card/Card";
import Badge from "./components/card/Badge";

const App = () => {
  const { response, error, status } = useFetch({
    url: "https://getgreenspark.mocklab.io/products",
  });

  return (
    <div className="App app">
      {status !== IStatus.Succeeded || response === null ? (
        <>Loading</>
      ) : (
        <Container>
          <ContainerHeader text="Per product widgets" />
          <Card>
            <Badge
              id={response[2].id}
              type={response[2].type}
              amount={response[2].amount}
            />
          </Card>
        </Container>
      )}
    </div>
  );
};

export default App;
