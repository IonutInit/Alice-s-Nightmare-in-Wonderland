import { Dispatch } from "react";

import { rollDie, sumDie } from "./rollDie";

import { Action } from "../../types";

type FightResult = [
  currentInitiative: string,
  aliceRoll: number[],
  enemyRoll: number[],
  aliceCombatRating: number,
  enemyCombatRating: number,
  gameResult: string
];

function fight(
  aliceCombatStats: number,
  enemyCombatStats: number,
  enemyName: string,
  startingInitiative: number,
  dispatch: Dispatch<Action>
): FightResult {
  let currentInitiative = "";
  let aliceInitative = 0;
  let enemyInitiative = 0;
  let payload = 0;
  let gameResult = "";

  if (startingInitiative === 0) {
    aliceInitative = 1;
  } else {
    enemyInitiative = 1;
  }

  const aliceRoll = rollDie(2);
  const enemyRoll = rollDie(2);

  const aliceCombatRating =
    sumDie(aliceRoll) + aliceCombatStats + aliceInitative;
  const enemyCombatRating =
    sumDie(enemyRoll) + enemyCombatStats + enemyInitiative;

  if (aliceCombatRating > enemyCombatRating) {
    payload = 1;
    aliceInitative = 1;
    enemyInitiative = 0;
    gameResult = "Alice won this round!";
  }

  if (aliceCombatRating === enemyCombatRating) {
    const die = rollDie(1);

    if (die[0] % 2 !== 0) {
      payload = 0;
      gameResult = `It's a tie. Both Alice and the ${enemyName} have been injured!`;
      dispatch({
        type: "update_log",
        payload: `Alice has lost 1 endurance point against ${enemyName}.`,
      });
    } else {
      gameResult = `It's a tie: Alice and ${enemyName} deflect each other's attack.`;
    }
  }

  if (aliceCombatRating < enemyCombatRating) {
    payload = -1;
    aliceInitative = 0;
    enemyInitiative = 1;
    gameResult = "Alice lost this round...";
    dispatch({
      type: "update_log",
      payload: `Alice has lost 2 endurance points in fighting the ${enemyName}.`,
    });
  }

  dispatch({
    type: "take_hit",
    payload,
  });

  currentInitiative = `${
    aliceInitative === 1 ? "Alice" : "The opponent"
  } has the initiative.`;

  return [
    currentInitiative,
    aliceRoll,
    enemyRoll,
    aliceCombatRating,
    enemyCombatRating,
    gameResult,
  ];
}

export default fight;
