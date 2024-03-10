"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function TDS() {
    const [tdsGames, setTDSGames] = useState(true);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const tdsGames = await getNormalizedGamesDataByCategory(
            endpoints.games,
            "TDS"
        );
        isResponseOk(tdsGames) ? setTDSGames(tdsGames) : setTDSGames(null);
        setPreloaderVisible(false);
        }
        fetchData();
    }, []);
    
  return preloaderVisible ? (
    <Preloader />
  ) : (
        <main className={"main-inner"}>
            <CardsList id="tds" title="TDS" data={tdsGames} />
        </main>
    )

}