import { State } from "../../types";

function InventoryConsole({ state }: State) {
  const { inventory } = state;

  return (
    <>
      <p>Inventory</p>
      {inventory.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <button type="button" key={index}>
            {item.item}
          </button>
        );
      })}
    </>
  );
}

export default InventoryConsole;
