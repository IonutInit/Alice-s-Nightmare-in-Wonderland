// import { useContext } from "react";
// import { GameContext } from "../context/GameContext";

import { Dispatch } from "../../types";

function Introduction({ dispatch }: Dispatch) {
  // const { dispatch } = useContext(GameContext);
  return (
    <div>
      Hello Introduction
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "activate_attributes" });
        }}
      >
        NEXT
      </button>
    </div>
  );
}

export default Introduction;
