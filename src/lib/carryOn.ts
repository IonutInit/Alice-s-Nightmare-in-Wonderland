import { Dispatch } from "react";

import { Action } from "../../types";

export function carryOnTextDisplay(
  testAttribute: string,
  newChapter: number,
  testTaken: { isTaken: boolean; outcome: boolean }
) {
  let result = "";
  if (testAttribute !== "die") {
    result = `The test resolved ${
      !testTaken.outcome ? "un" : ""
    }favourably. Carry on to ${newChapter}`;
  }
  if (testAttribute === "die") {
    result = `The number was ${
      testTaken.outcome ? "odd" : "even"
    }. Go this way!`;
  }
  return result;
}

export function carryOn(dispatch: Dispatch<Action>, newChapter: number) {
  dispatch({
    type: "change_chapter",
    payload: newChapter,
  });
}
