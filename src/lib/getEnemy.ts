import { Dispatch } from "react";
import { Action, EnemyInContent } from "../../types";

// structure of enemy is: ["name", initiative, combat, endurance, ?numberOfEnemies]

function handleNumberOfEnemies(enemy: EnemyInContent) {
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

function getEnemy(enemy: EnemyInContent, dispatch: Dispatch<Action>) {
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
