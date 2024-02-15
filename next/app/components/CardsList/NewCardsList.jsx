import Styles from './CardsList.module.css'
import { NewCard } from './NewCard'

export const NewCardList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id="new">
        Новинки
      </h2>
      <ul className={Styles["cards-list"]}>
        <NewCard
          url="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg" name="Go Away" description="Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню." author_name="Mahisto" voice="20"
        />
        <NewCard url="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png" name="G.U.N.N.E.R." description="Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше." author_name="IDKWIAm" voice="10"
        />
        <NewCard url="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
          name="Space Terror"
                <p className="card__description">
                  Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.
                </p>
                <div className="card__info-container">
                  <p className="card__author">
                    Автор: <span className="card__accent">IDKWIAm</span>
                  </p>
                  <p className="card__votes">
                    Голосов на сайте: <span className="card__accent">20</span>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li>
        <li className="cards-list__item">
          <a href="/game-id.html" className="card-list__link">
            <article className="card">
              <img
                src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                alt=""
                className="card__image"
              />
              <div className="card__content-block">
                <h3 className="card__title">Square Slayer</h3>
                <p className="card__description">
                  Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.
                </p>
                <div className="card__info-container">
                  <p className="card__author">
                    Автор: <span className="card__accent">niclan</span>
                  </p>
                  <p className="card__votes">
                    Голосов на сайте: <span className="card__accent">10</span>
                  </p>
                </div>
              </div>
            </article>
          </a>
        </li> */}
      </ul>
    </section>
  )
}