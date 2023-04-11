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

import { rollDie, sumDie } from "../lib/rollDie";

const content: Content = importedContent;

function Game({ dispatch, state }: Props) {
  const chapter = content[state.chapter];

  // if (content[state.chapter].combat !== undefined) {
  //   const [enemyName, enemyEndurance, enemyCombat] =
  //     content[state.chapter].combat;
  //   const enemy = new Enemy(enemyName, enemyCombat, enemyEndurance, 0);
  //   console.log(enemy)
  // }

  useEffect(() => {
    handleEvent(chapter.event, dispatch);
    handleInventory(chapter.inventory!, dispatch); // did not used undefined in types, as I did with event, as it creates a whole series of problems
    getEnemy(chapter.combat!, dispatch);
  }, [chapter, dispatch, state.chapter]);

  // const fight = () => {
  //   const aliceRoll = rollDie(2);
  //   const enemyRoll = rollDie(2);

  //   const aliceCombatRating = sumDie(aliceRoll);
  // };

  // fight();

  const caseForEndOfSample = chapter.sample_end;
  const caseForTest = chapter.test;
  const caseForCombat = chapter.combat;

  return (
    <div>
      <Console state={state} />

      <ChapterContent state={state} />

      {!caseForTest && <SimpleOption state={state} dispatch={dispatch} />}

      {caseForTest && <Test state={state} dispatch={dispatch} />}

      {caseForEndOfSample && <EndOfSample dispatch={dispatch} />}

      {caseForCombat && <Combat state={state} />}
    </div>
  );
}

export default Game;
