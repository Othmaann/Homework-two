const Form = (props) => {
  const formObj = {
    item: "",
    amount: 0,
    date: 0,
    catagory: "",
  };

  const submitForm = (e) => {
    e.preventDefault();
    for (const item of e.target.children) {
      item.value = "";
    }
    props.addData(formObj);
  };

  return (
    <form onSubmit={submitForm}>
   
          <input
            type="text"
            required
            placeholder="Product name"
            onChange={(event) => (formObj.item = event.target.value)}
          ></input>
          <input
             type="number"
             min="1"
             required
            placeholder="Product amount"
            onChange={(event) => (formObj.amount = event.target.value)}
          ></input>
          <input
            type="date"
            required
            onChange={(event) => (formObj.date = event.target.value)}
          ></input>
          <input
            type="text"
            required
            placeholder="Product catagory"
            onChange={(event) => (formObj.catagory = event.target.value)}
          ></input>
          <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
