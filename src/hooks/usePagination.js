import { useState, useRef, useEffect } from "react";
import formPagesArray from "../components/Pagination/formPagesArray";

const usePagination = (totalData, perPage, startPage = 1) => {
  const [currPage, setCurrPage] = useState(startPage);
  const [isForward, setIsForward] = useState(null);
  const prevPage = useRef(null);
  const pagesArray = formPagesArray(
    Math.ceil(totalData.length / parseInt(perPage, 10)),
    currPage,
    10
  );
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
    (currPage - 1) * parseInt(perPage, 10),
    (currPage - 1) * parseInt(perPage, 10) + parseInt(perPage, 10)
  );

  const canMoveForwards =
    totalData.length >
    (currPage - 1) * parseInt(perPage, 10) + parseInt(perPage, 10);
  const canMoveBackwards = (currPage - 1) * perPage >= perPage;
  const setPageForward = () =>
    setCurrPage((curr) => (canMoveForwards ? curr + 1 : curr));
  const setPageBackward = () =>
    setCurrPage((curr) => (canMoveBackwards ? curr - 1 : curr));

  const setInputPage = (value) => {
    let intValue = value === "" ? 0 : parseInt(value, 10);
    if (isNaN(intValue)) {
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
    pagesArray,
    isForward,
  };
};

export default usePagination;
