const RenderData = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.list.map((value, index) => {
        return (
          <div key={index} value={value}>
            <h2>
              {value.productname +
                " " +
                value.produktamount +
                " " +
                value.productcategory +
                " " +
                value.date}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default RenderData;

