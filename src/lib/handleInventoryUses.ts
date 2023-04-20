import { Dispatch } from "react";

import { Action } from "../../types";

const handleInventoryUses = (
  uses: number,
  name: string,
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
    payload: name,
  });
  dispatch({
    type: "update_log",
    payload: `item has been used`,
  });
};

export default handleInventoryUses;
