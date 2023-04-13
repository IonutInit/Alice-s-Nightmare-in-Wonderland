import AttributeConsole from "../console/AttributeConsole";
import InventoryConsole from "../console/InventoryConsole";
import LogConsole from "../console/LogConsole";

import { Props } from "../../types";

function Console({ state, dispatch }: Props) {
  return (
    <div>
      <AttributeConsole state={state} />
      <p>------------------------------</p>
      <InventoryConsole state={state} dispatch={dispatch} />
      <p>------------------------------</p>
      <LogConsole state={state} />
      <p>------------------------------</p>
    </div>
  );
}

export default Console;
