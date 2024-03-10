"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function Shooters() {
    const [shootersGames, setShootersGames] = useState(true);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const shootersGames = await getNormalizedGamesDataByCategory(
            endpoints.games,
            "shooter"
        );
        isResponseOk(shootersGames) ? setShootersGames(shootersGames) : setShootersGames(null);
        setPreloaderVisible(false);
        }
        fetchData();
    }, []);
    
  return preloaderVisible ? (
    <Preloader />
  ) : (
        <main className={"main-inner"}>
            <CardsList id="shooters" title="Шутеры" data={shootersGames} />
        </main>
    )

}