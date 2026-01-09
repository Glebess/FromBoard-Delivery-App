import styles from "./AdvantagesBlock.module.css";
const AdvantagesBlock = (props) => {
  const { img, p, pHeader } = props;
  return (
    <div className={styles.div_container}>
      <img src={img} />
      <div>
        <p>{pHeader}</p>
        <p>{p}</p>
      </div>
    </div>
  );
};
export default AdvantagesBlock;
