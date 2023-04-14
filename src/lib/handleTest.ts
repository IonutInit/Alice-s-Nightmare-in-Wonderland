import { SetStateAction, Dispatch } from "react";

import resolveTest from "./resolveTest";
import { rollResults } from "./rollDie";

import { Action, Attribute, StringNumberArray } from "../../types";

type HandleTest = (
  candidateChapters: StringNumberArray[],
  setNewChapter: (value: SetStateAction<number>) => void,
  setTestTaken: (
    value: SetStateAction<{ isTaken: boolean; outcome: boolean }>
  ) => void,
  testAttribute: Attribute,
  testCase: number,
  dispatch: Dispatch<Action>
) => void;

const handleTest: HandleTest = (
  candidateChapters,
  setNewChapter,
  setTestTaken,
  testAttribute,
  testCase,
  dispatch
) => {
  const [outcome, dice] = resolveTest(testAttribute ?? "", testCase);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  outcome
    ? setNewChapter(Number(candidateChapters[0]))
    : setNewChapter(Number(candidateChapters[1]));
  setTestTaken({
    isTaken: true,
    outcome: outcome !== undefined ? outcome : false,
  });
  dispatch({
    type: "update_log",
    payload: `${rollResults(dice ?? [])} 
      ${
        testAttribute !== "die"
          ? `${outcome ? "That's good" : "Could have been better"}.`
          : ""
      }`,
  });
};

export default handleTest;
