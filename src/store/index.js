import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as maps from "../api/Maps"
import * as question from "../api/Question"
import * as bid from "../api/Bid"
import * as auth from "../api/Auth"
import * as product from "../api/Product"

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store(
    {
      state,
      modules: {
        maps,
        bid,
        auth,
        product,
        question
      },
      getters: {
        leftDrawerOpen(state) {
          return state.leftDrawerOpen
        }
      },
      mutations: {
        SWITCH_DRAWER(state) {
          state.leftDrawerOpen = !state.leftDrawerOpen
        }
      },
      actions: {
        leftDrawerSwitch({commit}) {
          commit('SWITCH_DRAWER')
        }
      },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  },);
  
  return Store;
}
