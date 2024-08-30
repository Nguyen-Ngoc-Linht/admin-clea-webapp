import { CONSTANTS } from "../utils/constant";
import {POSTAPI} from "~/api/postapi";

const GET_LIST_POSTS = "GET_LIST_POSTS";

const actions = {
  async getListPosts({commit, state}) {
    try {
      let { data } = await this.$axios.get(`${POSTAPI.GETPOST}`);

      if(data.status === CONSTANTS.SUCCESS) {
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  }
};

const state = () => ({
  posts: [],
});

const getters = {
  posts: (state) => {
    return state.posts;
  },
};

const mutations = {
  [GET_LIST_POSTS] (state, posts) {
    state.posts = posts;
  }
};

export default {
  actions,
  state,
  getters,
  mutations,
};
