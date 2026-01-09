import styles from "./QualityGuarantees.module.css";

import rectangle from "./image/Rectangle 3.svg";
import rectangle1 from "./image/Rectangle 3-1.svg";
import rectangle2 from "./image/Rectangle 3-2.svg";
import rectangle3 from "./image/Rectangle 3-3.svg";
const QualityGuarantees = () => {
  return (
    <div className={styles.div_container}>
      <div className={styles.div_text}>
        <p>Гарантии качества</p>
        <p>
          Наши гарантии качества включают в себя полный спектр документов,
          необходимых для ввоза и вывоза товаров, а также для успешного бизнеса
          на мировом рынке. Мы предоставляем вам надёжность и уверенность
        </p>
      </div>
      <div className={styles.div_certificate}>
        <div>
          <img src={rectangle} />
          <p>Свидетельство о регистрации в РФ</p>
        </div>
        <div>
          <img src={rectangle1} />
          <p>Свидетельство о регистрации в США</p>
        </div>
        <div>
          <img src={rectangle2} />
          <p>Свидетельство о регистрации в Китае</p>
        </div>
        <div>
          <img src={rectangle3} />
          <p>Свидетельство о регистрации в Великобритнии</p>
        </div>
      </div>
      <button>Показать больше документов</button>
    </div>
  );
};
export default QualityGuarantees;
