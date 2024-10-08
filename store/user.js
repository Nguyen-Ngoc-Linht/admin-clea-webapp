import { CONSTANTS } from "../utils/constant";
import { USERSAPI } from "@/api/users";
import { AUTHSAPI } from "@/api/auths";
import {getAccessToken, removeAccessToken, removeUserInfo, setAccessToken, setUserInfo} from "~/utils/cookieAuthen";

const UPDATE_USER = "UPDATE_USER";
const SAVE_TOKEN = "SAVE_TOKEN";
const CLEAR_TOKEN = "CLEAR_TOKEN";

const actions = {
  async apiUser({ commit, state }, user) {
    try {
      let { data } = await this.$axios.post(`${AUTHSAPI.LOGIN}`, {
        userName: user.username,
        password: user.password,
      });
      if (data.status === CONSTANTS.SUCCESS) {
        const user = {
          id: data.data.user._id,
          name: data.data.user.name,
          avatar: `${process.env.baseUrl}${data.data.user.avatarUrl}`,
          email: data.data.user.email,
          role: data.data.user.role,
        }
        setUserInfo(user);
        setAccessToken(data.data.token);

        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000);

        localStorage.setItem("refreshToken", expirationTime.toISOString());
        return data.data;
      }
    } catch (e) {
      throw e;
    }
  },

  async getlistUser({ commit, state }) {
    try {
      const token = getAccessToken();
      let { data } = await this.$axios.get(`${USERSAPI.GETLISTUSER}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === CONSTANTS.SUCCESS) {
        const results = data.data;
        const listusers = results.map((item) => {
          const user = {
            avatarUrl: `${process.env.baseUrl}${item.avatarUrl}`,
            email: item.email,
            name: item.name,
            role: item.role,
            userName: item.userName,
            _id: item._id,
          };

          return user;
        });
        return listusers;
      } else {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async getUser({ commit, state }, userId) {
    try {
      const token = getAccessToken();
      let { data } = await this.$axios.get(`${USERSAPI.GETUSER}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async setrole({ commit, state }, { userId, role }) {
    try {
      console.log(userId, role);
      const token = getAccessToken();
      let { data } = await this.$axios.post(
        `${USERSAPI.SETROLE}/${userId}`,
        { role: role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async setAvatar({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.post(`${USERSAPI.SETAVATAR}`, payload);

      if (data.status === 200) {
        return data.user;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async signup({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.post(`${AUTHSAPI.SIGNUP}`, payload);

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getListTeacher({ commit, state}) {
    try {
      let {data} = await this.$axios.get(USERSAPI.GET_TEACHER);

      if(data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async logout({commit, state}) {
    try {
      removeAccessToken();
      removeUserInfo();

      return true;
    } catch (e) {
      console.log(e);
    }
  }
};

const state = () => ({
  listusers: [],
  user: [],
  token: "",
});

const getters = {
  users: (state) => {
    return state.user;
  },
  listusers: (state) => {
    return state.listusers;
  },
};

const mutations = {
  [UPDATE_USER]: (state, user) => {
    state.user = user;
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
