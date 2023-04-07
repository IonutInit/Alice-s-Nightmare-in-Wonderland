import { capitalize } from "../lib/textFunctions";

import { State } from "../../types";

function Console({ state }: State) {
  const attributes = Object.entries(state.alice).map(([key, value]) => [
    capitalize(key),
    value,
  ]);

  return (
    <div>
      <p>------------------------------</p>
      {attributes.map(([key, value]) => {
        return (
          <p key={key}>
            {key}: {value}
          </p>
        );
      })}
      <p>------------------------------</p>
      Inventory goes here
      <p>------------------------------</p>
      <div>
        Console:
        {state.log.map((log, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <p key={index}>{log}</p>;
        })}
      </div>
      <p>------------------------------</p>
    </div>
  );
}

export default Console;
