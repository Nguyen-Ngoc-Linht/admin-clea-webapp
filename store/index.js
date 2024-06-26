// store/index.js

export const state = () => ({
  hideConfigButton: false,
  isPinned: true,
  showConfig: false,
  isTransparent: "",
  isRTL: false,
  color: "",
  isNavFixed: false,
  isAbsolute: false,
  showNavs: true,
  showSidenav: true,
  showNavbar: true,
  showFooter: true,
  showMain: true,
  navbarFixed:
    "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
  absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
  bootstrap: null,
});

export const getters = {
  hideConfigButton: (state) => state.hideConfigButton,
  isPinned: (state) => state.isPinned,
  showConfig: (state) => state.showConfig,
  isTransparent: (state) => state.isTransparent,
  isRTL: (state) => state.isRTL,
  color: (state) => state.color,
  isNavFixed: (state) => state.isNavFixed,
  isAbsolute: (state) => state.isAbsolute,
  showNavs: (state) => state.showNavs,
  showSidenav: (state) => state.showSidenav,
  showNavbar: (state) => state.showNavbar,
  showFooter: (state) => state.showFooter,
  showMain: (state) => state.showMain,
  navbarFixed: (state) => state.navbarFixed,
  absolute: (state) => state.absolute,
  bootstrap: (state) => state.bootstrap,
};

export const mutations = {
  toggleConfigurator(state) {
    state.showConfig = !state.showConfig;
  },
  navbarMinimize(state) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    if (sidenav_show.classList.contains("g-sidenav-hidden")) {
      sidenav_show.classList.remove("g-sidenav-hidden");
      sidenav_show.classList.add("g-sidenav-pinned");
      state.isPinned = true;
    } else {
      sidenav_show.classList.add("g-sidenav-hidden");
      sidenav_show.classList.remove("g-sidenav-pinned");
      state.isPinned = false;
    }
  },
  sidebarType(state, payload) {
    state.isTransparent = payload;
  },
  cardBackground(state, payload) {
    state.color = payload;
  },
  toggleNavbarFixed(state) {
    state.isNavFixed = !state.isNavFixed;
  },
  toggleEveryDisplay(state) {
    state.showNavbar = !state.showNavbar;
    state.showSidenav = !state.showSidenav;
    state.showFooter = !state.showFooter;
  },
  toggleHideConfig(state) {
    state.hideConfigButton = !state.hideConfigButton;
  },
};

export const actions = {
  toggleSidebarColor({ commit }, payload) {
    commit("sidebarType", payload);
  },
  setCardBackground({ commit }, payload) {
    commit("cardBackground", payload);
  },
};
