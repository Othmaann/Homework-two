const RenderData = (props) => {
  return (
    <div>
      {props.list.map((value, index) => {
        return (
          <div key={index} value={value}>
           <h2>Item: {value.item}</h2>
             <h2>Amount: {value.amount}</h2>
             <h2>Date: {value.date}</h2>
             <h2>Catagory: {value.catagory}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default RenderData;

