import AlienCard from "./AlienCard";
import OpponentCard from "./OpponentCard";
import UserStats from "./UserStats";

export default function Gameboard() {
  //useEffect that gets the aliens from a get request and sets them as state
  //inside return statement map over them
  //return the component AlienCard
  const demoArray = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12",
    "a13",
    "a14",
    "a15",
    "a16",
    "a17",
    "a18",
    "a19",
    "a20",
    "a21",
    "a22",
    "a23",
    "a24",
  ];

  return (
    <>
      <div className="gameboard">
        {demoArray.map((alien) => {
          return <AlienCard alien={alien} />;
        })}
      </div>
      <OpponentCard />
      <div>
        <UserStats />
      </div>
    </>
  );
}
