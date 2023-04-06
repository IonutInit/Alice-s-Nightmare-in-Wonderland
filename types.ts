export type Alice = {
  [key: string]: number;
  agility: number;
  logic: number;
  insanity: number;
  combat: number;
  endurance: number;
};

type Inventory = [string, number][];

type Log = string[];

export type GameState = {
  gameState: number;
  chapter: number;
  alice: Alice;
  inventory: Inventory;
  log: Log;
};

export type Action =
  | { type: "activate_introduction" }
  | { type: "activate_attributes" }
  | { type: "activate_game" }
  | { type: "change_chapter"; payload: number }
  | { type: "clear_options" }
  | {
      type: "modify_attribute";
      payload: { attribute: string; amount: number };
    }
  | { type: "update_log"; payload: string }
  | { type: "reset" };

export type Dispatch = {
  dispatch: (action: Action) => void;
};

export type State = {
  state: GameState;
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
    sample_end?: boolean;
  };
};

export type Attribute =
  | "agility"
  | "logic"
  | "insanity"
  | "combat"
  | "endurance"
  | "die";
