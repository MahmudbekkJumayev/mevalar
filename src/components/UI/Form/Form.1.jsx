import React, { useState } from "react";
import styles from "./Form.module.css";

/*
    Components
  1. StateFull Component - StateLess Component / Presentation Component
  2. Smart Component - Dump Component
  3. Controlled - UnControlled Components
  4. Izalation


*/
export const Form = (props) => {
  // const [changeInputValue, setChangeInputValue] = useState("");
  // const [changePriceInput, setChangePriceInput] = useState("");
  const [formState, setFromState] = useState({
    name: "",
    price: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.setFruits((fruits) => {
      // const newObj = {
      //   id: Date.now().toString(),
      //   name: changeInputValue,
      //   price: changePriceInput,
      // };
      // return [newObj, ...fruits];
      const obj = {
        //   id: Date.now().toString(),
      };
    });
    // setChangeInputValue("");
    // setChangePriceInput("");
    props.openHandler((prevV) => !prevV);
  };

  const inputsHandler = (e) => {
    if (e.target.name === "fruit") {
      setFromState((obj) => ({ ...obj, name: e.target.value }));
    }
    if (e.target.name === "price") {
      setFromState((obj) => ({ ...obj, price: e.target.value }));
    }
  };

  // const changePriceHandler = (e) => {
  //   setChangePriceInput(e?.target?.value);
  // };
  // const changeInputHandler = (e) => {
  //   setChangeInputValue(e.target.value);
  // };
  //   [
  //    React.createElement("div", { className: "box" }, [
  //      React.createElement("span", {}, ["Spandiv"]),
  //      React.createElement("button", { type: "button" }, ["Save"]),
  //    ]),
  //    React.createElement("form", {}, ["Form"]),
  //  ];
  /*
  1. <Wrapper></Wrapper>,
  2. [],
  3. <React.Fragment></React.Fragment>,
  4. <></>
  */
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        placeholder="Fruit"
        // onChange={changeInputHandler}
        onChange={inputsHandler}
        // value={changeInputValue}
        value={formState.name}
        name="fruit"
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        // onChange={changePriceHandler}
        onChange={inputsHandler}
        // value={changePriceInput}
        value={formState.price}
      />

      <button type="submit" className={styles.btn}>
        Save
      </button>
    </form>
  );
};
