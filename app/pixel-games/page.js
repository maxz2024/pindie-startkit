"use client";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return pixelGames ? (
    <main className={"main-inner"}>
      <CardsList id="pixel-games" title="Пиксельные" data={pixelGames} />
    </main>
  ) : (
    <Preloader />
  );
}
