import { Card } from '../Card/Card'

export const NewCardsFragment = () => {
  return (
    <>
      <Card
        image="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
        name="Go Away"
        description="Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню." author_name="Mahisto"
        voice="20"
      />
      <Card
        image="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
        name="G.U.N.N.E.R."
        description="Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше." author_name="IDKWIAm"
        voice="10"
      />
      <Card
        image="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
        name="Terror"
        description="Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути."
        author_name="IDKWIAm"
        voice="20"
      />
      <Card image="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
        name="Square Slayer"
        description="Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень."
        author_name="niclan"
        voice="10"
      />
    </>
  )
}