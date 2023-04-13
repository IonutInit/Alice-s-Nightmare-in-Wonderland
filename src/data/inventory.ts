import { Event } from "../../types";

type InventoryTemplate = {
  [key: string]: {
    name: string;
    description: string;
    type: string;
    event?: Event;
    uses?: number;
    value?: number;
  };
};

const inventoryTemplate: InventoryTemplate = {
  scissors: {
    name: "Scissors",
    description:
      "If Alice ever finds herself in combat with one of the strange denizens that inhabit Wonderland she may use the Scissors as a weapon, causing 3 points of damage to her opponent’s Endurance score with every successful strike rather than the usual 2.",
    type: "combat",
    value: 1,
  },
  "marmalade jar": {
    name: "Marmalade Jar",
    description:
      "The marmalade jar contains enough for four portions. Alice may choose to eat a portion of the marmalade at any time, apart from when she is in the middle of combat, and will replenish up to 4 Endurance point points by doing so.",
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
