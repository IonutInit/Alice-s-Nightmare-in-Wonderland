import { useEffect, useState } from "react";

import fight from "../lib/fight";

import { Props } from "../../types";

function Combat({ state, dispatch }: Props) {
  const [gameLog, setGameLog] = useState<string[]>([]);
  const { name, combat, endurance, initiative } = state.enemy;

  const handleFight = () => {
    const [
      currentInitiative,
      aliceRoll,
      enemyRoll,
      aliceCombatRating,
      enemyCombatRating,
      gameResult,
    ] = fight(state.alice.combat, combat, name, initiative, dispatch);

    setGameLog(() => [
      `${currentInitiative}`,
      `Alice rolled a ${aliceRoll[0]} and a ${aliceRoll[1]}, a total attack of ${aliceCombatRating}.`,
      `${name} rolled a ${enemyRoll[0]} and a ${enemyRoll[1]}, a total attack of ${enemyCombatRating}. `,
      `${gameResult}`,
    ]);
  };

  useEffect(() => {
    const handleLoss = () => {
      if (state.alice.endurance <= 0) {
        dispatch({
          type: "activate_game_lost",
        });
      }
    };
    handleLoss();
  }, [dispatch, state.alice.endurance]);

  return (
    <div>
      <p>{name}</p>
      <p>Combat: {combat}</p>
      <p>Endurance: {endurance}</p>
      <button type="button" onClick={() => handleFight()}>
        FIGHT!
      </button>
      {gameLog.map((log, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <p key={index}>{log}</p>;
      })}
    </div>
  );
}

export default Combat;
