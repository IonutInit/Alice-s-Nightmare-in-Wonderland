import useGameContext from "../context/useGameContext";

import Accordion from "./Accordion";

import inventoryTemplate from "../data/inventory";

function CurrentInventory() {
  const { state } = useGameContext();
  const uniqueItems = new Set();

  if (!state.inventory.length) {
    return null;
  }

  return (
    <div className="border border-gray-400 mt-5 p-5">
      <br />
      <h3 className="text-3xl pb-1">Inventory</h3>

      {state.inventory.map((item) => {
        if (uniqueItems.has(item.name)) {
          return null;
        }

        uniqueItems.add(item.name);

        return (
          <div key={item.id}>
            <Accordion
              quote={item.name}
              content={
                inventoryTemplate[`${item.name.toLowerCase()}`].description
              }
              title=""
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default CurrentInventory;
