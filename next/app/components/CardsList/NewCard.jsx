import Styles from './CardsList.module.css'

export const NewCard = (props) => {
    return (
        <li className="cards-list__item">
            <a href="/game-id.html" className={Styles["card-list__link"]}>
                <article className={Styles["card"]}>
                    <img
                        src={props.url}
                        alt=""
                        className={Styles["card__image"]}
                    />
                    <div className={Styles["card__content-block"]}>
                        <h3 className={Styles["card__title"]}>{props.name}</h3>
                        <p className={Styles["card__description"]}>
                            {props.description}
                        </p>
                        <div className={Styles["card__info-container"]}>
                            <p className={Styles["card__author"]}>
                                Автор: <span className={Styles["card__accent"]}>{props.author_name}</span>
                            </p>
                            <p className={Styles["card__votes"]}>
                                Голосов на сайте: <span className={Styles["card__accent"]}>{props.voice}</span>
                            </p>
                        </div>
                    </div>
                </article>
            </a>
        </li>
    )
}