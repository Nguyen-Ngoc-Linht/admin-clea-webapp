<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl z-index-sticky">
    <div class="py-1 px-3 container-fluid">
      <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
        <!--   Input     -->
        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          <div class="input-group">
            <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
            <input type="text" class="form-control" placeholder="Type here..." onfocus="focused(this)"
                   onfocusout="defocused(this)">
          </div>
        </div>
        <ul class="navbar-nav  justify-content-end">
<!--          <li v-if="!isLogin" class="nav-item d-flex align-items-center">-->
<!--            <NuxtLink to="/auths/signin" class="nav-link text-secondary cursor-pointer font-weight-bold px-0">-->
<!--              <span class="d-sm-inline d-none">Đăng nhập</span>-->
<!--            </NuxtLink>-->
<!--          </li>-->
          <li class="nav-item d-flex align-items-center">
            <img :src="user.avatar" alt="Avatar" class="avatar avatar-sm" style="border-radius: 50%">
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a href="#" class="p-0 nav-link text-body" id="iconNavbarSidenav" @click="toggleSidebar">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {getUserInfo} from "@/utils/cookieAuthen";

export default {
  computed: {
    ...mapState("items", ["showSidebar"]),
    // ...mapState("auths", ["isLogin"]),
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    ...mapActions("items", {
      setShowSidebar: "setShowSidebar",
    }),
    toggleSidebar() {
      // console.log(this.showSidebar);
      this.setShowSidebar(!this.showSidebar).then((res) => {
        return true;
      })
    }
  },
  created() {
    const user = getUserInfo();
    if(user) {
      this.user = JSON.parse(user);
    }
  }
}
</script>
