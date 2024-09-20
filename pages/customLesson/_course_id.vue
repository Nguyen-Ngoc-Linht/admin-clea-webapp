<template>
  <div class="w-100 customLesson" style="min-height: 100vh">
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
              class="text-weight-bolder mb-0 ms-2 me-2"
              @click="backCourse"
              style="text-decoration: none; font-style: italic"
              >{{ course.name }}</span
            >
            /
            <h5 class="ms-2 mb-0">Danh sách bài học</h5>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container px-2 px-md-4">
      <div
        class="page-header min-height-300 border-radius-xl mt-4"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80');
        "
      >
        <span class="mask bg-gradient-primary opacity-6"></span>
      </div>
      <div class="card card-body mx-3 mx-md-4 mt-n6">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img
                :src="course.pathFile"
                alt="profile_image"
                class="w-100 h-100 border-radius-lg shadow-sm"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">{{ course.name }}</h5>
              <p class="mb-0 font-weight-normal text-sm">{{ course.title }}</p>
            </div>
          </div>
          <!-- <div
            class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
          >
            <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link mb-0 px-0 py-1 active"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="true"
                  >
                    <span class="ms-1">App</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link mb-0 px-0 py-1"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                    tabindex="-1"
                  >
                    <span class="ms-1">Messages</span>
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link mb-0 px-0 py-1"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                    tabindex="-1"
                  >
                    <span class="ms-1">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container py-2 px-5">
      <section class="py-3">
        <!-- Tieue dde -->
        <div class="row mb-4 mb-md-0">
          <div class="col-md-8 me-auto my-auto text-left">
            <h5>Những bài học đem lại giá trị đến học sinh</h5>
            <p>
              Đây là trình quản lý nội dung khóa học của bạn <br />
              Hãy theo dõi và chỉnh sửa thông tin tốt nhất.
            </p>
          </div>
          <div class="col-lg-4 col-md-12 my-auto text-end">
            <button
              type="button"
              @click="addLesson"
              class="btn bg-gradient-primary mb-0 mt-0 mt-md-n9 mt-lg-0"
            >
              <i
                class="ni ni-fat-add text-white position-relative text-lg pe-2"
                ></i
              >Thêm bài học
            </button>
          </div>
        </div>

        <hr class="horizontal dark" />

        <!-- List bai hoc -->
        <div v-for="(chapter, index) in chapters" class="row mt-lg-4 mt-2">
          <div
            class="w-100 btn bg-gradient-info d-flex flex-start border-radius-section"
            :data-index="index"
            data-bs-toggle="collapse"
            :data-bs-target="'#chapter' + index"
            :aria-controls="'#chapter' + index"
            aria-expanded="false"
            style="border-radius: 10px"
          >
            <span class="text-lg" style="text-transform: none">
              Chương {{ index + 1 }}: {{ chapter.chaptername }}
            </span>
          </div>
          <div class="collapse row" :id="'chapter' + index">
            <div
              v-for="item in chapter.listlesson"
              class="col-xl-3 col-lg-4 col-md-6 mb-4 mt-3"
            >
              <div class="card">
                <div class="card-body p-3">
                  <div class="d-flex mt-n2">
                    <!-- Logo lesson -->
                    <div
                      class="avatar avatar-lg bg-gradient-dark border-radius-xl overflow-hidden mt-n4"
                    >
                      <img
                        :src="course.pathFile"
                        alt="slack_logo"
                        class="w-100 h-100"
                      />
                    </div>
                    <!-- Option -->
                    <div class="ms-auto">
                      <div class="dropdown">
                        <button
                          class="btn btn-link text-secondary ps-0 pe-2"
                          id="navbarDropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          ...
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3"
                          aria-labelledby="navbarDropdownMenuLink"
                          style=""
                        >
                          <a class="dropdown-item"
                          >Chỉnh sửa</a
                          >
                          <a
                            class="dropdown-item"
                            @click="handleDeleteLesson(item.id)"
                          >Xóa</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                          >Ẩn</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-100 px-0 border-radius-lg overflow-hidden mt-0"
                    style="aspect-ratio: 16 / 9"
                  >
                    <img :src="item.image" alt="" class="w-100 h-100" />
                  </div>
                  <p class="text-sm mt-2 mb-1">{{ item.title }} : {{ item.name }}</p>
                  <hr class="horizontal dark" style="margin: 4px 0" />
                  <div class="row">
                    <div class="col-6">
                      <h6 class="text-sm mb-0">{{ item.order }}</h6>
                      <p class="text-secondary text-sm font-weight-normal mb-0">
                        {{ item.content }}
                      </p>
                    </div>
                    <div class="col-6 text-end">
                      <h6 class="text-sm mb-0">02.03.22</h6>
                      <p class="text-secondary text-sm font-weight-normal mb-0">
                        Due date
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import { formatLessonstoChapters } from "@/utils/formData";
import Swal from "sweetalert2";

export default {
  layout: "empty",
  data() {
    return {
      course_id: "",
      course: {},
      tabchapter: 0,
      id_lesson: "",
    };
  },
  computed: {
    ...mapState("lesson", ["chapters"])
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("lesson", {
      getlesson: "getlesson",
      deleteLesson: "deleteLesson",
    }),
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
    addLesson() {
      this.$router.push(`/customLesson/addLesson?course_id=${this.course_id}`);
    },

    handleDeleteLesson(lessonId) {
      this.commonConfirm("Bạn có chắc chắn xóa bài học này!", () => {
        this.commonLoadingPage(true);

        this.deleteLesson(lessonId).then((response) => {
          Swal.fire("", "Xóa bài học thành công", "success");
          console.log(response);
        }).catch((e) => {
          console.log(e);
          this.commonConfirmError("Xóa bài học thất bại!")
        }).finally(() => {
          this.commonLoadingPage(false);
        })
      }, () => {

      })
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
        this.course.pathFile = `${process.env.baseUrl}${res.urlImage}`;
      }
    });

    // Laays danh sasch bai hoc
    this.getlesson(this.course_id).then((response) => {
      if (Array.isArray(response) && response.length > 0) {
        console.log("Lấy dữ liệu thành công");
      } else {
        // Xử lý trường hợp không có dữ liệu hoặc dữ liệu không hợp lệ
        console.error("Dữ liệu không hợp lệ hoặc không có dữ liệu.");
      }
    });
  },
};
</script>

<style scoped lang="scss">
.customLesson {
  max-height: 100vh;
  overflow-y: auto;
  background-color: #f5f5f5;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }

  .card {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}
</style>
