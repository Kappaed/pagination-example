import { useState, useRef, useEffect } from "react";

const usePagination = (totalData, perPage, startPage = 0) => {
  const [currPage, setCurrPage] = useState(startPage);
  const [isForward, setIsForward] = useState(null);
  const prevPage = useRef(null);
  useEffect(() => {
    if (prevPage.current == null) {
      return;
    }
    if (prevPage.current < currPage) {
      setIsForward(true);
    } else if (prevPage.current > currPage) {
      setIsForward(false);
    } else {
      return;
    }
  }, [currPage]);
  useEffect(() => (prevPage.current = currPage));

  const dataToShow = totalData.slice(
    currPage * perPage,
    currPage * perPage + perPage
  );
  const canMoveForwards = totalData.length > currPage * perPage + perPage;
  const canMoveBackwards = currPage * perPage >= perPage;
  const setPageForward = () =>
    setCurrPage((curr) => (canMoveForwards ? curr + 1 : curr));
  const setPageBackward = () =>
    setCurrPage((curr) => (canMoveBackwards ? curr - 1 : curr));

  const setInputPage = (value) => {
    let intValue = parseInt(value, 10);
    if (intValue < 0) {
      setCurrPage(0);
    } else if (isNaN(intValue)) {
      setCurrPage("");
    } else {
      setCurrPage(intValue);
    }
  };

  console.log(isForward);
  return {
    currPage,
    dataToShow,
    canMoveForwards,
    canMoveBackwards,
    setPageBackward,
    setPageForward,
    setInputPage,
    isForward,
  };
};

export default usePagination;
