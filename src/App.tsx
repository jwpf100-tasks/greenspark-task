import useFetch, { IStatus } from "./hooks/fetchData";
import "./scss/styles.scss";
import Container from "./components/container/Container";
import ContainerHeader from "./components/container/ContainerHeader";
import Card from "./components/card/Card";

const App = () => {
  const { response, error, status } = useFetch({
    url: "https://getgreenspark.mocklab.io/products",
  });

  interface defaultColor {
    [key: number]: string;
  }

  const defaultColor: defaultColor = {
    1: "purple",
    2: "green",
    3: "cream",
  };

  return (
    <div className="app">
      {status !== IStatus.Succeeded || response === null ? (
        <>Loading</>
      ) : (
        <Container>
          <ContainerHeader text="Per product widgets" />
          {response.map((item) => (
            <Card response={item} defaultColor={defaultColor[item.id]}></Card>
          ))}
        </Container>
      )}
    </div>
  );
};

export default App;
