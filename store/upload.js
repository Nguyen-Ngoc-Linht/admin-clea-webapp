import { CONSTANTS } from "../utils/constant";
import { UPLOAD } from "@/api/upload";

const actions = {
  async uploadImage({ commit, state }, file) {
    try {
      var formData = new FormData();
      formData.append("image", file);

      let { data } = await this.$axios.post(`${UPLOAD.UPLOADIMAGE}`, formData);

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

const state = () => ({});

const getters = {};

const mutations = {};

export default {
  actions,
  state,
  getters,
  mutations,
};
