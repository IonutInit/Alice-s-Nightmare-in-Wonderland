import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

import fight from "../lib/fight";
import { handleWin, handleLoss } from "../lib/handleFightOutcome";

import OptionsButton from "../components/OptionsButton";

function Combat() {
  const { state, dispatch } = useContext(GameContext);

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
    ] = fight(
      state.alice.combat,
      state.inventory,
      combat,
      name,
      initiative,
      dispatch
    );

    setGameLog(() => [
      `${currentInitiative}`,
      `Alice rolled a ${aliceRoll[0]} and a ${aliceRoll[1]}, a total attack of ${aliceCombatRating}.`,
      `${name} rolled a ${enemyRoll[0]} and a ${enemyRoll[1]}, a total attack of ${enemyCombatRating}. `,
      `${gameResult}`,
    ]);
  };

  useEffect(() => {
    handleWin(state.enemy.name, state.enemy.endurance, dispatch);
    handleLoss(state.alice.endurance, dispatch);
  }, [
    dispatch,
    state.alice.endurance,
    state.enemy.endurance,
    state.enemy.name,
  ]);

  const attributeStyle = "bg-slate-600";

  return (
    <div>
      <div className="flex gap-4 justify-center items-center py-2 border-t-2 border-b-2 border-gray-300 mb-6">
        <p>{name}</p>
        <p>
          Combat:{"  "}
          <span
            className={`inline-flex w-[25px] h-[25px] rounded-full ${attributeStyle} text-white items-center justify-center`}
          >
            {combat}
          </span>
        </p>
        <p>
          Endurance:{"  "}
          <span
            className={`inline-flex w-[25px] h-[25px] rounded-full ${attributeStyle} text-white items-center justify-center`}
          >
            {endurance}
          </span>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <OptionsButton
          onClick={handleFight}
          color="bg-amber-600"
          hoverColor="bg-amber-700"
        >
          FIGHT!
        </OptionsButton>
      </div>

      {gameLog.length !== 0 && (
        <div className="flex flex-col justify-center items-center py-2 border-2 border-b-gray-400 border-t-gray-300 mb-6 text-sm mt-5">
          {gameLog.map((log, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <p key={index}>{log}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default Combat;
