"use client";
import { getNormalizedGamesDataByCategory,isResponseOk } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useState, useEffect } from "react";

export default function PixelGames() {
    const [pixelGames, setPixelGames] = useState(true);
    const [preloaderVisible, setPreloaderVisible] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const pixelGames = await getNormalizedGamesDataByCategory(
            endpoints.games,
            "pixel"
        );
        isResponseOk(pixelGames) ? setPixelGames(pixelGames) : setPixelGames(null);
        setPreloaderVisible(false);
        }
        fetchData();
    }, []);
    
    return preloaderVisible ? (
        <Preloader />
    ) : (
        <main className={"main-inner"}>
            <CardsList id="pixel-games" title="Пиксельные" data={pixelGames} />
        </main>
    )

}