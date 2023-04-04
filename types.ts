export type Alice = {
  [key: string]: number;
  agility: number;
  logic: number;
  insanity: number;
  combat: number;
  endurance: number;
};

export type GameState = {
  gameState: number;
  chapter: number;
  alice: Alice;
};

export type Action =
  | { type: "activate_introduction" }
  | { type: "activate_attributes" }
  | { type: "activate_game" }
  | { type: "change_chapter"; payload: number }
  | {
      type: "modify_attribute";
      payload: { attribute: string; amount: number };
    };

export type Dispatch = {
  dispatch: (action: Action) => void;
};

export type Props = {
  state: GameState;
  dispatch: (action: Action) => void;
};

export type Content = {
  [key: string]: {
    title?: string;
    content: string;
    options: (string | number)[][];
    test?: string;
    event?: { name: string; change: number }[];
  };
};
