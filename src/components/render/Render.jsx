const RenderData = (props) => {
  return (
    <div>
      {props.list.map((value, index) => {
        return (
          <div>
            <h2 key={index} value={value}>
              {props.value.firstName +
                " " +
                props.value.lastName +
                " " +
                props.value.age}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default RenderData;
