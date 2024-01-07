import styles from "./FruitsList.module.css";

const FruitsList = (props) => {
  return (
    <ul className={styles.list}>
      {props?.fruits.map((f) => {
        return (
          <li key={f.id} onClick={props.deleteHandler.bind(null, f.id)}>
            {f.name} {f.price}
          </li>
        );
      })}
    </ul>
  );
};

export default FruitsList;
