import { GetterTree } from "vuex";

import { RootState } from "@/store";

import { State, CounterStateTypes } from "./state";

export type Getters = {
  getCount(state: CounterStateTypes): number;
  getData(state: CounterStateTypes): Record<string, any>;
};

export const getters: GetterTree<State, RootState> & Getters = {
  getCount: (state) => state.count,
  getData: (state) => state.data,
};
