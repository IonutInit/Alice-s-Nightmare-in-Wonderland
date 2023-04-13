// import { useContext } from "react";
// import { GameContext } from "../context/GameContext";

import { Dispatch } from "../../types";

function Welcome({ dispatch }: Dispatch) {
  // const { dispatch } = useContext(GameContext);

  return (
    <div>
      Hello Welcome
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "activate_introduction" });
        }}
      >
        NEXT
      </button>
    </div>
  );
}

export default Welcome;
