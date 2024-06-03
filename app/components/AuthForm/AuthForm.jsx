"use client";
import { endpoints } from "@/app/api/config";
import Styles from "./AuthForm.module.css";
import { useEffect, useState } from "react";
import {
  register,
  isResponseOk,
  login,
  setJWT,
  checkExistLogin,
} from "@/app/api/api-utils";
import { useStore } from "@/app/store/app-store";
import { Preloader } from "../Preloader/Preloader";

export const AuthForm = (props) => {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: null, text: null });
  const [typeForm, setTypeForm] = useState({ type: "login" });
  const [checkedData, setCheckedData] = useState({
    username: null,
    email: null,
    password: null,
  });
  const authContext = useStore();

  const setChekedElement = async (name, value) => {
    const fielMessage = document.querySelector(`#check-${name}`);
    if (value === "") {
      fielMessage.innerHTML = "";
      setCheckedData({ ...checkedData, [name]: null });
      return;
    }
    if (
      name === "email" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      fielMessage.innerHTML = "Некорректный формат email";
      setCheckedData({ ...checkedData, email: false });
      return;
    } else if (name === "username" && !/^[a-zA-Z0-9_@.]+$/.test(value)) {
      fielMessage.innerHTML = "Некорректный формат username";
      setCheckedData({ ...checkedData, username: false });
      return;
    }
    if (name === "password") {
      if (value.length < 8) {
        fielMessage.innerHTML = "Некорректный формат password";
        setCheckedData({ ...checkedData, password: false });
        return;
      }
      fielMessage.innerHTML = " ";
      setCheckedData({ ...checkedData, password: true });
      return;
    }

    const [check, result] = await checkExistLogin(endpoints.checkExists, value);
    fielMessage.innerHTML = result;
    setCheckedData({ ...checkedData, [name]: check });
  };

  const handleInput = async (e) => {
    const { name, value } = e.target;
    if (typeForm.type === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setChekedElement(name, value);
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
        setCheckedData({ username: null, email: null, password: null });
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
      setCheckedData({ username: null, email: null, password: null });
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
              <span className={Styles["form__field-title"]}>
                Ник{" "}
                <span
                  className={Styles["help-message"]}
                  data-title="Разрешены только английские буквы, символы: '@', '_', '.'"
                >
                  ?
                </span>
              </span>
              <div className={Styles["input__block"]}>
                <input
                  className={Styles["form__field-input"]}
                  style={{ border: "none", outline: "none" }}
                  name="username"
                  onInput={handleInput}
                  type="text"
                  placeholder="Ivan"
                  autocomplete="username"
                />
                {checkedData.username ? (
                  <img
                    className={Styles["check__image"]}
                    src="/images/yes.webp"
                  ></img>
                ) : checkedData.username === null ? (
                  ""
                ) : (
                  <img
                    className={Styles["check__image"]}
                    src="/images/no.webp"
                  ></img>
                )}
              </div>
              <p
                className={`${Styles["checked__message"]} ${
                  !checkedData.username ? Styles["checked__error"] : ""
                }`}
                id="check-username"
              ></p>
            </label>
            <label className={Styles["form__field"]}>
              <span className={Styles["form__field-title"]}>
                Email{" "}
                <span
                  className={Styles["help-message"]}
                  data-title="Формат почты hello@world.com"
                >
                  ?
                </span>
              </span>
              <div className={Styles["input__block"]}>
                <input
                  className={Styles["form__field-input"]}
                  style={{ border: "none", outline: "none" }}
                  name="email"
                  onInput={handleInput}
                  type="text"
                  placeholder="hello@world.com"
                  autocomplete="email"
                />
                {checkedData.email ? (
                  <img
                    className={Styles["check__image"]}
                    src="/images/yes.webp"
                  ></img>
                ) : checkedData.email === null ? (
                  ""
                ) : (
                  <img
                    className={Styles["check__image"]}
                    src="/images/no.webp"
                  ></img>
                )}
              </div>
              <p
                className={`${Styles["checked__message"]} ${
                  !checkedData.email ? Styles["checked__error"] : ""
                }`}
                id="check-email"
              ></p>
            </label>
            <label className={Styles["form__field"]}>
              <span className={Styles["form__field-title"]}>
                Пароль{" "}
                <span
                  className={Styles["help-message"]}
                  data-title="Длина пароля от 8 символов"
                >
                  ?
                </span>
              </span>
              <div className={Styles["input__block"]}>
                <input
                  className={Styles["form__field-input"]}
                  style={{ border: "none", outline: "none" }}
                  name="password"
                  onInput={handleInput}
                  type="password"
                  placeholder="***********"
                  autoComplete="new-password"
                />
                {checkedData.password ? (
                  <img
                    className={Styles["check__image"]}
                    src="/images/yes.webp"
                  ></img>
                ) : checkedData.password === null ? (
                  ""
                ) : (
                  <img
                    className={Styles["check__image"]}
                    src="/images/no.webp"
                  ></img>
                )}
              </div>
              <p
                className={`${Styles["checked__message"]} ${
                  !checkedData.password ? Styles["checked__error"] : ""
                }`}
                id="check-password"
              ></p>
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
              disabled={
                !(
                  checkedData.email &&
                  checkedData.username &&
                  checkedData.password
                )
              }
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
