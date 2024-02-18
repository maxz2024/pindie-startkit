import { Card } from "../Card/Card"

export const PopularCardFragment = () => {
    return (
    <>
        <Card image="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
            name="Crystal Kepper"
            description="Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней."
            author_name="Lonely Baobab"
            voice="20" />
        <Card image="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
            name="Dangeons'n'Caves. Prologue"
            description="Безымянный герой исследует пещеры и подземелья, чтобы найти
            больше информации о себе."
            author_name="F-Style"
            voice="10"
        />
        <Card image="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
            name="Defence of Crystal"
            description="Защищай магический кристалл от монстров и уничтожай кладбища,
            чтобы спасти Землю, которую поглотил мрак."
            author_name="MastWe"
            voice="20"
        />
    </>
    )
}