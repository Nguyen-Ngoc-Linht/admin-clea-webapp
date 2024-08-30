const state = () => ({
    countLoadingApi: 0
});

const getters = {
    glbCountLoadingApi: state => state.countLoadingApi
};

const mutations = {
    UPDATE_COUNT_LOADING_API(state, countLoadingApi) {
        state.countLoadingApi = countLoadingApi;
    }
};
const actions = {
    commitGlbCountLoadingApi({commit}, payload) {
        try {
            commit('UPDATE_COUNT_LOADING_API', payload);
        } catch (error) {
            console.log(error);
        }
    }
};

export default {
    // namespaced: true,
    state,
    getters,
    mutations,
    actions
};

