import { Props } from "../../types";

function InventoryConsole({ state, dispatch }: Props) {
  const { inventory } = state;

  const itemDisplay = (name: string, uses?: number) => {
    let useCount = "";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    uses !== undefined ? (useCount = `x${uses}`) : (useCount = "");
    return `${name} ${useCount}`;
  };

  const handleItemUses = (uses: number, name: string, event) => {
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
      {inventory.map((item, index) => {
        return (
          <button
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() =>
              handleItemUses(item.item.uses!, item.item.name, item.item.event)
            }
          >
            {itemDisplay(item.item.name, item.item.uses)}
          </button>
        );
      })}
    </>
  );
}

export default InventoryConsole;
