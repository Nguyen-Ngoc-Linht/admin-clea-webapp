<template>
  <div class="">
    <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i class="text-sm opacity-10 ni ni-shop text-secondary" aria-hidden="true"></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Trang chủ</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN'" class="nav-item">
          <NuxtLink class="nav-link" to="/users" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-circle-08 text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý tài khoản</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN' || userRole === 'TEACHER'" class="nav-item">
          <NuxtLink class="nav-link" to="/courses" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-bag-17 text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý khóa học</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN'" class="nav-item">
          <NuxtLink class="nav-link" to="/bai-dang" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-single-copy-04 text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý bài đăng</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN'" class="nav-item">
          <NuxtLink class="nav-link" to="/bai-bao" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-paper-diploma text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý bài báo</span
            >
          </NuxtLink>
        </li>

        <li class="mt-3 nav-item">
          <h6
            class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
            :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
          >
            Khác
          </h6>
        </li>

        <li v-if="userRole === 'TEACHER'" class="nav-item">
          <NuxtLink class="nav-link" to="/giao-vien" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-single-02 text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Giáo viên</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN'" class="nav-item">
          <NuxtLink class="nav-link" to="/tro-giang" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-badge text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Trợ giảng</span
            >
          </NuxtLink>
        </li>

        <li v-if="userRole === 'ADMIN'" class="nav-item">
          <NuxtLink class="nav-link" to="/cai-dat" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-settings-gear-65 text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Cài đặt</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <div class="nav-link" @click="logoutAccount()">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <i
                class="ni ni-button-power text-sm opacity-10 text-secondary"
                aria-hidden="true"
              ></i>
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Đăng xuất</span
            >
          </div>
        </li>
      </ul>
    </div>

    <!-- Sidebar footer -->
    <div class="pt-3 mx-3 mt-3 sidenav-footer">
      <SidebarCard
        :class="cardBg"
        textPrimary="Bạn cần giúp đỡ?"
        textSecondary="Vui lòng xem hướng dẫn"
        route="https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/"
        label="Tài liệu chi tiết"
        icon="ni ni-diamond"
      />
      <a
        class="btn bg-gradient-success mt-4 w-100"
        href="https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro?ref=vsud"
        type="button"
        >Upgrade to pro</a
      >
    </div>
  </div>
</template>

<script>
import SidebarCard from "@/components/common/sidebar/SidebarCard.vue";
import {mapActions} from "vuex";
import {getUserInfo} from "@/utils/cookieAuthen";

export default {
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      userRole: "",
    };
  },
  components: {
    SidebarCard,
  },
  methods: {
    ...mapActions("user", {
      logout: "logout"
    }),
    logoutAccount() {
      this.logout().then((res) => {
        this.$router.push("/auths/signin");
      }).catch(e => {
        console.log(e);
      })
    }
  },
  created() {
    const user = JSON.parse(getUserInfo());
    this.userRole = user.role;
  }
};
</script>

<style scoped lang="scss">
.navbar-nav {

  .nav-item {

    .nav-link {

      &.active {
        //box-shadow: 4px 2px 10px rgba(0,0,0,0.12);

        i {
          color: white !important;
        }

        .nav-link-text {
          color: #82d616;
        }
      }
    }
  }
}
</style>
