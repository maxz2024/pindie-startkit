"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function Runners() {
    const [runnersGames, setRunnersGames] = useState(true);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const runnersGames = await getNormalizedGamesDataByCategory(
            endpoints.games,
            "runner"
        );
        isResponseOk(runnersGames) ? setRunnersGames(runnersGames) : setRunnersGames(null);
        setPreloaderVisible(false);
        }
        fetchData();
    }, []);
    
  return preloaderVisible ? (
    <Preloader />
  ) : (
        <main className={"main-inner"}>
            <CardsList id="runners" title="Раннеры" data={runnersGames} />
        </main>
    )

}