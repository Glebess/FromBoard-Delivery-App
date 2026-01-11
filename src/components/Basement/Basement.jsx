import logo from "./images/logo.svg";
import styles from "./Basement.module.css";
const Basement = () => {
  return (
    <div className={styles.div_main}>
      <div className={styles.basement_div_topPart}>
        <div className={styles.div_logo}>
          <div>
            <img src={logo} />
            <p>FromBoard Delivery</p>
          </div>
          <p>2026 © Ни одно право не защищено, копируйте сколько влезет</p>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>Калькулятор</li>
            <li>О нас</li>
            <li>Гарантии</li>
            <li>Отзывы</li>
          </ul>
        </nav>

        <div className={styles.div_phone}>
          <p>+7 (800) 123 45-67</p>
          <p>Звонки по России бесплатны</p>
        </div>
      </div>
      <p className={styles.p_info}>
        НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что цены
        носят информационный и ознакомительный характер, а значит ни в какой
        мере не являются публичной офертой, которая определена в ст. 437 ГК РФ.
        Вся информация на сайте может содержать неточности, орфографические и
        иные ошибки, она не является полной, окончательно и исчерпывающей
      </p>
    </div>
  );
};
export default Basement;
