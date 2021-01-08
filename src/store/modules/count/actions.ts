import { ActionTree, ActionContext } from "vuex";

import { RootState } from "@/store";

import { State } from "./state";
import { Mutations } from "./mutations";
import { CountMutationTypes } from "../types/mutation-types";
import { CountActionTypes } from "../types/action-types";

import { CountApi } from "@/common/api.service";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  // [DocumentsActionTypes.FETCH_DOCUMENTS](
  //   { commit }: AugmentedActionContext,
  //   someId: string // Obsolete in here but left as an example
  // ): Promise<boolean>;
  [CountActionTypes.ADD_COUNTER](
    { commit }: AugmentedActionContext,
    someId: number // Obsolete in here but left as an example
  ): void;

  [CountActionTypes.FETCH_API](
    { commit }: AugmentedActionContext,
    payload: null
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [CountActionTypes.ADD_COUNTER]({ commit }, someId: number) {
    commit(CountMutationTypes.INCREMENT_COUNTER, someId);
  },
  [CountActionTypes.FETCH_API]({ commit }) {
    CountApi.get().then(({ data }): void => {
      commit(CountMutationTypes.SET_DATA, data);
    });
  },
};
