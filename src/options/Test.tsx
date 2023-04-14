import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";

import importedContent from "../data/content.json";

import { spellArticle } from "../lib/textFunctions";
import handleTest from "../lib/handleTest";
import { carryOn, carryOnTextDisplay } from "../lib/carryOn";

import { Content, Attribute } from "../../types";

const content: Content = importedContent;

function Test() {
  const { state, dispatch } = useContext(GameContext);

  const [testTaken, setTestTaken] = useState({
    isTaken: false,
    outcome: false,
  });
  const [newChapter, setNewChapter] = useState(0);
  const { chapter } = state;
  const candidateChapters = content[chapter].options;
  const testAttribute: Attribute = content[chapter].test as Attribute;
  const testCase = state.alice[`${testAttribute}`];

  return (
    <div className="flex flex-col justify-center items-center">
      {!testTaken.isTaken && (
        <OptionsButton
          onClick={() =>
            handleTest(
              candidateChapters,
              setNewChapter,
              setTestTaken,
              testAttribute,
              testCase,
              dispatch
            )
          }
          color="bg-orange-800"
          hoverColor="bg-orange-900"
        >
          Take {spellArticle(testAttribute ?? "")} test
        </OptionsButton>
      )}

      {testTaken.isTaken && (
        <OptionsButton
          onClick={() => carryOn(dispatch, newChapter)}
          color={testTaken.outcome ? "bg-lime-700" : "bg-orange-800"}
          hoverColor={testTaken.outcome ? "bg-lime-800" : "bg-orange-900"}
        >
          {carryOnTextDisplay(testAttribute, newChapter, testTaken)}
        </OptionsButton>
      )}
    </div>
  );
}

export default Test;
