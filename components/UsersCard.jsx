import { SocketContext } from '@/contexts/Socket';
import { UsersContext } from '@/contexts/User';
import { useContext, useEffect, useState } from 'react';
import AlienCard from './AlienCard';

export default function UsersCard({ isLoading }) {
  const { users, setUsers } = useContext(UsersContext);
  const { yourSocket, setYourSocket } = useContext(SocketContext);
  const [usersAlien, setUsersAlien] = useState({});

  useEffect(() => {
    if (yourSocket === users.p1.p1socketId) {
      setUsersAlien(users.p1.p1alien);
    } else {
      setUsersAlien(users.p2.p2alien);
    }
  }, [isLoading]);

  if (usersAlien) {
    return (
      <div className="two-player-usercard">
        <div className="alien-img">
          {usersAlien.planet ? <img
            className="alien-planet"
            src={`assets/alien-layers/planet-${usersAlien.planet}.png`}
          /> : null}
          
          {usersAlien.skinColour && usersAlien.skinTexture ? <img
            className="alien-body"
            src={`assets/alien-layers/body-${usersAlien.skinColour}-${usersAlien.skinTexture}.png`}
          /> : null}
          
          {usersAlien.eyeColour && usersAlien.eyes ? <img
            className="alien-eyes"
            src={`assets/alien-layers/eyes-${usersAlien.eyeColour}-${usersAlien.eyes}.png`}
          /> : null}
          
          {usersAlien ? <img
            className="alien-mouth"
            src={`assets/alien-layers/mouth-${
              usersAlien.isFriendly ? 'friendly' : 'unfriendly-a'
            }.png`}
          /> : null}

          {usersAlien.horns ? (
            <img
              className="alien-horns"
              src={`assets/alien-layers/horns-${usersAlien.horns}.png`}
            />
          ) : null}
          {usersAlien.hasAntenna ? (
            <img
              className="alien-antenna"
              src={'assets/alien-layers/antenna.png'}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
