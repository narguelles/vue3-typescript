export interface CounterStateTypes {
  count: number;
  data: Record<string, any>;
}

export const state: CounterStateTypes = {
  count: 0,
  data: {},
};

export type State = typeof state;
