<template>
  <div class="container">
    <!--  Header  -->
    <div class="row">
      <div class="card card-body">
        <div class="d-flex align-items-center">
          <NuxtLink to="/giao-vien" class="mb-0">Giáo viên</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from "@/utils/cookieAuthen";

export default {
  layout: "empty",
  data() {
    return {
      user: {}
    }
  },
  methods: {},
  created() {
    this.user = JSON.parse(getUserInfo());
  },
}
</script>
