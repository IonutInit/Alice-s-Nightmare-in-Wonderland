import AttributeConsole from "../console/AttributeConsole";
import InventoryConsole from "../console/InventoryConsole";
import LogConsole from "../console/LogConsole";

import { State } from "../../types";

function Console({ state }: State) {
  return (
    <div>
      <AttributeConsole state={state} />
      <p>------------------------------</p>
      <InventoryConsole state={state} />
      <p>------------------------------</p>
      <LogConsole state={state} />
      <p>------------------------------</p>
    </div>
  );
}

export default Console;
