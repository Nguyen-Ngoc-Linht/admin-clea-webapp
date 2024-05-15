<template>
  <div class="w-100">
    <SideBar class="fixed-start" />
    <!-- body  -->
    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
      style="overflow-x: hidden"
    >
      <nuxt />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/common/sidebar/SideBar.vue";
export default {
  name: "IndexPage",
  components: {
    SideBar,
  },
};
</script>
