const formPagesArray = (totalPages, currentPage, pagesToShow) => {
  let startIndex;
  let endIndex;
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const beforeCurr = Math.floor(pagesToShow / 2);
  const afterCurr = Math.ceil(pagesToShow / 2) - 1;

  console.log(totalPages, pagesToShow, afterCurr);
  if (currentPage <= beforeCurr) {
    startIndex = 1;
    endIndex = pagesToShow;
  } else if (currentPage + afterCurr >= totalPages) {
    startIndex = totalPages - pagesToShow + 1;
    endIndex = totalPages;
  } else {
    startIndex = currentPage - beforeCurr;
    endIndex = currentPage + afterCurr;
  }

  return [...new Array(endIndex + 1 - startIndex)].map(
    (_, i) => startIndex + i
  );
};

export default formPagesArray;
