import { Dispatch } from "react";
import { Action } from "../../types";

import inventoryTemplate from "../data/inventory";

function addToInventory(dispatch: Dispatch<Action>, inventory: string) {
  dispatch({
    type: "add_to_inventory",
    payload: inventoryTemplate[inventory],
  });
}

function updateLog(dispatch: Dispatch<Action>, inventory: string) {
  dispatch({
    type: "update_log",
    payload: `You got ${inventory}!`,
  });
}

export default function handleInventory(
  inventory: string,
  dispatch: Dispatch<Action>
) {
  if (inventory !== undefined) {
    addToInventory(dispatch, inventory);
    updateLog(dispatch, inventory);
  }
}
