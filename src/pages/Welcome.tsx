import { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";
import { GameContext } from "../context/GameContext";

import cover from "../assets/cover.jpg";
// import { welcome, welcome_disclaimer } from "../data/extraContent.json";

import OptionsButton from "../components/OptionsButton";

function Welcome() {
  const { dispatch } = useContext(GameContext);

  return (
    <div>
      <div className=" flex flex-col items-center pb-5">
        <h1 className="text-4xl pb-5">ALICE&apos;S NIGHTMARE IN WONDERLAND</h1>
        <img src={cover} alt="book cover" />
        {/* <p className="p-5 text-sm italic">{welcome_disclaimer}</p> */}
      </div>

      {/* <div>{parse(welcome)}</div> */}

      <div className="flex-container pt-5">
        <OptionsButton
          onClick={() => {
            dispatch({
              type: "activate_introduction",
            });
          }}
        >
          NEXT
        </OptionsButton>
      </div>
    </div>
  );
}

export default Welcome;
