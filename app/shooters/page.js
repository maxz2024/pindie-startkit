"use client";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Shooters() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");

  return shootersGames ? (
    <main className={"main-inner"}>
      <CardsList id="shooters" title="Шутеры" data={shootersGames} />
    </main>
  ) : (
    <Preloader />
  );
}
