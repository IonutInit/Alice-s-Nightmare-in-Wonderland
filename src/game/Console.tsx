import AttributeConsole from "../console/AttributeConsole";
import InventoryConsole from "../console/InventoryConsole";
import LogConsole from "../console/LogConsole";
import Divider from "../components/Divider";

import { Props } from "../../types";

function Console({ state, dispatch }: Props) {
  return (
    <div className="fixed w-[55%] bg-gray-200 z-1">
      <AttributeConsole state={state} />
      <Divider />

      <InventoryConsole state={state} dispatch={dispatch} />
      {state.inventory.length !== 0 && <Divider />}

      <LogConsole state={state} />
      <Divider />
    </div>
  );
}

export default Console;
