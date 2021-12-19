import Item from "./Item";
const SummaryList = (props) => {
  return (
    <>
      {props.list.map((obj, index) => (
        <Item
          key={index}
          firstName={obj.first_name}
          lastName={obj.last_name}
          email={obj.email}
        />
      ))}
    </>
  );
};

export default SummaryList;
