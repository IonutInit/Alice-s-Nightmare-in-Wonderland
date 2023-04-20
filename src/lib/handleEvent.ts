import { Dispatch } from "react";
import { Event, Attribute, Action } from "../../types";

function modifyAttributes(
  dispatch: Dispatch<Action>,
  attribute: Attribute,
  amount: number
) {
  dispatch({
    type: "modify_attribute",
    payload: {
      attribute,
      amount,
    },
  });
}

function updateLog(
  dispatch: Dispatch<Action>,
  attribute: Attribute,
  amount: number
) {
  const whatHappened = amount > 0 && attribute !== "insanity" ? "won" : "lost";
  const pointsText = Math.abs(amount) !== 1 ? "points" : "point";
  const payload = `Alice has ${whatHappened} ${Math.abs(
    amount
  )} ${attribute} ${pointsText}.`;

  dispatch({
    type: "update_log",
    payload,
  });
}

function handleEvent(event: Event, dispatch: Dispatch<Action>) {
  if (event !== undefined) {
    for (let i = 0; i < event.length; i += 1) {
      const attribute = event[i].name;
      const amount = event[i].change;

      modifyAttributes(dispatch, attribute as Attribute, amount);

      updateLog(dispatch, attribute as Attribute, amount);
    }
  }
}

export default handleEvent;