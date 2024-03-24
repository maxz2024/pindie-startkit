"use client";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function TDS() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return tdsGames ? (
    <main className={"main-inner"}>
      <CardsListSection id="tds" title="TDS" data={tdsGames} />
    </main>
  ) : (
    <Preloader />
  );
}
