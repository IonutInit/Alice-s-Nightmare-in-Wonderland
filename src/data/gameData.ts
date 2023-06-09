import { GameState } from "../../types";

const gameData: GameState = {
  gameState: 0,
  chapter: 0,
  alice: {
    agility: 6,
    logic: 6,
    insanity: 0,
    combat: 6,
    endurance: 20,
    curioser: 4,
    thePen: 4,
  },
  inventory: [],
  log: [],
  combatMode: false,
  enemy: {
    name: "",
    combat: 0,
    endurance: [],
    initiative: 0,
  },
};

export default gameData;
