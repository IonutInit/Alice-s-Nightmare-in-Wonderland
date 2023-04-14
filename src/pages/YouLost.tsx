import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

function YouLost() {
  const { dispatch } = useContext(GameContext);

  return (
    <div className="flex-container">
      <p className="text-4xl pb-4">Game Over</p>
      <p className="text-xl">Alice suddlenly woke up!</p>
      <OptionsButton
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        START AGAIN
      </OptionsButton>
    </div>
  );
}

export default YouLost;
