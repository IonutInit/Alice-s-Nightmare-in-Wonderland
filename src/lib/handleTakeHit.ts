import { GameState } from "../../types";

function handleHit(state: GameState, payload: number, arrayPosition: number) {
  const hitValue = payload === 0 ? 1 : 2;
  let { enemy, alice } = state;

  if (payload === 1) {
    enemy = {
      ...state.enemy,
      endurance: state.enemy.endurance
        .map((endurance: number, index: number) =>
          index === arrayPosition ? endurance - hitValue : endurance
        )
        .filter((endurance: number, index: number) =>
          index === arrayPosition ? endurance > 0 : true
        ),
    };
  }
  if (payload === 0) {
    enemy = {
      ...state.enemy,
      endurance: state.enemy.endurance
        .map((endurance: number, index: number) =>
          index === arrayPosition ? endurance - hitValue : endurance
        )
        .filter((endurance: number, index: number) =>
          index === arrayPosition ? endurance > 0 : true
        ),
    };
    alice = {
      ...state.alice,
      endurance: state.alice.endurance - hitValue,
    };
  }
  if (payload === -1) {
    alice = {
      ...state.alice,
      endurance: state.alice.endurance - hitValue,
    };
  }

  return { ...state, enemy, alice };
}

export default handleHit;
