import Item from "./Item";
import styled from "./Item.module.scss";
const SummaryList = (props) => {
  return (
    <>
      {props.list.length > 0 ? (
        props.list.map((obj, index) => (
          <Item
            key={index}
            firstName={obj.first_name}
            lastName={obj.last_name}
            email={obj.email}
          />
        ))
      ) : (
        <div className={styled.placeholder}>
          No items on the current page...
        </div>
      )}
    </>
  );
};

export default SummaryList;
