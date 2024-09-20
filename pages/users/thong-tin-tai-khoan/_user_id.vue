<template>
  <div class="container-fluid">
    <div class="card card-body mt-2 bg-gradient-info">
      <div class="d-flex">
        <NuxtLink to="/users" class="text-lg text-black">Quản lý tài khoản</NuxtLink>
        <span class="ms-2 me-xxl-2 text-lg text-black">/</span>
        <span class="text-lg text-primary text-bold" style="font-style: italic">{{ user.name }}</span>
      </div>
    </div>

    <div class="container py-3 mb-4">
      <div class="row">
        <div class="col-xl-5 col-lg-4 col-md-6">
          <div class="row w-100">
            <div class="card card-body">
              <div class="d-flex flex-column align-items-center">
                <img :src="avatarUrl"
                     alt=""
                     class="avatar-xxl avatar"
                     style="border-radius: 50%"
                >
                <h5 class="mt-2 text-bolder">{{ user.name }}</h5>
              </div>

              <div class="px-2 px-lg-3">
                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-single-02 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <div style="flex: 1">
                    <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Tên tài khoản: </span>
                    <span class="mb-0 ms-1 text-md-start text-bold">{{ user.userName }}</span>
                  </div>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-email-83 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <div style="flex: 1">
                    <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Email: </span>
                    <span class="mb-0 ms-1 text-md-start text-bold">{{ user.email }}</span>
                  </div>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-headphones text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Số điện thoại: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.phone }}</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-square-pin text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Địa chỉ: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.address }}</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-hat-3 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Học vấn: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.studyAt }}</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-time-alarm text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Ngày tạo: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">12/08/2024</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row w-100 mt-3">
            <div class="card">
              <div class="card-header pb-2">
                <h5 class="text-info text-gradient">Danh sách khóa học đăng ký</h5>
              </div>
              <hr class="dark horizontal my-0"/>
              <div class="card-body pt-2">
                <div v-for="course of courseUser"
                     class="mt-2 d-flex w-100 py-3 px-1 bg-gradient-secondary shadow border-radius-md d-flex align-items-center cursor-pointer">
                  <div class="ms-2">
                    <img :src="course.urlImage" alt="" class="avatar avatar-lg">
                  </div>
                  <div class="ms-2 d-flex flex-column justify-content-center" style="flex: 1">
                    <span class="text-bolder text-primary text-gradient">{{ course.name }}</span>
                    <label class="ms-0 mb-0 cursor-pointer">Tham gia: {{ course.time_in }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-7 col-lg-8 col-md-6">
          <div class="row">
            <div class="card px-0">
              <div
                class="card-header d-flex w-100 py-3 bg-gradient-info shadow border-radius-md d-flex align-items-center">
                <span class="text-bold text-black text-lg">Thao tác hệ thống</span>
              </div>

              <div class="card-body px-4">
                <div class="row">
                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Bài đăng</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-single-copy-04 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">25 bài đăng</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Lịch sử truy cập</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-world-2 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">65 lượt truy cập</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Tài liệu đã lưu</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-collection text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">46 tài liệu</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="dark horizontal mt-3"/>
                <h5>Cài đặt tài khoản</h5>
                <div class="row">
                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-lock-circle-open text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Khóa tài khoản</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer"
                         data-bs-toggle="modal" data-bs-target="#modal-default"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-key-25 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Phân quyền</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-warning cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-bell-55 text-sm opacity-10 text-warning text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Gửi cảnh báo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="card card-body mt-3">
              <h5>Tần suất truy cập</h5>
              <div>
                <GradientLineChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Modal  -->
    <div ref="mdSetRole" class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
      <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="modal-title-default">Phân quyền cho tài khoản</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center">
              <img :src="avatarUrl" class="avatar avatar-lg"/>
            </div>
            <h4 class="text-center my-2">{{user.name}}</h4>
            <select v-model="user.role" class="form-control" name="choices-button" id="choices-button">
              <option value="USER">Người dùng</option>
              <option value="TEACHER">Giáo viên</option>
              <option value="Choice 3">Trợ giảng</option>
              <option value="ADMIN">Quản trị viên</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-gradient-dark" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn bg-gradient-info" @click="submitRole">Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GradientLineChart from "@/components/common/Chart/GradientLineChart.vue";
import {mapActions} from "vuex";
import {formatCourseUser} from "@/utils/formData";

export default {
  name: 'User',
  layout: "empty",
  components: {
    GradientLineChart,
  },
  data() {
    return {
      user_id: "",
      user: {},
      avatarUrl: "",
      courseUser: [],
      //
      role: "",
      userName: "",
    }
  },
  methods: {
    ...mapActions("user", {
      getUser: "getUser",
      setRole: "setrole",
    }),
    ...mapActions("courseuser", {
      getListCourseUser: "getListCourseUser"
    }),
    submitRole() {
      this.setRole({userId: this.user_id, role: this.user.role}).then((res) => {
        this.modalSetRole.hide();
      })
    },
  },
  created() {
    this.user_id = this.$route.params.user_id;
    if (this.user_id) {
      this.getUser(this.user_id).then((res) => {
        this.avatarUrl = `${process.env.baseUrl}${res.avatarUrl}`;
        this.user = res;
      })

      this.getListCourseUser(this.user_id).then((res) => {
        this.courseUser = formatCourseUser(res);
        // console.log(this.courseUser);
      })
    }
  },
  mounted() {
    this.modalSetRole = bootstrap.Modal.getOrCreateInstance(this.$refs.mdSetRole);
  }
}
</script>
