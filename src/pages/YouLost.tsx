import { Dispatch } from "../../types";

function YouLost({ dispatch }: Dispatch) {
  return (
    <div>
      <h2>Game Over</h2>
      <h3>Alice has lost her strength.</h3>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        START AGIAIN
      </button>
    </div>
  );
}

export default YouLost;
