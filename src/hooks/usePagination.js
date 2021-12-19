import { useState } from "react";

const usePagination = (totalData, perPage, startPage = 0) => {
  const [currPage, setCurrPage] = useState(startPage);
  const dataToShow = totalData.slice(
    currPage * perPage,
    currPage * perPage + perPage
  );
  const canMoveForwards = totalData.length > currPage * perPage + perPage;
  const canMoveBackwards = currPage * perPage >= perPage;
  const setPageForward = () =>
    setCurrPage((curr) => (canMoveForwards ? parseInt(curr, 10) + 1 : curr));
  const setPageBackward = () =>
    setCurrPage((curr) => (canMoveBackwards ? parseInt(curr, 10) - 1 : curr));

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
  return {
    currPage,
    dataToShow,
    canMoveForwards,
    canMoveBackwards,
    setPageBackward,
    setPageForward,
    setInputPage,
  };
};

export default usePagination;
