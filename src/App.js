import React, { Fragment, useState } from "react";
import Form from "./components/form/form";
import RenderData from "./components/render/Render";

const App = () => {
  const [list, setList] = useState([]);
  const addNewUser = (formObj) => {
    setList((list) => [...list, formObj]);
  };

  return (
    <Fragment>
      <Form addNewUser={addNewUser} />
      <RenderData list={list}></RenderData>
    </Fragment>
  );
};

export default App;
