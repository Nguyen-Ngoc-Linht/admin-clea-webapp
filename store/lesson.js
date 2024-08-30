import { CONSTANTS } from "../utils/constant";
import { LESSONAPI } from "@/api/lesson";
import {formatLessons, formatLessonstoChapters} from "@/utils/formData";
import {getAccessToken} from "~/utils/cookieAuthen";

const actions = {
  async getlesson({ commit, state }, course_id) {
    try {
      const token = getAccessToken();
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
        commit("SET_LESSONS", dataformat);
        const chapters = formatLessonstoChapters(dataformat);
        commit("SET_CHAPTERS", chapters);
        return dataformat;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getlessonitem({ commit, state }, lesson_id) {
    try {
      const token = getAccessToken();
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
      const token = getAccessToken();
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
        commit("DELETE_LESSON", lesson_id);
        const chapters = formatLessonstoChapters(state.lessons);
        commit("SET_CHAPTERS", chapters);
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const state = () => ({
  lessons: [],
  chapters: [],
});

const getters = {
  lessons: (state) => {
    return state.lessons;
  },
  chapters: (state) => {
    return state.chapters;
  }
};

const mutations = {
  SET_CHAPTERS(state, chapters) {
    state.chapters = chapters;
  },
  SET_LESSONS(state, lessons) {
    state.lessons = lessons;
  },
  DELETE_LESSON(state, lesson_id) {
    const lessonIndex = state.lessons.findIndex(lesson => lesson.id === lesson_id);
    if (lessonIndex !== -1) {
      state.lessons.splice(lessonIndex, 1);
    } else {
      console.error(`Lesson with id ${idLesson} not found.`);
    }
  }
};

export default {
  actions,
  state,
  getters,
  mutations,
};
