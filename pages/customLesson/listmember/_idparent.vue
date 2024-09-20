<template>
  <div class="w-100 listmember" style="min-height: 100vh">
    <div class="container">
      <!-- Header Nav -->
      <div class="row">
        <div class="col-12">
          <div
            class="top-1 navbar navbar-expand-lg z-index-3 blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          >
            <NuxtLink
              to="/courses"
              style="text-decoration: none; font-style: italic"
              class="text-dark text-weight-bolder me-2"
            >Quản lý khóa học
            </NuxtLink>
            /
            <span
              class="text-weight-bolder text-dark mb-0 ms-2 me-2 cursor-pointer"
              @click="backCourse"
              style="text-decoration: none; font-style: italic"
            >{{ course.name }}</span
            >
            /
            <h5 class="ms-2 mb-0">Danh sách thành viên</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="d-flex justify-content-end align-items-center w-100 gap-4">
        <button class="btn bg-gradient-danger mb-0" @click="navigatorRequest" style="text-transform: none">Yêu cầu tham gia</button>
        <button class="btn bg-gradient-secondary mb-0" style="text-transform: none">Import tạo danh sách tài khoản
        </button>
        <button class="btn bg-gradient-success mb-0" style="text-transform: none">Import danh sách học viên</button>
        <button class="btn bg-gradient-info mb-0"
                data-bs-toggle="modal"
                data-bs-target="#addStudentModal"
                style="text-transform: none">Thêm học viên
        </button>
      </div>

      <div class="row my-4">
        <div class="col-12">
          <div class="card box-shadow">
            <div class="table-responsive">
              <table class="table align-items-center mb-0 overflow-hidden">
                <thead>
                <tr>
                  <th
                    class="text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Tên
                  </th>
                  <th
                    class="text-uppercase text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Chức danh
                  </th>
                  <th
                    class="text-uppercase text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Địa chỉ
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Email
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Ngày gia nhập
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Tuổi
                  </th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user of users">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          :src="user.avatarUrl"
                          class="avatar avatar-sm me-3"
                          alt="avatar image"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 font-weight-normal text-sm">
                          {{ user.name }}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-sm font-weight-normal mb-0">{{ user.studyAt }}</p>
                  </td>
                  <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">{{ user.address }}</span>
                      </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <p class="mb-0 font-weight-normal text-sm">
                      {{ user.email }}
                    </p>
                  </td>
                  <td class="align-middle text-center">
                    <p class="text-sm font-weight-normal mb-0">{{ user.time_in }}</p>
                  </td>
                  <td class="align-middle text-center">
                    <p class="text-sm font-weight-normal mb-0">{{ user.age }}</p>
                  </td>
                  <td class="align-middle text-center">
                    <div class="dropend float-lg-center ms-auto">
                      <a
                        href="javascript:;"
                        class="cursor-pointer"
                        id="dropdownTable2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons text-secondary text-sm">
                          ...
                        </i>
                      </a>
                      <ul
                        class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                        aria-labelledby="dropdownTable2"
                        style=""
                      >
                        <li>
                            <span
                              class="dropdown-item border-radius-md"
                              @click="infoUserCourse(user.user_id)"
                            >Thông tin hoạt động</span
                            >
                        </li>
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                          >Liên hệ</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                          >Chặn thao tác học viên</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    -->
    <notifications group="foo"/>
    <MdAddStudent />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import MdAddStudent from "@/components/course/MdAddStudent.vue";

export default {
  layout: "empty",
  components: {
    MdAddStudent
  },
  data() {
    return {
      course_id: "",
      course: {},
      users: [],
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("courseuser", {
      getListUserCourse: "getListUserCourse",
    }),
    navigatorRequest() {
      this.$router.push(`/customLesson/listUserRequest/${this.course_id}`);
    },
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
    infoUserCourse(user_id) {
      this.$router.push(`/course-user/${this.course_id}?user_id=${user_id}`);
    }
  },
  created() {
    this.course_id = this.$route.params.idparent;

    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
      }
    });

    this.getListUserCourse(this.course_id).then((res) => {
      console.log(res);
      this.users = res;
    })
  },
};
</script>

<style scoped lang="scss"></style>
