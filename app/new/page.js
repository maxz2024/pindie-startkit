"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function New() {
  const [newGames, setNewGames] = useState(true);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        "new"
      );
      isResponseOk(newGames) ? setNewGames(newGames) : setNewGames(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);
  
  return preloaderVisible ? (
    <Preloader />
  ) : (
    <main className={"main-inner"}>
      <CardsList id="new" title="Новинки" data={newGames} />
    </main>
  );
}
