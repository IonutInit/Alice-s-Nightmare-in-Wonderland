import { Dispatch } from "react";
import { Action } from "../../types";

// structure of enemy is: ["name", initiative, combat, endurance, ?numberOfEnemies]

type EnemyType = [string, number, number, number, number | undefined];

function handleNumberOfEnemies(enemy: EnemyType) {
  const mutipleEnemyEndurance = [];
  const enemies = Number(enemy[4]);
  if (enemies !== undefined) {
    for (let i = 0; i < enemies; i += 1) {
      mutipleEnemyEndurance.push(Number(enemy[3]));
    }
  } else {
    mutipleEnemyEndurance.push(Number(enemy[3]));
  }
  return mutipleEnemyEndurance;
}

function getEnemy(enemy: EnemyType, dispatch: Dispatch<Action>) {
  if (enemy !== undefined) {
    dispatch({
      type: "get_enemy",
      payload: {
        name: enemy[0].toString(),
        combat: Number(enemy[2]),
        endurance: handleNumberOfEnemies(enemy),
        initiative: Number(enemy[1]),
      },
    });
    dispatch({
      type: "toggle_combat_mode",
      payload: true,
    });
    dispatch({
      type: "update_log",
      payload: `The fight with the ${enemy[0].toString()} begins!`,
    });
  }
}

export default getEnemy;
