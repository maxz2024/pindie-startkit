import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default function Shooters() {
    const shootersGames = getGamesByCategory("shooter");
    return (
        <main className={"main-inner"}>
            <CardsList id="shooters" title="Шутеры" data={shootersGames} />
        </main>
    )

}