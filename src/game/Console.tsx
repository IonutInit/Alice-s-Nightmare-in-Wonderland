import AttributeConsole from "../console/AttributeConsole";
import InventoryConsole from "../console/InventoryConsole";
import LogConsole from "../console/LogConsole";

function Console() {
  return (
    <div className="mx-auto bg-gray-200">
      <AttributeConsole />
      <div className="h-1 bg-slate-600" />

      <InventoryConsole />

      <LogConsole />
      <div className="h-1 bg-slate-600" />
    </div>
  );
}

export default Console;
