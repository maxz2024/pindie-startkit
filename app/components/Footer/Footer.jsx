"use client";

import Link from "next/link";
import Styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles["footer"]}>
      {pathname === "/" ? (
        <div className={Styles["footer__logo"]}>
          <span className={Styles["footer__logo-name"]}>pindie</span>
          <span className="footer__logo-copy">, XXI век</span>
        </div>
      ) : (
        <Link href="/" className={Styles["footer__logo"]}>
          <span className={Styles["footer__logo-name"]}>pindie</span>
          <span className="footer__logo-copy">, XXI век</span>
        </Link>
      )}
      <ul className={Styles["social-list"]}>
        <li className="social-list__item">
          <a
            href="https://www.youtube.com/@YandexPracticum"
            className={`button ${Styles["social-list__link"]}`}
          >
            YT
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://vk.com/yandex.practicum"
            className={`button ${Styles["social-list__link"]}`}
          >
            ВК
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://t.me/yndx_practicum"
            className={`button ${Styles["social-list__link"]}`}
          >
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
