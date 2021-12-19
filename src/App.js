import "./App.scss";
import Container from "./components/UI/Container";
import tableData from "./mock-data";
import Item from "./components/Summary/Item";
import SummaryList from "./components/Summary/SummaryList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <Container>
        <SummaryList list={tableData} />
      </Container>
      <Pagination />
    </div>
  );
}

export default App;
