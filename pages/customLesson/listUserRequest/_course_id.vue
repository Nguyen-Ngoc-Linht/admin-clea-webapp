<template>
  <div class="w-100" style="min-height: 100vh">
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
            <span @click="backListMember"
                  style="font-style: italic"
                  class="text-weight-bolder text-dark mb-0 ms-2 me-2 cursor-pointer"
            >Danh sách thành viên</span>
            /
            <h5 class="mb-0 ms-2">Danh sách yêu cầu</h5>
          </div>
        </div>
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
                    Trạng thái
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Email
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Ngày gửi yêu cầu
                  </th>
                  <th
                    class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                  >
                    Thao tác
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user of usersRequest">
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
                    <button v-if="user.statusRequest === 'DONE'" class="btn btn-outline-success mb-0 py-2 px-3">Đã duyệt</button>
                    <button v-else class="btn btn-outline-danger mb-0 py-2 px-3">Chờ duyệt</button>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <p class="mb-0 font-weight-normal text-sm">
                      {{ user.email }}
                    </p>
                  </td>
                  <td class="align-middle text-center">
                    <p class="text-sm font-weight-normal mb-0">{{ user.time_request }}</p>
                  </td>
                  <td class="align-middle text-center">
                    <button @click="removeRequest(user.user_id, user.id)" class="btn bg-gradient-danger mb-0" style="text-transform: none">Hủy duyệt</button>
                    <button @click="acceptRequest(user.user_id, user.id)" class="btn bg-gradient-primary mb-0" style="text-transform: none">Duyệt</button>
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
                              href="javascript:;"
                            >Xem trang cá nhân</span
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

    <notifications group="foo" />
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  layout: "empty",
  data() {
    return {
      course_id: "",
      course: {},
      usersRequest: [],
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("courseuser", {
      getListUserRequestCourse: "getListUserRequestCourse",
      setResponseRequestUserCourse: "setResponseRequestUserCourse",
    }),
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
    removeRequest(user_id, id) {
      const body = {
        request_id: id,
        user_id: user_id,
        course_id: this.course_id,
        statusRequest: "NOACCEPT"
      }
      console.log(body);
    },
    acceptRequest(user_id, id) {
      const body = {
        request_id: id,
        user_id: user_id,
        course_id: this.course_id,
        statusRequest: "DONE"
      };
      this.commonConfirm("Bạn chắc chắn muốn thêm tài khoản này vào khóa học!", () => {
        this.setResponseRequestUserCourse(body).then((res) => {
          const userIndex = this.usersRequest.findIndex(user => user.id === id);
          if (userIndex !== -1) {
            // Cập nhật statusRequest của user
            this.$set(this.usersRequest[userIndex], 'statusRequest', 'DONE');
          }

          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Thành công',
            text: 'Thêm tài khoản thành công!'
          });
        }).catch(() => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Thất bại',
            text: 'Thêm tài khoản thất bại!'
          });
        })
      }, () => {
        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'Đóng',
          text: 'Hủy bỏ thao tác!'
        });
      })
    },
    backListMember() {
      this.$router.push(`/customLesson/listmember/${this.course_id}`);
    }
  },
  created() {
    this.course_id = this.$route.params.course_id;

    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
      }
    });

    this.getListUserRequestCourse(this.course_id).then((res) => {
      console.log(res);
      this.usersRequest = res;
    })
  },
};
</script>
