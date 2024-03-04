import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default function Runners() {
    const runnersGames = getGamesByCategory("runner");
    return (
        <main className={"main-inner"}>
            <CardsList id="runners" title="Раннеры" data={runnersGames} />
        </main>
    )

}