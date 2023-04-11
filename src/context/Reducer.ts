import { GameState, Action } from "../../types";
import gameData from "../data/gameData";

export default function reducer(state: GameState, action: Action) {
  switch (action.type) {
    case "activate_introduction":
      return { ...state, gameState: 1 };
    case "activate_attributes":
      return { ...state, gameState: 2 };
    case "activate_game":
      return { ...state, gameState: 3 };
    case "change_chapter":
      return {
        ...state,
        chapter: action.payload,
        log: [...state.log, `You are on chapter ${action.payload}`],
      };
    case "clear_options":
      return { ...state, options: [] };
    case "modify_attribute":
      return {
        ...state,
        alice: {
          ...state.alice,
          [action.payload.attribute]:
            state.alice[action.payload.attribute] + action.payload.amount,
        },
      };
    case "add_to_inventory":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case "update_log":
      return {
        ...state,
        log: [...state.log, action.payload],
      };
    case "get_enemy":
      return {
        ...state,
        enemy: action.payload,
      };
    case "reset":
      return gameData;
    default:
      return state;
  }
}
