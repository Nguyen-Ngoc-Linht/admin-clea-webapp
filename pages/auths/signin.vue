<template>
  <div class="i">
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar
            is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
            btn-background="bg-gradient-success"
            :dark-mode="true"
          />
        </div>
      </div>
    </div>

    <!-- Body -->
    <main class="mt-0 main-content main-content-bg">
      <section>
        <div class="page-header min-vh-90">
          <div class="container">
            <div class="row">
              <div
                class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column"
              >
                <div class="mt-8 card card-plain">
                  <div class="pb-0 card-header text-start">
                    <h3 class="font-weight-bolder text-success text-gradient">
                      Chào mừng đến với CMS Clea-Web-App
                    </h3>
                    <p class="mb-0">
                      Hãy nhập tên tài khoản và mật khẩu của bạn để tiếp tục.
                    </p>
                  </div>
                  <div class="card-body">
                    <!-- Form Input -->
                    <form
                      role="form"
                      class="text-start"
                      @submit.prevent="submitData"
                    >
                      <label>Tài khoản</label>
                      <div class="">
                        <!-- <span
                          v-if="iconDir === 'left'"
                          class="input-group-text"
                        >
                          <i :class="getIcon(icon)"></i>
                        </span> -->
                        <input
                          v-model="username"
                          id="email"
                          type="text"
                          class="form-control"
                          name="email"
                          placeholder="User1"
                          isRequired="false"
                        />
                      </div>
                      <label>Mật khẩu</label>
                      <div class="">
                        <input
                          v-model="password"
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          placeholder="******"
                          autocomplete
                        />
                      </div>
                      <WebSwitch
                        class="mt-2"
                        id="rememberMe"
                        name="rememberMe"
                        checked
                      >
                        Nhớ tài khoản
                      </WebSwitch>
                      <div class="text-center">
                        <button
                          class="btn mb-0 my-4 mb-2 bg-gradient-success w-100"
                          type="submit"
                        >
                          Đăng nhập
                          <slot />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Bạn chưa có tài khoản ?
                      <NuxtLink
                        to="/auths/signup"
                        class="text-success text-gradient font-weight-bold"
                        >Đăng ký</NuxtLink
                      >
                    </p>
                  </div>
                </div>
              </div>

              <!-- Ảnh nền -->
              <div class="col-md-6">
                <div
                  class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
                >
                  <div
                    class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                    :style="{
                      backgroundImage:
                        'url(' +
                        require('@/assets/img/curved-images/curved9.jpg') +
                        ')',
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WebSwitch from "@/components/feature/WebSwitch.vue";
import Navbar from "~/components/common/navbar/Navbar.vue";
export default {
  name: "IndexPage",
  layout: "empty",
  components: {
    Navbar,
    WebSwitch,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", {
      apiUser: "apiUser",
    }),

    submitData(event) {
      event.preventDefault();
      console.log("Data", this.username, this.password);
      let data = {
        username: this.username,
        password: this.password,
      };
      this.apiUser(data)
        .then((res) => {
          if (res.user._id != null) {
            if (res.user.role === "ADMIN" || res.user.role === "TEACHER") {
              this.$router.push("/");
            } else {
            }
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
