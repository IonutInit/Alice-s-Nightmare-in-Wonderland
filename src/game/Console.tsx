import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import AttributeConsole from "../console/AttributeConsole";
import InventoryConsole from "../console/InventoryConsole";
import LogConsole from "../console/LogConsole";

function Console() {
  const { state, dispatch } = useContext(GameContext);

  return (
    <div className="mx-auto bg-gray-200">
      <AttributeConsole state={state} />
      <div className="h-1 bg-slate-600" />

      <InventoryConsole state={state} dispatch={dispatch} />

      <LogConsole state={state} />
      <div className="h-1 bg-slate-600" />
    </div>
  );
}

export default Console;
