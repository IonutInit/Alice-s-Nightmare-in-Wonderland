// import { useContext } from "react";
// import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

import { Dispatch } from "../../types";

function Introduction({ dispatch }: Dispatch) {
  // const { dispatch } = useContext(GameContext);
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
