"use client";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return newGames ? (
    <main className="main-inner">
      <CardsList id="new" title="Новинки" data={newGames} />
    </main>
  ) : (
    <Preloader />
  );
}
