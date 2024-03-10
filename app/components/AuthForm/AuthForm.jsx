"use client";
import { endpoints } from "@/app/api/config";
import Styles from "./AuthForm.module.css";
import { useEffect, useState } from "react";
import { authorize, getMe, isResponseOk, setJWT } from "@/app/api/api-utils";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ identifier: "", password: "" });
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    /* Предотвращаем стандартное поведение формы */
    e.preventDefault();
    /* Вызываем функцию authorize с данными из формы */
    const userData = await authorize(endpoints.auth, authData);
    /* Проверяем ответ сервера с помощью isResponseOk */
    if (isResponseOk(userData)) {
      /* Записываем в стейт данные пользователя с сервера */
      setUserData(userData);
      /*  */
      props.setAuth(true);
      /* Записываем сообщение об авторизации */
      setMessage({ status: "success", text: "Вы авторизовались!" });
      setJWT(userData.jwt);
    } else {
      /* Записываем сообщение об ошибке */
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };
  useEffect(() => {
    let timer;
    if (userData) {
      timer = setTimeout(() => {
        /* В props close лежит функция закрытия попапа */
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [userData]);

  return (
    <form className={Styles["form"]} onSubmit={handleSubmit}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            className={Styles["form__field-input"]}
            name="identifier"
            onInput={handleInput}
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            className={Styles["form__field-input"]}
            name="password"
            onInput={handleInput}
            type="password"
            placeholder="***********"
          />
        </label>
      </div>
      <p className={Styles["forms__message"]}>
        {message.status && message.text}
      </p>
      <div className={Styles["form__actions"]}>
        <button
          className={Styles["form__reset"]}
          type="reset"
          onClick={() => {
            setMessage({ status: null, text: null });
          }}
        >
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};
