"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function Popular() {
    const [popularGames, setPopularGames] = useState(true);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const popularGames = await getNormalizedGamesDataByCategory(
            endpoints.games,
            "popular"
        );
        isResponseOk(popularGames) ? setPopularGames(popularGames) : setPopularGames(null);
        setPreloaderVisible(false);
        }
        fetchData();
    }, []);
    
  return preloaderVisible ? (
    <Preloader />
  ) : (
        <main className={"main-inner"}>
            <CardsList id="popular" title="Популярное" data={popularGames} />
        </main>
    )

}