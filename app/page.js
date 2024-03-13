"use client";
import { Banner } from "./components/Banner/Banner";

import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { Preloader } from "./components/Preloader/Preloader";
import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return popularGames && newGames ? (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  ) : (
    <Preloader />
  );
}
