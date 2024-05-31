"use client";
import Styles from "./Me.module.css";
import { useEffect, useState } from "react";
import { useStore } from "../store/app-store";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";

export default function Shooters() {
  const authContext = useStore();
  const [isLoaded, setIsLoaded] = useState(false);
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  useEffect(() => {
    if (authContext.user !== undefined) {
      if (!authContext.user) {
        window.location.href = "/";
        return null;
      }
      setIsLoaded(true);
    }
  }, [authContext.user]);

  return isLoaded && authContext.user && popularGames ? (
    <main className={Styles["main"]}>
      <div className={Styles["left_block"]}>
        <div className={Styles["profile"]}>
          <h1 style={{ padding: "20px" }}>Профиль</h1>
          <div className={Styles["profile__container"]}>
            <div className={Styles["profile_left"]}>
              <span className={Styles["avatar"]}>
                <img
                  className={Styles["avatar__image"]}
                  src={`/images/${authContext.user.role}.png`}
                ></img>
              </span>
            </div>
            <div className={Styles["profile__right"]}>
              <p>
                <span className={Styles["bold"]}>ID: </span>
                {authContext.user.id}
              </p>
              <p>
                <span className={Styles["bold"]}>Ник: </span>
                {authContext.user.username}
              </p>
              
              <p>
                <span className={Styles["bold"]}>Почта: </span>
                {authContext.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* <div className={Styles["my_games"]}>
          <CardsListSection type="slider" id="popular" title="Популярное" data={popularGames}/>
        </div> */}
      </div>
      <div className={Styles["right_block"]}>
        <div className={Styles["applications"]}>
          <h1 style={{ padding: "20px", textAlign: "left" }}>Мои заявки</h1>
          <div className={Styles["application__container"]}>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Preloader />
  );
}
