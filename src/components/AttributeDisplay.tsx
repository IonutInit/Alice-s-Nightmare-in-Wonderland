import { useState } from "react";
import useGameContext from "../context/useGameContext";

import { describeSpecialAbility, capitalize } from "../lib/textFunctions";

import Agility from "../assets/agility.svg";
import Combat from "../assets/combat.svg";
import Curioser from "../assets/curioser.svg";
import Endurance from "../assets/endurance.svg";
import Insanity from "../assets/insanity.svg";
import Logic from "../assets/logic.svg";
import ThePen from "../assets/thePen.svg";

const attributeImage: Record<string, string> = {
  Agility,
  Combat,
  Curioser,
  Endurance,
  Insanity,
  Logic,
  ThePen,
};

type AttributeDisplayProps = {
  showIcons: boolean;
  showStats: boolean;
  showTooltip: boolean;
};

function AttributeDisplay({
  showIcons,
  showStats,
  showTooltip,
}: AttributeDisplayProps) {
  const { state } = useGameContext();

  const attributes = Object.entries(state.alice).map(([key, value]) => [
    capitalize(key),
    value,
  ]);
  const [tooltipKey, setTooltipKey] = useState<string | null>(null);

  return (
    <>
      {attributes.map(([key, value]) => {
        return (
          <div
            className="flex gap-2 relative"
            key={key}
            onMouseEnter={() => setTooltipKey(key.toString())}
            onMouseLeave={() => setTooltipKey(null)}
          >
            {showIcons && (
              <img
                src={attributeImage[key]}
                style={{ height: "30px" }}
                alt="attribute icon"
              />
            )}
            {showStats && (
              <p
                className="w-1/3 text-2xl font-medium text-slate-700"
                key={key}
              >
                {value}
                {/* {describeSpecialAbility(key.toString())}: {value} */}
              </p>
            )}
            {tooltipKey === key && showTooltip && (
              <div className="absolute bg-slate-600 text-gray-100 px-2 py-1 rounded translate-y-[40px]">
                {describeSpecialAbility(key)}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default AttributeDisplay;
