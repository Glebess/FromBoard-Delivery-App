import styles from "./Header.module.css";
import logo from "./logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div_logo_header}>
        <div className={styles.div_logo}>
          <img src={logo} />
          <h1>FromBoard Delivery</h1>
        </div>

        <div className={styles.div_price_container}>
          <div className={styles.div_price}>
            <p>Доставляем товары из заграницы в Россию</p>
            <p>Стоимость от 550 рублей за заказ</p>
            <p>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</p>
          </div>

          <div className={styles.div_phone}>
            <p>+7 (800) 123 45-67</p>
            <p>Звонки по России бесплатны</p>
          </div>
        </div>
      </div>
      <div className={styles.div_bottom_header}>
        <nav className={styles.div_nav}>
          <ul>
            <li>Калькулятор</li>
            <li>О нас</li>
            <li>Гарантии</li>
            <li>Отзывы</li>
          </ul>
        </nav>

        <button>Оставить заявку</button>
      </div>
    </header>
  );
};
export default Header;
