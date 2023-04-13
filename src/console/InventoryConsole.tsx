import { Props } from "../../types";

function InventoryConsole({ state, dispatch }: Props) {
  const { inventory, combatMode } = state;

  const itemDisplay = (name: string, uses?: number) => {
    let useCount = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    uses !== undefined ? (useCount = `x${uses}`) : (useCount = "");
    return `${name} ${useCount}`;
  };

  const handleItemUses = (
    uses: number,
    name: string,
    event: { name: string; change: number }[]
  ) => {
    if (uses !== undefined) {
      dispatch({
        type: "modify_attribute",
        payload: { attribute: event[0].name, amount: event[0].change },
      });
    }
    dispatch({
      type: "use_item",
      payload: name,
    });
  };

  return (
    <>
      <p>Inventory</p>
      {inventory.map((item) => {
        if (item.uses! > 0 || item.uses === undefined) {
          return (
            <button
              type="button"
              disabled={
                item.uses === undefined ||
                (item.uses !== undefined && combatMode)
              }
              key={item.id}
              onClick={() => handleItemUses(item.uses!, item.id, item.event!)}
            >
              {itemDisplay(item.name, item.uses)}
            </button>
          );
        }
        return null;
      })}
    </>
  );
}

export default InventoryConsole;
