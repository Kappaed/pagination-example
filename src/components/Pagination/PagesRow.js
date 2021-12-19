import styled from "./PagesRow.module.scss";

const PagesRow = (props) => {
  return (
    <div className={styled.pagesRow}>
      {props.pages.map((page, index) => (
        <button
          key={index}
          className={`${styled.actions__button} ${
            page === props.currPage ? styled.selected : ""
          }`}
          onClick={() => props.onPageClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PagesRow;
