/* export const Footer = () => {
  return (
    <footer className="footer">
      <a href="./index.html" className="footer__logo">
        <span className="footer__logo-name">pindie</span>
        <span className="footer__logo-copy">, XXI век</span>
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="" className="button social-list__link">
            YT
          </a>
        </li>
        <li className="social-list__item">
          <a href="" className="button social-list__link">
            ВК
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://t.me/maxz2024" className="button social-list__link">
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
 */
import Styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={Styles["footer"]}>
      <a href="./index.html" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className="footer__logo-copy">, XXI век</span>
      </a>
      <ul className={Styles["social-list"]}>
        <li className="social-list__item">
          <a href="" className={`button ${Styles['social-list__link']}`}>
            YT
          </a>
        </li>
        <li className="social-list__item">
          <a href="" className={`button ${Styles['social-list__link']}`}>
            ВК
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://t.me/maxz2024" className={`button ${Styles['social-list__link']}`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};

