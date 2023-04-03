export const ACTIONS = {
    ACTIVATE_INTRODUCTION: "activate_introduction",
    ACTIVATE_ATTRIBUTES: "activate_attributes",
    ACTIVATE_GAME: "activate_game",
    CHANGE_CHAPTER: "change_chapter",
    INCREASE_ATTRIBUTE: "increase_attribute",
}

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ACTIVATE_INTRODUCTION:
      return {...state, gameState: 1}
    case ACTIONS.ACTIVATE_ATTRIBUTES:
      return {...state, gameState: 2}
    case ACTIONS.ACTIVATE_GAME:
      return {...state, gameState: 3}
    case ACTIONS.CHANGE_CHAPTER:
        return {...state, chapter: action.payload}
    case ACTIONS.INCREASE_ATTRIBUTE:
        return {
            ...state,
            alice: {
                ...state.alice,
                [action.payload.attribute]: state.alice[action.payload.attribute] + action.payload.amount
            }
        }
    default:
      return state
  }
}