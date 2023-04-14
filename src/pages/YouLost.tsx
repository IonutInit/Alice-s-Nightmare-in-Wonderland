import { Dispatch } from "../../types";

import OptionsButton from "../components/OptionsButton";

function YouLost({ dispatch }: Dispatch) {
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
