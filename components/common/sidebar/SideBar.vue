<template>
  <aside
    class="my-1 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img
          src="~/assets/img/logo-ct.png"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span class="ms-1 font-weight-bold">CMS Admin Clea-Web-App</span>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <SidenavList />
  </aside>
</template>

<script>
import SidenavList from "~/components/common/sidebar/SidenavList.vue";
export default {
  components: {
    SidenavList,
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
#sidenav-main {
  max-height: 100vh;
  overflow-y: auto;
  background-color: #f5f5f5;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }
}
</style>
