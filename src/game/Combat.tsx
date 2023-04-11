import { State } from "../../types";

function Combat({ state }: State) {
  const { name, combat, endurance } = state.enemy;
  return (
    <div>
      <p>{name}</p>
      <p>Combat: {combat}</p>
      <p>Endurance: {endurance}</p>
    </div>
  );
}

export default Combat;
