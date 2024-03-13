"use client";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Runners() {
  const runnersGames = useGetDataByCategory(endpoints.games, "runner");

  return runnersGames ? (
    <main className={"main-inner"}>
      <CardsList id="runners" title="Раннеры" data={runnersGames} />
    </main>
  ) : (
    <Preloader />
  );
}
