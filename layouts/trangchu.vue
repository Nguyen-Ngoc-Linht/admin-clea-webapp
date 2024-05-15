<template>
  <div class="w-100">
    <SideBar />
    <!-- body  -->
    <div class="main">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/common/sidebar/SideBar.vue";
import Navbar from "~/components/common/navbar/Navbar.vue";
export default {
  name: "IndexPage",
  components: {
    Navbar,
    SideBar,
  },
};
</script>
