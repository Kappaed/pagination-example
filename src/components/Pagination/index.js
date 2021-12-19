import styled from "./index.module.scss";
const Pagination = (props) => {
  return (
    <div className={styled.actions}>
      <button
        className={styled.actions__button}
        onClick={props.backward.setPageBackward}
        disabled={!props.backward.canMoveBackwards}
      >
        Left
      </button>
      <input
        name="page-number"
        id="page-number"
        value={props.current}
        onChange={(event) => props.onInputChange(event.target.value)}
        className={styled.actions__input}
      />
      <button
        className={styled.actions__button}
        onClick={props.forward.setPageForward}
        disabled={!props.forward.canMoveForwards}
      >
        Right
      </button>
    </div>
  );
};

export default Pagination;
