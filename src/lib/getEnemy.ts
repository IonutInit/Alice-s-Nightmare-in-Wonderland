import { Dispatch } from "react";
import { Action, Combat } from "../../types";

function getEnemy(enemy: Combat, dispatch: Dispatch<Action>) {
  if (enemy !== undefined) {
    dispatch({
      type: "get_enemy",
      payload: {
        name: enemy[0].toString(),
        combat: Number(enemy[1]),
        endurance: Number(enemy[2]),
        initiative: 0,
      },
    });
  }
}

export default getEnemy;
