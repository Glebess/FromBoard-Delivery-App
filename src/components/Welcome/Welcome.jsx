import styles from "./Welcome.module.css";
import img from "./Rectangle.png";
const Welcome = () => {
  //   const sumbitCalculator = () => {};
  return (
    <div className={styles.welcome_container}>
      <div className={styles.div_text}>
        <p>
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </p>
        <p>
          Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
          позволяет вам легко и удобно заказывать товары со всего мира и
          получать их в России
        </p>
        <img src={img} />
      </div>

      <div className={styles.div_calculator}>
        <p>Калькулятор доставки</p>
        <p>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</p>
        <form className={styles.div_calculator_form}>
          <input placeholder="Имя" id="name" required />
          <div>
            <input placeholder="Почта" type="email" id="email" required></input>
            <input placeholder="Телефон" type="tel" id="tel" required></input>
            <input placeholder="Общая площадь, м²" id="square" required></input>
            <input placeholder="Вес, кг" id="weight" required></input>
            <input placeholder="Страна покупки" id="country" required></input>
            <input placeholder="Город покупки" id="city" required></input>
            <input
              placeholder="Область доставки"
              id="regionDelivery"
              required
            ></input>
            <input
              placeholder="Город доставки"
              id="cityDelivery"
              required
            ></input>
          </div>
          <button>Заказать расчёт</button>
        </form>
      </div>
    </div>
  );
};
export default Welcome;
