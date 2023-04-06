import { rollDie, sumDie } from "./rollDie";

import { Attribute } from "../../types";

function resolveTest(attribute: Attribute, testCase: number) {
  let result: [boolean, number[]] | [] = [];
  let diceNeeded = 0;

  if (attribute === "die") {
    diceNeeded = 1;
  } else if (attribute === "endurance") {
    diceNeeded = 4;
  } else {
    diceNeeded = 2;
  }

  const [...dice] = rollDie(diceNeeded);
  const sum = sumDie(dice);

  if (attribute === "die") {
    result = [dice[0] % 2 === 0, dice];
  } else if (attribute === "endurance") {
    result = [sum <= testCase, [...dice]];
  } else {
    result = [sum >= testCase, [...dice]];
  }

  return result;
}

export default resolveTest;
