"use client";
import { Banner } from "./components/Banner/Banner";

import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory, isResponseOk } from "./api/api-utils";
import { endpoints } from "./api/config";
import { useState, useEffect } from "react";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const [newGames, setNewGames] = useState(true);
  const [popularGames, setPopularGames] = useState(true);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "new"
      );
      const popularGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "popular"
      );
      isResponseOk(newGames) ? setNewGames(newGames) : setNewGames(null);
      isResponseOk(popularGames)
        ? setPopularGames(popularGames)
        : setPopularGames(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  return preloaderVisible ? (
    <Preloader />
  ) : (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярное" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
