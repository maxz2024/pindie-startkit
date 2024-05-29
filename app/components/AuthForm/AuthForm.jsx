"use client";
import { endpoints } from "@/app/api/config";
import Styles from "./AuthForm.module.css";
import { useEffect, useState } from "react";
import { authorize, isResponseOk, setJWT } from "@/app/api/api-utils";
import { useStore } from "@/app/store/app-store";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ login: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });
  const authContext = useStore();

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
      authContext.login({ ...userData, id: userData._id }, userData.jwt)
      /* Записываем сообщение об авторизации */
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      /* Записываем сообщение об ошибке */
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };
  useEffect(() => {
    let timer;
    if (authContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null });
        props.close();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);

  return (
    <form className={Styles["form"]} onSubmit={handleSubmit}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email, username</span>
          <input
            className={Styles["form__field-input"]}
            name="login"
            onInput={handleInput}
            type="type"
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
