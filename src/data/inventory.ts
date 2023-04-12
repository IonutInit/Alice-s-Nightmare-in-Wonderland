import { Event } from "../../types";

type InventoryTemplate = {
  [key: string]: {
    name: string;
    type: string;
    event?: Event;
    uses?: number;
  };
};

const inventoryTemplate: InventoryTemplate = {
  scissors: {
    name: "scissors",
    type: "combat",
  },
  "Marmalade Jar": {
    name: "Marmalade Jar",
    type: "endurance",
    event: [
      {
        name: "endurance",
        change: 2,
      },
    ],
    uses: 4,
  },
};

export default inventoryTemplate;
