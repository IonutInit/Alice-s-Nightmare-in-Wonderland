import { Dispatch } from "../../types";

function EndOfSample({ dispatch }: Dispatch) {
  return (
    <div>
      <h3>The adventure continues, but not here</h3>
      <p>
        You have reached the end if this sample. Press the below to start again
        if you want to want to experiment with a different route
      </p>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        START AGAIN
      </button>
    </div>
  );
}

export default EndOfSample;
