import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardList } from "./components/CardsList/CardList";
import { NewCardsFragment } from "./components/CardsList/NewCardFragmet";
import { PopularCardFragment } from "./components/CardsList/PopularCardFragment";

export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <CardList id="popular" title="Популярное">
        <PopularCardFragment/>
      </CardList>
      <CardList id="new" title="Новинки">
        <NewCardsFragment/>
      </CardList>
      <Promo/>
    </main>

  );
}
