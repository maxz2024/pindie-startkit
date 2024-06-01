"use client";
import { endpoints } from "@/app/api/config";
import Styles from "./AuthForm.module.css";
import { useEffect, useState } from "react";
import { register, isResponseOk, login, setJWT } from "@/app/api/api-utils";
import { useStore } from "@/app/store/app-store";
import { Preloader } from "../Preloader/Preloader";
import { ST } from "next/dist/shared/lib/utils";

export const AuthForm = (props) => {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: null, text: null });
  const [typeForm, setTypeForm] = useState({ type: "login" });
  const authContext = useStore();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (typeForm.type === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleSubmitLogin = async (e) => {
    /* Предотвращаем стандартное поведение формы */
    e.preventDefault();
    /* Вызываем функцию authorize с данными из формы */
    const userData = await login(endpoints.auth, loginData);
    /* Проверяем ответ сервера с помощью isResponseOk */
    if (isResponseOk(userData)) {
      authContext.login({ ...userData, id: userData._id }, userData.jwt);
      /* Записываем сообщение об авторизации */
      setTypeForm({ type: "loading" });
      setMessage({ status: "success", text: "Вход выполенен." });
    } else {
      /* Записываем сообщение об ошибке */
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    const userDataRegister = await register(endpoints.users, {
      ...registerData,
      role: "user",
    });
    if (isResponseOk(userDataRegister)) {
      setTypeForm({ type: "loading" });
      setMessage({
        status: "success",
        text: "Авторизация успешна. Выполняется вход",
      });
      authContext.login(
        { ...userDataRegister, id: userDataRegister._id },
        userDataRegister.jwt
      );
    } else {
      /* Записываем сообщение об ошибке */
      setMessage({ status: "error", text: userDataRegister.message });
    }
  };

  useEffect(() => {
    let timer;
    if (authContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null });
        props.close();
        setTypeForm({ type: "login" });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);

  const setForm = (e) => {
    setMessage({ status: "loading", text: "Загрузка" });
    setTypeForm({ type: "loading" });
    setTimeout(() => {
      setTypeForm({ type: e.target.id });
      setMessage({ status: null, message: null });
    }, 1000);
  };

  return (
    <>
      <div className={Styles["but-container"]}>
        <h1
          className={`${Styles["form__title"]} ${
            typeForm.type === "login" ? Styles["form__title__active"] : ""
          }`}
          id="login"
          onClick={setForm}
        >
          Авторизация
        </h1>
        <h1
          className={`${Styles["form__title"]} ${
            typeForm.type === "auth" ? Styles["form__title__active"] : ""
          }`}
          id="auth"
          onClick={setForm}
        >
          Регистрация
        </h1>
      </div>
      {typeForm.type === "login" ? (
        <form
          id="login"
          className={Styles["form"]}
          onSubmit={handleSubmitLogin}
        >
          <div className={Styles["form__fields"]}>
            <label className={Styles["form__field"]}>
              <span className={Styles["form__field-title"]}>
                Email, username
              </span>
              <input
                className={Styles["form__field-input"]}
                name="login"
                onInput={handleInput}
                type="text"
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
      ) : typeForm.type === "auth" ? (
        <div className={Styles["form"]}>
          <div className={Styles["form__fields"]}>
            <label className={Styles["form__field"]}>
              <span className={Styles["form__field-title"]}>Ник</span>
              <input
                className={Styles["form__field-input"]}
                name="username"
                onInput={handleInput}
                type="text"
                placeholder="Ivan"
                autocomplete="name"
              />
            </label>
            <label className={Styles["form__field"]}>
              <span className={Styles["form__field-title"]}>Email</span>
              <input
                className={Styles["form__field-input"]}
                name="email"
                onInput={handleInput}
                type="email"
                placeholder="hello@world.com"
                autocomplete="email"
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
                autoComplete="new-password"
              />
            </label>
          </div>
          <p className={Styles["forms__message"]}>
            {message.status && message.text}
          </p>
          <div className={`${Styles["form__actions"]} ${Styles["form__mini"]}`}>
            <button
              className={Styles["form__reset"]}
              type="reset"
              onClick={() => {
                setMessage({ status: null, text: null });
              }}
            >
              Очистить
            </button>
            <button
              className={Styles["form__submit"]}
              onClick={handleSubmitAuth}
            >
              Регистрация
            </button>
          </div>
        </div>
      ) : (
        <>
          <Preloader />
          <p style={{ textAlign: "center" }}>{`${message.text}`}</p>
        </>
      )}
    </>
  );
};
