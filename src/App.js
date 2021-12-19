import "./App.scss";
import Container from "./components/UI/Container";
import tableData from "./mock-data";
import usePagination from "./hooks/usePagination";
import SummaryList from "./components/Summary/SummaryList";
import Pagination from "./components/Pagination";

function App() {
  const {
    currPage,
    dataToShow,
    canMoveForwards,
    setPageBackward,
    setPageForward,
    canMoveBackwards,
    setInputPage,
  } = usePagination(tableData, 10, 0);
  console.log(currPage);
  return (
    <div className="App">
      <Container>
        <SummaryList list={dataToShow} />
      </Container>
      <Pagination
        current={currPage}
        forward={{ canMoveForwards, setPageForward }}
        backward={{ canMoveBackwards, setPageBackward }}
        onInputChange={setInputPage}
      />
    </div>
  );
}

export default App;
