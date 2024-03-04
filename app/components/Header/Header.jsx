"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import Link from "next/link";

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);

  const handlePopup = () => {
    setPopupIsOpened(!popupIsOpened);
  };

  const pathname = usePathname();
  
  return (
    <header className={Styles["header"]}>
      {pathname === "/" ?
        <span className={Styles["logo"]}><img
          className={Styles["logo__image"]}
          src="./images/logo.svg"
          alt="Логотип Pindie" /></span> :
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="./images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>}
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""
                }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : ""
                }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/shooters" className={`${Styles["menu__link"]} ${pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}>
              Раннеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          <button className={Styles["auth__button"]} onClick={handlePopup}>
            Войти
          </button>
        </div>
      </nav>
      <Overlay popupIsOpened={popupIsOpened} closePopup={handlePopup} />
      <Popup popupIsOpened={popupIsOpened} closePopup={handlePopup}>
        <AuthForm />
      </Popup>
    </header>
  );
};
