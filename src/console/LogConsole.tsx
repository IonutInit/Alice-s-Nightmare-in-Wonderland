import { State } from "../../types";

function LogConsole({ state }: State) {
  return (
    <>
      <p>Log:</p>
      {state.log.map((log, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <p key={index}>{log}</p>;
      })}
    </>
  );
}

export default LogConsole;
