import { Dispatch } from "react";

import { v4 as uuidv4 } from "uuid";

import { Action, InventoryItem } from "../../types";

import inventoryTemplate from "../data/inventory";

function addToInventory(dispatch: Dispatch<Action>, inventory: string) {
  const id = uuidv4();
  dispatch({
    type: "add_to_inventory",
    payload: { id, ...inventoryTemplate[inventory] } as InventoryItem,
  });
}

function updateLog(dispatch: Dispatch<Action>, inventory: string) {
  dispatch({
    type: "update_log",
    payload: `Alice got ${inventory}!`,
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
