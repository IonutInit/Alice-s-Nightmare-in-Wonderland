import { Dispatch } from "react";

import { Action } from "../../types";

export function handleWin(
  name: string,
  endurance: number[],
  dispatch: Dispatch<Action>
) {
  if (!endurance.length) {
    dispatch({
      type: "toggle_combat_mode",
      payload: false,
    });
    dispatch({
      type: "update_log",
      payload: `Alice won her fight against the ${name}.`,
    });
  }
}

export function handleLoss(endurance: number, dispatch: Dispatch<Action>) {
  if (endurance <= 0) {
    dispatch({
      type: "activate_game_lost",
    });
  }
}
