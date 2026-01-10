import styles from "./Welcome.module.css";
import img from "./Rectangle.png";
import { useState } from "react";
import Input from "../ComponentShare/Input";
const Welcome = () => {
  const [calculatorForm, setCalculatorForm] = useState({
    name: "",
    email: "",
    tel: "",
    square: "",
    weight: "",
    country: "",
    city: "",
    regionDelivery: "",
    cityDelivery: "",
  });
  const handleChangeForm = (e) => {
    const { id, value } = e.target;
    setCalculatorForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
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
      {console.log(calculatorForm)}
      <div className={styles.div_calculator}>
        <p>Калькулятор доставки</p>
        <p>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</p>
        <form className={styles.div_calculator_form}>
          <Input
            placeholder={"Имя"}
            id={"name"}
            onChange={handleChangeForm}
            value={calculatorForm.name}
          />
          <div>
            <Input
              placeholder="Почта"
              type="email"
              onChange={handleChangeForm}
              value={calculatorForm.email}
            />
            <Input
              placeholder="Телефон"
              type="tel"
              onChange={handleChangeForm}
              value={calculatorForm.tel}
            />
            <Input
              placeholder="Общая площадь, м²"
              id="square"
              onChange={handleChangeForm}
              value={calculatorForm.square}
            />
            <Input
              placeholder="Вес, кг"
              id="weight"
              onChange={handleChangeForm}
              value={calculatorForm.weight}
            />
            <Input
              placeholder="Страна покупки"
              id="country"
              required
              onChange={handleChangeForm}
              value={calculatorForm.country}
            />
            <Input
              placeholder="Город покупки"
              id="city"
              onChange={handleChangeForm}
              value={calculatorForm.city}
            />
            <Input
              placeholder="Область доставки"
              id="regionDelivery"
              onChange={handleChangeForm}
              value={calculatorForm.regionDelivery}
            />
            <Input
              placeholder="Город доставки"
              id="cityDelivery"
              onChange={handleChangeForm}
              value={calculatorForm.cityDelivery}
            />
          </div>
          <button>Заказать расчёт</button>
        </form>
      </div>
    </div>
  );
};
export default Welcome;
