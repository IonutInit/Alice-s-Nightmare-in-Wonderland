import useGameContext from "../context/useGameContext";

import OptionsButton from "../components/OptionsButton";

function YouLost() {
  const { dispatch } = useGameContext();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl pb-4">Game Over</h1>

      <p className="text-xl mb-4">Alice suddlenly woke up!</p>

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
