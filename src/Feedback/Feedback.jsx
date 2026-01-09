import { useState } from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const [formFeedBack, setFormFeedBack] = useState({
    name: "",
    email: "",
    phone: "",
    theme: "",
    text: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFeedBack((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  {
    console.log(formFeedBack);
  }
  return (
    <div className={styles.div_container}>
      <p>Остались вопросы?</p>
      <div>
        <form>
          <input
            name="name"
            placeholder="Имя"
            required
            value={formFeedBack.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Почта"
            type="email"
            required
            value={formFeedBack.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Телефон"
            type="tel"
            required
            value={formFeedBack.phone}
            onChange={handleChange}
          />
          <input
            name="theme"
            placeholder="Тема вопроса"
            required
            value={formFeedBack.theme}
            onChange={handleChange}
          />
          <textarea
            name="text"
            placeholder="Сообщение..."
            required
            value={formFeedBack.text}
            onChange={handleChange}
          />
          <button>Оставить заявку</button>
        </form>
      </div>
    </div>
  );
};
export default Feedback;
