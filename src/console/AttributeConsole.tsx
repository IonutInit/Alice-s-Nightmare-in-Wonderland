import { capitalize, describeSpecialAbility } from "../lib/textFunctions";

import { State } from "../../types";

function AttributeConsole({ state }: State) {
  const attributes = Object.entries(state.alice).map(([key, value]) => [
    capitalize(key),
    value,
  ]);

  return (
    <>
      {attributes.map(([key, value]) => {
        return (
          <p key={key}>
            {describeSpecialAbility(key.toString())}: {value}
          </p>
        );
      })}
    </>
  );
}

export default AttributeConsole;
