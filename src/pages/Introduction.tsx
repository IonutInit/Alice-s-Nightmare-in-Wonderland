import { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";
import { GameContext } from "../context/GameContext";

import OptionsButton from "../components/OptionsButton";
import Accordion from "../components/Accordion";

import {
  intro_0,
  intro_1,
  intro_2,
  intro_3,
  intro_4,
  intro_5,
  intro_6,
  intro_7,
  intro_8,
} from "../data/extraContent.json";

function Introduction() {
  const { dispatch } = useContext(GameContext);
  return (
    <div>
      <h1 className="text-4xl text-center py-5">Welcome to Wonderland</h1>

      <div className="pb-5">{parse(intro_0)}</div>

      <Accordion title={`"We're All Mad Here!"`} content={parse(intro_1)} />

      <Accordion title={`"Do You Play Croquet?"`} content={parse(intro_2)} />

      <Accordion title={`"It's Always Tea-Time"`} content={parse(intro_3)} />

      <Accordion title={`"Curioser and Curioser"`} content={parse(intro_4)} />

      <Accordion title={`"Off with Her Head!"`} content={parse(intro_5)} />

      <Accordion
        title={`"Shoes, and Ships, and Sealing Wax"`}
        content={parse(intro_6)}
      />

      <Accordion title={`"Begin at the Begining"`} content={parse(intro_7)} />

      <Accordion
        title={`"Go On Till You Come To The End. Then Stop"`}
        content={parse(intro_8)}
      />

      <div className="flex-container">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_attributes",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Introduction;
