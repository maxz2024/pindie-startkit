import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default function New() {
    const pixelGames = getGamesByCategory("pixel");
    return (
        <main className={"main-inner"}>
            <CardsList id="pixel-games" title="Пиксельные" data={pixelGames} />
        </main>
    )

}