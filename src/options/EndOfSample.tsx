import OptionsButton from "../components/OptionsButton";

import { Dispatch } from "../../types";

function EndOfSample({ dispatch }: Dispatch) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[1px] w-full bg-slate-800 mb-3" />
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
