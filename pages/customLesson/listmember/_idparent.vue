<template>
  <div class="w-100 listmember">
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
              class="text-weight-bolder mb-0 ms-2 me-2 cursor-pointer"
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

    <div class="container-fuild px-3">
      <div class="row my-4">
        <div class="col-12">
          <div class="card box-shadow">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
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
                      Đánh giá
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
                      Id
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            John Michael
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">Manager</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        john@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">23/04/18</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">43431</p>
                    </td>
                    <td class="align-middle text-center">
                      <div class="dropstart float-lg-center ms-auto">
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
                              >Chỉnh sửa</span
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Đóng khóa học</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Khác ...</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-3.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            Alexa Liras
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">Programator</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        alexa@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">11/01/19</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">93021</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-4.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            Laurent Perrier
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">Executive</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-dark"></i>
                        <span class="text-dark text-xs">neutral</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        laurent@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">19/09/17</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">10392</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-3.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            Michael Levi
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">
                        Backend developer
                      </p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        michael@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">24/12/08</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">34002</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            Richard Gran
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">Manager</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-danger"></i>
                        <span class="text-dark text-xs">negative</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        richard@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">04/10/21</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">91879</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../../../assets/img/team-4.jpg"
                            class="avatar avatar-sm me-3"
                            alt="avatar image"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 font-weight-normal text-sm">
                            Miriam Eric
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-normal mb-0">Programtor</p>
                    </td>
                    <td>
                      <span class="badge badge-dot me-4">
                        <i class="bg-info"></i>
                        <span class="text-dark text-xs">positive</span>
                      </span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <p class="mb-0 font-weight-normal text-sm">
                        miriam@user.com
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">14/09/20</p>
                    </td>
                    <td class="align-middle text-center">
                      <p class="text-sm font-weight-normal mb-0">23042</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "empty",
  data() {
    return {
      course_id: "",
      course: {},
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
  },
  created() {
    this.course_id = this.$route.params.idparent;

    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
      }
    });
  },
};
</script>

<style scoped lang="scss"></style>
