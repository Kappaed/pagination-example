import styled from "./index.module.scss";
const Pagination = (props) => {
  return (
    <div class={styled.actions}>
      <button className={styled.actions__button}>Left</button>
      <input
        name="page-number"
        id="page-number"
        // placeholder="Available numbers per page"
        className={styled.actions__input}
      />
      <button className={styled.actions__button}>Right</button>
    </div>
  );
};

export default Pagination;
