import "./App.scss";
import Container from "./components/UI/Container";
import tableData from "./mock-data";
import usePagination from "./hooks/usePagination";
import SummaryList from "./components/Summary/SummaryList";
import Pagination from "./components/Pagination";
import { useState } from "react";
import PagesRow from "./components/Pagination/PagesRow";
import useShowDirection from "./hooks/useShowDirection";
function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const onInputChange = (event) => {
    const value = event.target.value;

    if (isNaN(parseInt(value, 10))) {
      return setItemsPerPage("");
    }
    setItemsPerPage(value);
  };
  const {
    currPage,
    dataToShow,
    canMoveForwards,
    setPageBackward,
    setPageForward,
    canMoveBackwards,
    setInputPage,
    pagesArray,
    isForward,
  } = usePagination(tableData, itemsPerPage);
  const canShow = useShowDirection(currPage);
  console.log(canShow);
  return (
    <div className="App">
      <div className={`hide my-10 ${canShow ? "fade-in" : ""}`}>
        {isForward
          ? "Moved Forward"
          : isForward === false
          ? "Moved Backward"
          : ""}
      </div>
      <Container>
        <SummaryList list={dataToShow} />
      </Container>
      <Pagination
        current={currPage}
        forward={{ canMoveForwards, setPageForward }}
        backward={{ canMoveBackwards, setPageBackward }}
        onInputChange={setInputPage}
      />

      <div className="fade-in my-10">
        pages:{" "}
        {`1 pages to ${Math.ceil(
          tableData.length / parseInt(itemsPerPage, 10)
        )}`}
      </div>
      <PagesRow
        onPageClick={setInputPage}
        pages={pagesArray}
        currPage={currPage}
      />
      <div>
        <span style={{ marginRight: "5px" }}>Enter items per Page</span>
        <input
          className="my-10"
          onChange={onInputChange}
          value={itemsPerPage}
        />
      </div>
    </div>
  );
}

export default App;
