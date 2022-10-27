const Form = (props) => {
  const formObj = {
    productname: "",
    produktamount: 0,
    productcategory: "",
    date: "",
  };

  const submitForm = (e) => {
    e.preventDefault();
    for (const item of e.target.children) {
      item.value = "";
    }
    props.addNewUser(formObj);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        required
        placeholder="Product name"
        onChange={(event) => (formObj.productname = event.target.value)}
      />
      <input
        type="number"
        min="1"
        required
        placeholder="Produkt Amount"
        onChange={(event) => (formObj.produktamount = +event.target.value)}
      />
      <input
        type="date"
        required
        onChange={(event) => (formObj.date = event.target.value)}
      />
      <input
        type="text"
        required
        placeholder="Product category"
        onChange={(event) => (formObj.productcategory = event.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
