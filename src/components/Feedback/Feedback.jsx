import { useState } from "react";
import styles from "./Feedback.module.css";
import Input from "..//ComponentShare/Input";

const Feedback = () => {
  const [formFeedBack, setFormFeedBack] = useState({
    name: "",
    email: "",
    tel: "",
    theme: "",
    text: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormFeedBack((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div className={styles.div_container}>
      <div className={styles.div_main}>
        <p>Остались вопросы?</p>
        <div>
          <form>
            <Input
              id="name"
              placeholder="Имя"
              value={formFeedBack.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Почта"
              type="email"
              value={formFeedBack.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Телефон"
              type="tel"
              value={formFeedBack.phone}
              onChange={handleChange}
            />
            <Input
              id="theme"
              placeholder="Тема вопроса"
              value={formFeedBack.theme}
              onChange={handleChange}
            />
            <textarea
              id="text"
              placeholder="Сообщение..."
              required
              value={formFeedBack.text}
              onChange={handleChange}
            />
            <button>Оставить заявку</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
