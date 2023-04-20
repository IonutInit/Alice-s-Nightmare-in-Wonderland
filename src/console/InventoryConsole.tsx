import handleInventoryUses from "../lib/handleInventoryUses";

import { Props } from "../../types";

function InventoryConsole({ state, dispatch }: Props) {
  const { inventory, combatMode } = state;

  const itemDisplay = (name: string, uses?: number) => {
    let useCount = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    uses !== undefined ? (useCount = `x${uses}`) : (useCount = "");
    return `${name} ${useCount}`;
  };

  return (
    <div className="py-3">
      <div className="flex gap-5">
        {inventory.map((item) => {
          if (item.uses! > 0 || item.uses === undefined) {
            return (
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded text-xs font-medium"
                type="button"
                disabled={
                  item.uses === undefined ||
                  (item.uses !== undefined && combatMode)
                }
                key={item.id}
                onClick={() =>
                  handleInventoryUses(
                    item.uses!,
                    item.id,
                    item.event!,
                    dispatch
                  )
                }
              >
                {itemDisplay(item.name, item.uses)}
              </button>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default InventoryConsole;
