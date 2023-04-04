import { Dispatch } from "../../types";

function Introduction({ dispatch }: Dispatch) {
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
