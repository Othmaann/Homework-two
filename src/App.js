import React, { useState } from "react";
import Form from "./components/form/form";
import RenderData from "./components/render/Render";
import Showcatagory from "./components/render/Showcatagory";

const App = () => {
  const [data, setData] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [list, setList] = useState([]);

  const addData = (dataobjekt) => {
    if (!catagory.includes(dataobjekt.catagory)) {
      setCatagory([...catagory, dataobjekt.catagory]);
    }
    setData([...data, dataobjekt]);
    setList([...list, dataobjekt]);
  };

  const filtreraMydata = (catagory) => {
    let filterCatagory = data;
    filterCatagory = filterCatagory.filter(
      (product) => product.catagory === catagory
    );
    setList([...filterCatagory]);
  };

  const showAll = () => {
    setList([...data]);
  };
  const click = () => {
    return <button onClick={() => showAll()}>Show All</button>;
  };

  return (
    <div>
      <Form addData={addData} />
      <div>
        <div>
      <RenderData list={list}></RenderData>
      {click()}

      <div>
          {catagory.map((value, index) => {
            return (
              <Showcatagory
                key={index}
                value={value}
                filter={filtreraMydata}
              ></Showcatagory>
            );
          })}
              </div>
      </div>
    </div>
    </div>
  );
};

export default App;
