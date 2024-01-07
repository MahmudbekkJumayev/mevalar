import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
import Modal from "../Modal/Modal";

const Form = (props) => {
  const [changeInputValue, setChangeInputValue] = useState("");
  const [changePriceInput, setChangePriceInput] = useState("");
  const [okPrice, setOkPrice] = useState(false);
  const [okName, setOkName] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errPrice, setErrPrice] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (changeInputValue.length < 3 || changePriceInput.length < 4) {
      if (changeInputValue.length < 3) {
        setError(() => "Nom bo'sh bo'lmasin!");
      }
      if (changePriceInput.length < 4) {
        setError((err) =>
          err ? err + " Narx bo'sh bo'lmasin!" : "Narx bo'sh bo'lmasin!"
        );
      }
      return;
    }
    props.setFruits((fruits) => {
      const obj = {
        id: Date.now().toString(),
        name: changeInputValue,
        price: changePriceInput,
      };

      const value = [...fruits, obj];
      localStorage.setItem("fruits", JSON.stringify(value));
      return value;
    });

    props.openHandler((prevV) => !prevV);
  };

  const changePriceHandler = (e) => {
    const value = e?.target?.value?.trim();
    if (value.length > 3) {
      setErrPrice(false);
      setOkPrice(true);
    }
    if (value.length <= 3) {
      setErrPrice(true);
      setOkPrice(false);
    }
    setChangePriceInput(value);
  };

  const changeInputHandler = (e) => {
    const value = e?.target?.value?.trim();
    if (value.length > 2) {
      setErrName(false);
      setOkName(true);
    }
    if (value.length <= 2) {
      setErrName(true);
      setOkName(false);
    }
    setChangeInputValue(value);
  };

  const errIsOpen = () => {
    setError(false);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {error && <Modal isOpen={errIsOpen} message={error} />}
      <label htmlFor="">
        <input
          type="text"
          placeholder="Fruit"
          onChange={changeInputHandler}
          value={changeInputValue}
          className={`${errName ? styles.error : ""} ${
            okName ? styles.success : ""
          }`}
        />
        <p
          className={`${errName ? styles.textErr : ""} ${
            okName ? styles.textSuccess : ""
          }`}
        >
          {errName ? "error" : ""}
          {okName ? "success" : ""}
        </p>
      </label>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Price"
          onChange={changePriceHandler}
          value={changePriceInput}
          className={`${okPrice ? styles.success : ""}`}
        />

        <p
          className={`${errPrice ? styles.textErr : ""} ${
            okPrice ? styles.textSuccess : ""
          }`}
        >
          {errPrice ? "error" : ""}
          {okPrice ? "success" : ""}
        </p>
      </label>

      <button type="submit" className={styles.btn}>
        Save
      </button>
    </form>
  );
};

export default Form;
