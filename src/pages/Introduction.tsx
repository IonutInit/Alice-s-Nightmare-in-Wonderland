import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

function Introduction() {
  const { dispatch } = useContext(GameContext);
  return (
    <div>
      Hello Introduction
      <div className="flex-container">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_attributes",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Introduction;
