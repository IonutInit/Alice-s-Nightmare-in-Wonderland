import useGameContext from "../context/useGameContext";

import OptionsButton from "../components/OptionsButton";

function EndOfSample() {
  const { dispatch } = useGameContext();

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl pb-3">The adventure continues, but not here</p>
      <p className="pb-3">
        You have reached the end if this sample. Press the below to start again
        if you want to want to experiment with a different route
      </p>
      <OptionsButton
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        START AGAIN
      </OptionsButton>
    </div>
  );
}

export default EndOfSample;
