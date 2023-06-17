import React, { useState, useContext, useEffect } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial } from '../webcam';
import SocketContext from '../../contexts/Socket/SocketContext';


import KillMode from '../KillMode';
import ChaseCam from '../ChaseCam';

// creating the marker to be used for all players
// const geom = new BoxGeometry(20, 20, 20);
// const mtl = new MeshBasicMaterial({ color: 0xff0000 });
// const marker: Mesh<BoxGeometry, MeshBasicMaterial> = new Mesh(geom, mtl);


const GamePage: React.FC = () => {
  const { socket, uid, users, games } = useContext(SocketContext).SocketState;


  const userGame = Object.values(games).find((game) =>
  game.uidList.includes(uid));

  const geom = new BoxGeometry(20, 20, 20);
  const mtl = new MeshBasicMaterial({ color: 0xff0000 });
  const marker: Mesh<BoxGeometry, MeshBasicMaterial> = new Mesh(geom, mtl);

  const [markerBlueprint, setMarkerBlueprint] = useState<Mesh<BoxGeometry, MeshBasicMaterial>>(marker);


  // which component do we render? kill or chase?
  const [gameMode, setGameMode] = useState<string>('Chase');

  // creating the markers based on the number of users in the game lobby
  const [hardcodeUidList, setHardCode] = useState<string[]>(['1', '2', '3']);
  const [markers, setMarkers] = useState<Array<Mesh<BoxGeometry, MeshBasicMaterial>>>([]);

  // when the page is mounted, create all of the markers
  useEffect(() => {
    const newMarkers: Array<Mesh<BoxGeometry, MeshBasicMaterial>> = [];
    for (let i = 0; i < hardcodeUidList.length; i++) {
      newMarkers.push(marker);
    }
    setMarkers(newMarkers);
  }, [hardcodeUidList]);

  return (
    <div>
          <p>Players in this game:</p>
    <ul>
      {userGame?.uidList.map((playerUid) => (
        <li key={playerUid}>{playerUid}</li>
      ))}
    </ul>
      {/* {gameMode === 'Chase' && <ChaseCam markerBlueprint={ markerBlueprint }/>}
      {gameMode === 'Kill' && <KillMode />} */}
    </div>
  );
}

export default GamePage;
