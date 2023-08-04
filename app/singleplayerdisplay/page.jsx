'use client';

import EndGameModal from '@/components/EndGameModal';
import { Footer } from '@/components/Footer';
import Gameboard from '@/components/Gameboard';
import { Header } from '@/components/Header';
import OpponentCard from '@/components/OpponentCard';
import QuestionCard from '@/components/QuestionCard';
import UserStats from '@/components/UserStats';
import { useState, useEffect } from 'react';
import { getAliens } from '../utils/getAliens';
import chooseSecretAlien from '../utils/chooseSecretAlien';

export default function SinglePlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [alienObjects, setAlienObjects] = useState([]);
  const [chosenAlien, setChosenAlien] = useState();

  useEffect(() => {
    getAliens().then((res) => {
      setAlienObjects(res);
      setIsLoading(false);
     // setChosenAlien(chooseSecretAlien(res));
     setChosenAlien(res[0])
    });
  }, []);

  return (
    <main>
      <Header />
      <div className="game-wrapper">
        {isGameFinished && <EndGameModal alienObjects={alienObjects} />}
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
        />
        <OpponentCard />
        <UserStats alienObjects={alienObjects} />
      </div>
      <Footer />
    </main>
  );
}
