import { capitalize, describeSpecialAbility } from "../lib/textFunctions";

import { State } from "../../types";

function AttributeConsole({ state }: State) {
  const attributes = Object.entries(state.alice).map(([key, value]) => [
    capitalize(key),
    value,
  ]);

  return (
    <div className="flex flex-wrap justify-end pb-3">
      {attributes.map(([key, value]) => {
        return (
          <p className="w-1/3 text-sm" key={key}>
            {describeSpecialAbility(key.toString())}: {value}
          </p>
        );
      })}
    </div>
  );
}

export default AttributeConsole;
