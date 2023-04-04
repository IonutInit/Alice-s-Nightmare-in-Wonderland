import { GameState, Action } from "../../types";

export default function reducer(state: GameState, action: Action) {
  switch (action.type) {
    case "activate_introduction":
      return { ...state, gameState: 1 };
    case "activate_attributes":
      return { ...state, gameState: 2 };
    case "activate_game":
      return { ...state, gameState: 3 };
    case "change_chapter":
      return { ...state, chapter: action.payload };
    case "modify_attribute":
      return {
        ...state,
        alice: {
          ...state.alice,
          [action.payload.attribute]:
            state.alice[action.payload.attribute] + action.payload.amount,
        },
      };
    default:
      return state;
  }
}
