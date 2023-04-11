export type Alice = {
  [key: string]: number;
  agility: number;
  logic: number;
  insanity: number;
  combat: number;
  endurance: number;
};

type Inventory = {
  item: string;
  quantity: number;
  uses: number;
}[];

type Log = string[];

export type Enemy = {
  [key: number]: number;
  name: string;
  combat: number;
  endurance: number;
  initiative: number;
};

export type GameState = {
  gameState: number;
  chapter: number;
  alice: Alice;
  inventory: Inventory;
  log: Log;
  enemy: Enemy;
};

export type Action =
  | { type: "activate_introduction" }
  | { type: "activate_attributes" }
  | { type: "activate_game" }
  | { type: "activate_game_lost" }
  | { type: "change_chapter"; payload: number }
  | { type: "clear_options" }
  | {
      type: "modify_attribute";
      payload: { attribute: string; amount: number };
    }
  | { type: "update_log"; payload: string }
  | {
      type: "add_to_inventory";
      payload: { item: string; quantity: number; uses: number };
    }
  | {
      type: "get_enemy";
      payload: {
        name: string;
        combat: number;
        endurance: number;
        initiative: number;
      };
    }
  | {
      type: "take_hit";
      payload: number;
    }
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

export type Event = { name: string; change: number }[] | undefined;
export type Combat = (string | number)[];

export type Content = {
  [key: string]: {
    title?: string;
    content: string;
    options: (string | number)[][];
    test?: string;
    event?: Event;
    inventory?: string;
    sample_end?: boolean;
    combat?: Combat;
  };
};

export type Attribute =
  | "agility"
  | "logic"
  | "insanity"
  | "combat"
  | "endurance"
  | "die";
