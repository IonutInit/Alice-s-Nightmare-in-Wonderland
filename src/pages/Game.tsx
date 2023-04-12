import { useEffect } from "react";

import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";
import Test from "../options/Test";
import Combat from "../game/Combat";
import EndOfSample from "../options/EndOfSample";

import importedContent from "../data/content.json";

import handleEvent from "../lib/handleEvent";
import handleInventory from "../lib/handleInventory";
import getEnemy from "../lib/getEnemy";

import { Props, Content } from "../../types";

const content: Content = importedContent as Content;

function Game({ dispatch, state }: Props) {
  const chapter = content[state.chapter];

  useEffect(() => {
    handleEvent(chapter.event, dispatch);
    handleInventory(chapter.inventory!, dispatch); // did not used undefined in types, as I did with event, as it creates a whole series of problems
    getEnemy(chapter.combat!, dispatch);
  }, [chapter, dispatch, state.chapter]);

  const caseForEndOfSample = chapter.sample_end;
  const caseForTest = chapter.test;
  const caseForCombat = state.combatMode;

  return (
    <div>
      <Console state={state} />

      <ChapterContent state={state} />

      {!caseForTest && !caseForCombat && (
        <SimpleOption state={state} dispatch={dispatch} />
      )}

      {caseForTest && <Test state={state} dispatch={dispatch} />}

      {caseForEndOfSample && <EndOfSample dispatch={dispatch} />}

      {caseForCombat && <Combat state={state} dispatch={dispatch} />}
    </div>
  );
}

export default Game;
