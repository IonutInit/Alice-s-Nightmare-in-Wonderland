import { Dispatch } from "react";
import { Action } from "../../types";

function addToInventory(
  dispatch: Dispatch<Action>,
  inventory: string,
  quantity: number,
  uses: number
) {
  dispatch({
    type: "add_to_inventory",
    payload: {
      item: inventory,
      quantity,
      uses,
    },
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
    addToInventory(dispatch, inventory, 1, 1);
    updateLog(dispatch, inventory);
  }
}
