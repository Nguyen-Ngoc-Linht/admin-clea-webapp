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
            ></div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Trang chủ</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/users" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý tài khoản</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/courses" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý khóa học</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/posts" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Quản lý bài đăng</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/blogs" exact-active-class="active">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
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

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Trang chủ</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Trang chủ</span
            >
          </NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink class="nav-link" to="/auths/signin">
            <div
              class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center"
              :class="false ? ' ms-2' : 'me-2'"
            >
              <Shop />
            </div>
            <span class="nav-link-text" :class="false ? ' me-1' : 'ms-1'">
              Đăng xuất</span
            >
          </NuxtLink>
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
import Shop from "@/components/Icon/Shop.vue";

export default {
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidebarCard,
  },
};
</script>
