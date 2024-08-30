<template>
  <div
    class="w-100 default-page g-sidenav-show"
    id="appLayout"
    style="background-color: #f8f9fa; min-height: 100vh"
  >
    <SideBar class="fixed-start sidebar" v-if="showSidebar"/>
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
import {mapActions, mapState} from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    SideBar,
    NavbarLayout,
  },
  computed: {
    ...mapState("items", ["showSidebar"]),
  },
  methods: {
    ...mapActions("items", {
      setShowSidebar: "setShowSidebar",
    }),
    handleResize() {
      if (window.innerWidth < 1024) {
        this.setShowSidebar(false);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
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
