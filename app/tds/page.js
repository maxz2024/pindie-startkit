import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default function Tds() {
    const tdsGames = getGamesByCategory("TDS");
    return (
        <main className={"main-inner"}>
            <CardsList id="tds" title="TDS" data={tdsGames} />
        </main>
    )

}