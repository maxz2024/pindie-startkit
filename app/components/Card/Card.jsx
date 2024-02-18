import Styles from './Card.module.css'

export const Card = ({image, description, name, authorName, voice }) => {
  return (
    <li className="cards-list__item">
      <a href="/game-id.html" className={Styles["card-list__link"]}>
        <article className={Styles["card"]}>
          <img
            src={image}
            alt=""
            className={Styles["card__image"]}
          />
          <div className={Styles["card__content-block"]}>
            <h3 className={Styles["card__title"]}>{name}</h3>
            <p className={Styles["card__description"]}>
              {description}
            </p>
            <div className={Styles["card__info-container"]}>
              <p className={Styles["card__author"]}>
                Автор: <span className={Styles["card__accent"]}>{authorName}</span>
              </p>
              <p className={Styles["card__votes"]}>
                Голосов на сайте: <span className={Styles["card__accent"]}>{voice}</span>
              </p>
            </div>
          </div>
        </article>
      </a>
    </li>
  )
}