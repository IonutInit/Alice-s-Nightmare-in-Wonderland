import { useEffect } from "react";
import useGameContext from "../context/useGameContext";

import Console from "../game/Console";
import ChapterContent from "../game/ChapterContent";
import SimpleOption from "../options/SimpleOption";
import Test from "../options/Test";
import Combat from "../game/Combat";
import EndOfSample from "../options/EndOfSample";
import Divider from "../components/Divider";

import importedContent from "../data/content.json";

import handleEvent from "../lib/handleEvent";
import handleInventory from "../lib/handleInventory";
import getEnemy from "../lib/getEnemy";

import { Content } from "../../types";

const content: Content = importedContent as Content;

function Game() {
  const { state, dispatch } = useGameContext();
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
    <div className="flex flex-col">
      <Console />

      <ChapterContent />

      <div>
        <Divider />
        <div className="py-3" />
        {!caseForTest && !caseForCombat && !caseForEndOfSample && (
          <SimpleOption />
        )}

        {caseForTest && !caseForEndOfSample && <Test />}

        {caseForEndOfSample && <EndOfSample />}

        {caseForCombat && <Combat />}
      </div>
    </div>
  );
}

export default Game;
