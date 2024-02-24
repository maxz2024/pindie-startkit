import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardList } from "./components/CardsList/CardList";
import { NewCardsFragment } from "./components/CardsList/NewCardFragmet";
import { PopularCardFragment } from "./components/CardsList/PopularCardFragment";
import { getGamesByCategory } from "./data/data-utils";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new"); 
  return (
    <main className="main">
      <Banner/>
      <CardList id="popular" title="Популярное" data={popularGames}/>
      <CardList id="new" title="Новинки" data={newGames}/>
      <Promo/>
    </main>

  );
}
