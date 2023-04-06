import { useState } from "react";

import importedContent from "../data/content.json";

import { spellArticle } from "../lib/textFunctions";
import { rollDie, rollResults, sumDie } from "../lib/rollDie";

import { Props, Content } from "../../types";

const content: Content = importedContent;

function Test({ state, dispatch }: Props) {
  const [testTaken, setTestTaken] = useState({
    isTaken: false,
    outcome: false,
  });
  const [newChapter, setNewChapter] = useState(0);
  const { chapter } = state;
  const candidateChapters = content[chapter].options;
  const testAttribute = content[chapter].test;
  const testCase = state.alice[`${testAttribute}`];

  function resolveTest(attribute: string) {
    let result: [boolean, number[]] | [] = [];
    if (attribute === "agility") {
      const [...dice] = rollDie(2);
      const sum = sumDie(dice);
      result = [sum <= testCase, [...dice]];
    }
    return result;
  }

  const handleTest = () => {
    const [outcome, dice] = resolveTest(testAttribute ?? "");
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
      payload: `${rollResults(dice ?? [])} ${
        outcome ? " That's good" : "Could have been better"
      }.`,
    });
  };

  const carryOn = () => {
    dispatch({
      type: "change_chapter",
      payload: newChapter,
    });
  };

  return (
    <div>
      {!testTaken.isTaken && (
        <button type="button" onClick={() => handleTest()}>
          Take {spellArticle(testAttribute ?? "")} test
        </button>
      )}

      {testTaken.isTaken && (
        <button type="button" onClick={carryOn}>
          {`The test resolved ${
            !testTaken.outcome ? "un" : ""
          }favourably. Carry on to ${newChapter}`}
        </button>
      )}
    </div>
  );
}

export default Test;
