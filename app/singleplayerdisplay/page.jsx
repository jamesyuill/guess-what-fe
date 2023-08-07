"use client";

import EndGameModal from "@/components/EndGameModal";
import { Footer } from "@/components/Footer";
import Gameboard from "@/components/Gameboard";
import { Header } from "@/components/Header";
import OpponentCard from "@/components/OpponentCard";
import QuestionCard from "@/components/QuestionCard";
import UserStats from "@/components/UserStats";
import { useState, useEffect } from "react";
import { getAliens } from "../utils/getAliens";
import chooseSecretAlien from "../utils/chooseSecretAlien";
import LeaderBoardModal from "@/components/LeaderBoardModal";

export default function SinglePlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [alienObjects, setAlienObjects] = useState([]);
  const [chosenAlien, setChosenAlien] = useState();
  const [hasWon, setHasWon] = useState(null);

  useEffect(() => {
    if (!isGameFinished) {
      getAliens().then((res) => {
        setAlienObjects(res);
        setIsLoading(false);
        setChosenAlien(chooseSecretAlien(res));
      });
    }
  }, [isGameFinished]);

  return (
    <main>
      <Header />
      <div className="game-wrapper">
        {/* needs setting back to is game finished */}
        {isGameFinished && (
          <EndGameModal
            chosenAlien={chosenAlien}
            setIsGameFinished={setIsGameFinished}
            setHasWon={setHasWon}
          />
        )}
        {/* needs setting back to is game finished */}
        <LeaderBoardModal />
        <Gameboard
          isLoading={isLoading}
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
        />
        <QuestionCard
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
          setIsGameFinished={setIsGameFinished}
          chosenAlien={chosenAlien}
          hasWon={hasWon}
          setHasWon={setHasWon}
        />
        <OpponentCard />
        <UserStats
          alienObjects={alienObjects}
          isGameFinished={isGameFinished}
        />
      </div>
      <Footer />
    </main>
  );
}
