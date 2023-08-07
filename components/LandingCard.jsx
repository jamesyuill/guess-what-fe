"use client";

import { UserContext } from "@/contexts/User";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LandingCard = () => {
  const { userOne, setUserOne } = useContext(UserContext);
  const [clicked, setClicked] = useState(false);

  const router = useRouter();

  function handleSinglePlayerClick(e) {
    e.preventDefault();
    setClicked(true);
    router.push("/singleplayerdisplay");
  }

  return (
    <div className="landing-text-box">
      <h2>Welcome!</h2>

      <p>
        Ask yes or no questions to find out which randomly generated alien your
        opponent has chosen
      </p>

      <form
        className="sign-in-form"
        id="sign-in"
        onSubmit={(e) => {
          handleSinglePlayerClick(e);
        }}
      >
        <div className="input-boxes">
          <p>Please enter your name</p>
          <div className="flex flex-col">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={userOne}
              onChange={(e) => {
                setUserOne(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="room-id">Room ID: </label>
            <input type="text" id="room-id" />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            id="singleplayer-btn"
            disabled={clicked || userOne === ""}
            type="submit"
          >
            1 player
          </button>
          <button id="multiplayer-btn" disabled={true}>
            2 player
          </button>
        </div>
        <button>
          <Link href="/leaderboarddisplay">View Leaderboard</Link>
        </button>
      </form>
    </div>
  );
};
