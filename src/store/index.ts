import { createStore, createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";

import {
  store as count,
  CountStore,
  State as CountState,
} from "@/store/modules/count";

export type RootState = {
  counts: CountState;
};

export type Store = CountStore<Pick<RootState, "counts">>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  plugins,
  modules: {
    count,
  },
});

export function useStore(): Store {
  return store as Store;
}
