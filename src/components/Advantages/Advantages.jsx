import styles from "./Advantages.module.css";
import AdvantagesBlock from "./AdvantagesBlock/AdvantagesBlock";
import boards from "./Image/Board.svg";
import info from "./Image/info.svg";
import best from "./Image/best.svg";
import guarantee from "./Image/guarantee.svg";
import delivery from "./Image/Delivery.svg";
import box from "./Image/Package.svg";
const Advantages = () => {
  return (
    <div className={styles.div_container}>
      <p className={styles.p_header_advantages}>Наши преимущества</p>
      <div className={styles.div_container_block}>
        <AdvantagesBlock
          img={boards}
          pHeader={"Растоможка груза"}
          p={
            "Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза"
          }
        />
        <AdvantagesBlock
          img={best}
          pHeader={"Удобный сервис"}
          p={
            "Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным"
          }
        />
        <AdvantagesBlock
          img={box}
          pHeader={"Надёжная упаковка"}
          p={
            "Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируя, что они дойдут в безопасности и в отличном состоянии"
          }
        />
        <AdvantagesBlock
          img={info}
          pHeader={"Прозрачность работы"}
          p={
            "Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа"
          }
        />
        <AdvantagesBlock
          img={delivery}
          pHeader={"Быстро и выгодно"}
          p={
            "Мы предлагаем быструю и выгодную доставку, чтобы вы могли насладиться покупками как можно скорее."
          }
        />
        <AdvantagesBlock
          img={guarantee}
          pHeader={"Страхование груза"}
          p={
            "Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации"
          }
        />
      </div>
    </div>
  );
};
export default Advantages;
