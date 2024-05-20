<template>
  <div
    class="w-100 default-page"
    style="background-color: #f8f9fa; min-height: 100vh"
  >
    <SideBar class="fixed-start sidebar" />
    <!-- body  -->
    <main
      class="main-content position-relative max-height-vh-100 border-radius-lg"
      style="overflow-x: hidden"
    >
      <NavbarLayout />
      <nuxt />
    </main>
  </div>
</template>

<script>
import NavbarLayout from "@/components/common/navbar/NavbarLayout.vue";
import SideBar from "@/components/common/sidebar/SideBar.vue";
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    SideBar,
    NavbarLayout,
  },
};
</script>

<style scoped lang="scss">
.default-page {
  .main-content {
    max-height: 100vh;
    overflow-y: auto;
    background-color: #f5f5f5;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7df1f1;
      border-radius: 8px;
    }
  }
}

@media (max-width: 1199px) {
  .navbar-vertical {
    display: none;
  }
  .sidebar {
    display: none;
  }
}
</style>
