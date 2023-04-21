import { AliceInState } from "../../types";

function disableSpecialAbilityButton(
  option: (string | number)[],
  currentState: AliceInState
) {
  const checkForAbility = option[2];
  if (!checkForAbility) {
    return false;
  }
  return currentState[checkForAbility] <= 0;
}

export default disableSpecialAbilityButton;
