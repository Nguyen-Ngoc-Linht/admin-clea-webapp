<template>
  <div class="w-100 bog-item-course">
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
            <h5 class="text-weight-bolder mb-0 ms-2">{{ course.name }}</h5>
          </div>
        </div>
      </div>

      <!-- Body -List action -->
      <div class="row mt-5 mb-3">
        <div class="col-lg-8 col-12">
          <!-- Hanfg 1 -->
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mb-2 mb-md-0">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 position-absolute"
                  >
                    <i class="material-icons opacity-10">paid</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Truy cập hôm nay</p>
                    <h5 class="mb-0">2,000</h5>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder"
                      >+55% </span
                    >hơn tuần trước
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mb-lg-3">
              <div class="card cursor-pointer" @click="ShowMember">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 position-absolute"
                  >
                    <i class="material-icons opacity-10">paid</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Thành viên</p>
                    <h5 class="mb-0">{{ course.nbmembers }} học viên</h5>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder"
                      >+55% </span
                    >hơn tháng trước
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hang 2 -->
          <div class="row mt-3">
            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mb-2 mb-md-0">
              <div class="card cursor-pointer" @click="ShowInfoDetail">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 position-absolute"
                  >
                    <i class="material-icons opacity-10">paid</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">
                      Nội dung khóa học
                    </p>
                    <h5 class="mb-0">Hơn 3+ bài học chi tiết</h5>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder"
                      >Hơn 200 </span
                    >lượt tải về
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mb-lg-3">
              <div class="card">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 position-absolute"
                  >
                    <i class="material-icons opacity-10">paid</i>
                  </div>
                  <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">Today's Money</p>
                    <h5 class="mb-0">$53,000</h5>
                  </div>
                </div>
                <hr class="dark horizontal my-0" />
                <div class="card-footer p-3">
                  <p class="mb-0">
                    <span class="text-success text-sm font-weight-bolder"
                      >+55% </span
                    >than lask week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hang 3 -->
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card mt-4">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 float-start"
                  >
                    <i class="material-icons opacity-10">Info</i>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="mb-0">{{ course.name }}</h4>
                    </div>
                    <div
                      class="col-md-6 d-flex justify-content-end align-items-center"
                    >
                      <div class="dropstart float-lg-end ms-auto">
                        <a
                          href="javascript:;"
                          class="cursor-pointer"
                          id="dropdownTable2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="material-icons text-secondary text-sm">
                            Cài đặt
                          </i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                          aria-labelledby="dropdownTable2"
                          style=""
                        >
                          <li>
                            <span
                              @click="EditInfoCourse"
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
                    </div>
                  </div>
                </div>
                <div class="card-body p-3 pt-4">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item border-0 flex-column align-items-start ps-0 py-0 mb-3"
                    >
                      <div
                        class="checklist-item checklist-item-primary ps-2 ms-3"
                      >
                        <div class="d-flex align-items-center">
                          <h6 class="mb-0 text-dark text-sm">Chung</h6>
                        </div>
                        <div class="d-flex align-items-center ms-4 mt-3 ps-1">
                          <div>
                            <p class="mb-0 text-secondary">Tiêu đề</p>
                            <span class="text-xs text-weight-bolder">{{
                              course.title
                            }}</span>
                          </div>
                          <div class="ms-auto">
                            <p class="mb-0 text-secondary">Loại</p>
                            <span class="text-xs">{{ course.category }}</span>
                          </div>
                          <div class="mx-auto">
                            <p class="mb-0 text-secondary">Giá</p>
                            <span
                              class="text-l text-weight-bolder text-primary"
                              style="font-weight: 700; font-size: 24px"
                              >{{ course.price }}</span
                            >
                          </div>
                        </div>
                      </div>
                      <hr class="horizontal dark mt-4 mb-0" />
                    </li>

                    <li
                      class="list-group-item border-0 flex-column align-items-start ps-0 py-0 mb-3"
                    >
                      <div
                        class="checklist-item checklist-item-primary ps-2 ms-3"
                      >
                        <div class="d-flex align-items-center">
                          <h6 class="mb-0 text-dark text-sm">Khác</h6>
                        </div>
                        <div class="d-flex align-items-center ms-4 mt-3 ps-1">
                          <div>
                            <p class="mb-0 text-secondary">
                              Giáo viên hướng dẫn
                            </p>
                            <span class="text-l text-weight-bolder">
                              {{ course.teacherName }}
                            </span>
                          </div>
                          <div class="ms-auto">
                            <p class="mb-0 text-secondary">Mô tả</p>
                            <span class="text-xs">{{ course.category }}</span>
                          </div>
                        </div>
                      </div>
                      <hr class="horizontal dark mt-4 mb-0" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="col-lg-4 col-12 mt-lg-n3">
          <div class="row">
            <div class="col-12">
              <div class="card mt-4">
                <div class="card-header p-3 pt-2">
                  <div
                    class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                  >
                    <i class="material-icons opacity-10">Image</i>
                  </div>
                  <div class="text-end">
                    <p class="text-sm mb-0 text-capitalize">Khóa học</p>
                    <h5 class="mb-0">115</h5>
                  </div>
                </div>
                <div class="card-body px-3 pt-0">
                  <div class="row">
                    <div class="col-12">
                      <div class="box-image border-radius-xl overflow-hidden">
                        <img :src="linkImage" alt="" class="w-100 h-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mt-3"></div>
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
      linkImage: "",
      course: {},
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ShowInfoDetail() {
      this.$router.push(`/customLesson/${this.course_id}`);
    },
    ShowMember() {
      this.$router.push(`/customLesson/listmember/${this.course_id}`);
    },
    EditInfoCourse() {
      this.$router.push(`/edit-course/${this.course_id}`);
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
        this.linkImage = `${process.env.baseUrl}${this.course.urlImage}`;
      }
    });
  },
};
</script>

<style scoped lang="scss">
.bog-item-course {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  background-color: #f5f5f5;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }

  .header-item {
    height: 34px;
    background-color: white;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    border-radius: 10px;
    position: relative;
    padding: 0 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    &::after {
      content: "";
      left: 0;
      width: 10px;
      height: 34px;
      background-color: #e58025;
      position: absolute;
    }
  }

  .body-item {
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);

    .title {
      height: 48px;
      font-size: 24px;
      font-weight: 600;
      border-bottom: 2px solid #e58025;
    }

    .course-item {
      width: 100%;

      .form-course {
        width: 100%;

        .row-item {
          .item {
            display: flex;
            flex-direction: column;
            gap: 6px;

            .item-name {
              font-size: 16px;
            }

            .input-item {
              width: 72%;
              height: 40px;
              border-radius: 6px;
              border: 1px solid #dadada;
              background-color: #f1f1f1;
              outline: none;
              padding: 0 12px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }

        .list-btn {
          display: flex;
          gap: 12px;
        }
      }
    }
  }
}
</style>
