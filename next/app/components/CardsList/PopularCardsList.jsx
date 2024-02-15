import Styles from "./CardsList.module.css"
import { PopularCardFragment } from "./PopularCardFragment";

export const PopularCardList = () => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id="new">
        Популярное
      </h2>
      <ul className={Styles["cards-list"]}>
        <PopularCardFragment/>
      </ul >
    </section >
  );
};
