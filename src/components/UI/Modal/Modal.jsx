import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackground = (props) => {
  return (
    <div className={styles["modal-background"]} onClick={props.isOpen}></div>
  );
};

const ModalOverlight = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-header"]}>Header</div>
      <div className={styles["modal-message"]}>{props.message}</div>
      <div className={styles["modal-footer"]}>
        <button type="button" onClick={props.isOpen}>
          Ok
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackground isOpen={props.isOpen} />,
        document.getElementById("modal-background")
      )}
      {ReactDOM.createPortal(
        <ModalOverlight message={props.message} isOpen={props.isOpen} />,
        document.getElementById("modal-overlight")
      )}
    </>
  );
};
export default Modal;
