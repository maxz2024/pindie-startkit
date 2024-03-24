"use client";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Shooters() {
  const shootersGames = useGetDataByCategory(endpoints.games, "shooter");

  return shootersGames ? (
    <main className={"main-inner"}>
      <CardsListSection id="shooters" title="Шутеры" data={shootersGames} />
    </main>
  ) : (
    <Preloader />
  );
}
