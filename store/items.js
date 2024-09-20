import { CONSTANTS } from "~/utils/constant";

const SET_PINNED = "SET_PINNED";

const actions = {
  async setShowSidebar({ commit, state }, payload) {
    try {
      let sidenav_show = document.querySelector("#appLayout");
      // console.log(sidenav_show);

      if (!sidenav_show) {
        console.error("Element with ID 'appLayout' not found.");
        return;
      }

      if (state.isPinned) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        commit(SET_PINNED, false);
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        commit(SET_PINNED, true);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  },

};

const state = () => ({
  showSidebar: true,
  isPinned: false,
});

const mutations = {
  [SET_PINNED](state, payload) {
    state.isPinned = payload;
  }
};

const getters = {
  showSidebar: (state) => {
    return state.showSidebar;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
