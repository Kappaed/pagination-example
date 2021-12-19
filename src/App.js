import "./App.scss";
import Container from "./components/UI/Container";
import tableData from "./mock-data";
import usePagination from "./hooks/usePagination";
import SummaryList from "./components/Summary/SummaryList";
import Pagination from "./components/Pagination";
import { useRef, useState, useEffect } from "react";
import PagesRow from "./components/Pagination/PagesRow";
function App() {
  const isMount = useRef(false);
  const [showDirection, setShowDirection] = useState(false);

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
  } = usePagination(tableData, 10);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    const id = setTimeout(() => {
      setShowDirection(true);
    }, 500);
    return () => clearTimeout(id);
  }, [currPage]);

  useEffect(() => {
    const id = setTimeout(() => {
      setShowDirection(false);
    }, 600);
    return () => clearTimeout(id);
  }, [showDirection]);
  return (
    <div className="App">
      <div className={`middle-align my-10 ${showDirection ? "fade-in" : ""}`}>
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

      <div className="middle-align">
        pages: {`0 pages to ${tableData.length / 10 - 1}`}
      </div>
      <PagesRow
        onPageClick={setInputPage}
        pages={pagesArray}
        currPage={currPage}
      />
    </div>
  );
}

export default App;
