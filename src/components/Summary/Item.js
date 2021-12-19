import styled from "./Item.module.scss";
const Item = (props) => {
  return (
    <div className={styled.item}>
      <span>
        {props.firstName} {props.lastName}
      </span>
      <span>{props.email}</span>
    </div>
  );
};

export default Item;
