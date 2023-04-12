import { Dispatch } from "react";
import { Action, Combat } from "../../types";

// structure of enemy is: ["name", initiative, combat, endurance]

function getEnemy(enemy: Combat, dispatch: Dispatch<Action>) {
  if (enemy !== undefined) {
    dispatch({
      type: "get_enemy",
      payload: {
        name: enemy[0].toString(),
        combat: Number(enemy[2]),
        endurance: Number(enemy[3]),
        initiative: Number(enemy[1]),
      },
    });
    dispatch({
      type: "update_log",
      payload: `The fight with the ${enemy[0].toString()} begins!`,
    });
  }
}

export default getEnemy;
