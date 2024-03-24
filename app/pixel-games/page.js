"use client";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return pixelGames ? (
    <main className={"main-inner"}>
      <CardsListSection id="pixel-games" title="Пиксельные" data={pixelGames} />
    </main>
  ) : (
    <Preloader />
  );
}
