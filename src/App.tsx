import useFetch, { IStatus } from "./hooks/fetchData";
import "./App.css";
import "./scss/styles.scss";
import Container from "./components/container/Container";
import ContainerHeader from "./components/container/ContainerHeader";
import Card from "./components/card/Card";

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
          <Card response={response[0]} defaultColor={"green"}></Card>
        </Container>
      )}
    </div>
  );
};

export default App;
