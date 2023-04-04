import { Dispatch } from "../../types";

function Welcome({ dispatch }: Dispatch) {
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
