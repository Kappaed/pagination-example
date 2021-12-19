import { useEffect, useState, useRef } from "react";

const useShowDirection = (currPage) => {
  const [showDirection, setShowDirection] = useState(false);
  const isMount = useRef(false);

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

  return showDirection;
};

export default useShowDirection;
