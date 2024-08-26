import { CONSTANTS } from "../utils/constant";
import { LESSONAPI } from "@/api/lesson";
import { formatLessons } from "@/utils/formData";

const actions = {
  async getlesson({ commit, state }, course_id) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.get(
        `${LESSONAPI.GETLESSON}/${course_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        // console.log(data.data);
        const dataformat = formatLessons(data.data);
        return dataformat;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getlessonitem({ commit, state }, lesson_id) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.get(
        `${LESSONAPI.GETITEMLESSON}/${lesson_id}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async createLesson({ commit, state }, { body, course_id }) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.post(
        `${LESSONAPI.CREATELESSON}/${course_id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async deleteLesson({ commit, state }, lesson_id) {
    try {
      console.log("id Bai gaing", lesson_id);
      let { data } = await this.$axios.delete(
        `${LESSONAPI.DELETELESSON}/${lesson_id}`
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const state = () => ({
  lessons: [],
});

const getters = {
  lessons: (state) => {
    return state.lessons;
  },
};

const mutations = {};

export default {
  actions,
  state,
  getters,
  mutations,
};
