import Styles from "./CardsList.module.css";
import { Card } from "../Card/Card";
import Link from "next/link";

export const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <Link
                href={`/games/${item.id}`}
                className={Styles["card-list__link"]}
              >
                <Card {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
