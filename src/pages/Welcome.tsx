import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

function Welcome() {
  const { dispatch } = useContext(GameContext);

  return (
    <div>
      <p>Hello Welcome</p>
      <div className="flex-container">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_introduction",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Welcome;
