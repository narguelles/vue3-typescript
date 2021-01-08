import { MutationTree } from "vuex";

// import { UserDocuments, Count } from "@/@types";

import { State } from "./state";
import { CountMutationTypes } from "../types/mutation-types";

export type Mutations<S = State> = {
  [CountMutationTypes.INCREMENT_COUNTER](state: S, payload: number): void;
  [CountMutationTypes.SET_DATA](
    state: S,
    payload: Record<string, unknown>
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [CountMutationTypes.INCREMENT_COUNTER](state, payload: number) {
    state.count = payload;
  },
  [CountMutationTypes.SET_DATA](state, payload: Record<string, unknown>) {
    state.data = payload;
  },
};
