"use client";
import { Banner } from "./components/Banner/Banner";

import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "./components/Preloader/Preloader";
import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return popularGames && newGames ? (
    <main className="main">
      <Banner />
      <CardsListSection type="slider" id="popular" title="Популярное" data={popularGames} />
      <CardsListSection type="slider" id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  ) : (
    <Preloader />
  );
}
