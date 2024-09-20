import {COURSEUSERAPI} from "@/api/courseuserapi";
import {getAccessToken} from "@/utils/cookieAuthen";
import {CONSTANTS} from "@/utils/constant";
import {formatDate} from "@/utils/formData";
const GET_LIST_COURSE_USER = "GET_LIST_COURSE_USER";

const actions = {
  async getListCourseUser({commit, state}, user_id) {
    try {
      const token = getAccessToken();
      let { data } = await this.$axios.get(`${COURSEUSERAPI.GET_COURSE_USER}/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if(data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.error(e);
    }
  },

  async getListUserCourse({commit, state}, course_id) {
    try {
      const token = getAccessToken();
      let {data} = await this.$axios.get(`${COURSEUSERAPI.GET_LIST_USER_COURSE}/${course_id}`);

      if(data.status === CONSTANTS.SUCCESS) {
        const users = data.data.map((item) => ({
          id: item._id,
          time_in: formatDate(item.time_in),
          course_name: item.name, // Lấy tên khóa học từ biến course
          avatarUrl: `${process.env.baseUrl}${item.avatarUrl}`,
          name: item.name,
          address: item.address,
          email: item.email,
          user_id: item.user_id,
          studyAt: item.studyAt,
          age: item.age,
          phone: item.phone,
        }))

        return users;
      }
    } catch (e) {
      console.error(e);
    }
  },

  async getListUserRequestCourse({commit, state}, course_id) {
    try {
      let {data} = await this.$axios.get(`${COURSEUSERAPI.GET_LIST_USER_REQUEST_COURSE}/${course_id}`);

      if(data.status === CONSTANTS.SUCCESS) {
        const users = data.data.map((item) => ({
          id: item.id,
          avatarUrl: `${process.env.baseUrl}${item.user.avatarUrl}`,
          name: item.user.name,
          address: item.user.address,
          email: item.user.email,
          user_id: item.user._id,
          studyAt: item.user.studyAt,
          age: item.user.age,
          phone: item.user.phone,
          time_request: formatDate(item.timeRequest),
          statusRequest: item.statusRequest,
        }))

        return users;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async setResponseRequestUserCourse({commit, state}, body) {
    try {
      let { data } = await this.$axios.post(COURSEUSERAPI.ADD_USER_JOIN_COURSE, body);

      if(data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const state = () => ({
});

const getters = {

};

const mutations = {
  [GET_LIST_COURSE_USER] (state, posts) {
  }
};

export default {
  actions,
  state,
  getters,
  mutations,
};
