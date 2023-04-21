import { Dispatch } from "react";

import { Action } from "../../types";

const handleInventoryUses = (
  name: string,
  uses: number,
  id: string,
  event: { name: string; change: number }[],
  dispatch: Dispatch<Action>
) => {
  if (uses !== undefined) {
    dispatch({
      type: "modify_attribute",
      payload: { attribute: event[0].name, amount: event[0].change },
    });
  }
  dispatch({
    type: "use_item",
    payload: id,
  });
  dispatch({
    type: "update_log",
    payload: `Alice used ${name.toLowerCase()}. She gained ${event[0].change} ${
      event[0].name
    } points.`,
  });
};

export default handleInventoryUses;
