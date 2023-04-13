export type Alice = {
  [key: string]: number;
  agility: number;
  logic: number;
  insanity: number;
  combat: number;
  endurance: number;
  curioser: number;
  thePen: number;
};

type Log = string[];

export type Enemy = {
  [key: number]: number;
  name: string;
  combat: number;
  endurance: number;
  initiative: number;
};

type InventoryItem = {
  name: string;
  type: string;
  event?: Event;
  uses?: number;
};

export type Inventory = InventoryItem[];

export type GameState = {
  gameState: number;
  chapter: number;
  alice: Alice;
  inventory: Inventory;
  log: Log;
  combatMode: boolean;
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
      payload: {
        name: string;
        type: string;
        event?: Event;
        uses?: number;
      };
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
      type: "toogle_combat_mode";
      payload: boolean;
    }
  | {
      type: "take_hit";
      payload: number;
    }
  | {
      type: "use_item";
      payload: string;
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
