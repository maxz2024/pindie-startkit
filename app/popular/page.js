import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default function Popular() {
    const popularGames = getGamesByCategory("popular");
    return (
        <main className={"main-inner"}>
            <CardsList id="popular" title="Популярное" data={popularGames} />
        </main>
    )

}