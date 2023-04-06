import { useState } from "react";

import importedContent from "../data/content.json";

import { spellArticle } from "../lib/textFunctions";
import { rollResults } from "../lib/rollDie";
import resolveTest from "../lib/resolveTest";

import { Props, Content, Attribute } from "../../types";

const content: Content = importedContent;

function Test({ state, dispatch }: Props) {
  const [testTaken, setTestTaken] = useState({
    isTaken: false,
    outcome: false,
  });
  const [newChapter, setNewChapter] = useState(0);
  const { chapter } = state;
  const candidateChapters = content[chapter].options;
  const testAttribute: Attribute = content[chapter].test as Attribute;
  const testCase = state.alice[`${testAttribute}`];

  const handleTest = () => {
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

  const carryOnTextDisplay = () => {
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
          {/* {`The test resolved ${
            !testTaken.outcome ? "un" : ""
          }favourably. Carry on to ${newChapter}`} */}
          {carryOnTextDisplay()}
        </button>
      )}
    </div>
  );
}

export default Test;
