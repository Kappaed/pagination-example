import PageActions from "./PageActions";

const Pagination = (props) => {
  return (
    <PageActions
      current={props.current}
      forward={props.forward}
      backward={props.backward}
      onInputChange={props.onInputChange}
    />
  );
};

export default Pagination;
