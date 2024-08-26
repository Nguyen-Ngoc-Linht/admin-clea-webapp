<template>
  <div class="w-100 customLesson">
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

    <div class="container-fluid px-2 px-md-4">
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
    <div class="container-fluild py-2 px-5">
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
                class="material-icons text-white position-relative text-md pe-2"
                >add</i
              >Thêm bài học
            </button>
          </div>
        </div>

        <hr class="horizontal dark" />

        <!-- List bai hoc -->
        <div v-for="(chapter, index) in chapters" class="row mt-lg-4 mt-2">
          <div
            class="w-100 border-radius-section card"
            @click="handleClickChapter(index)"
          >
            <div class="card-body" style="font-size: 24px">
              Chương {{ index + 1 }}: {{ chapter.chaptername }}
            </div>
          </div>
          <div
            v-if="chapter.isVisible"
            v-for="item in chapter.listlesson"
            class="col-lg-4 col-md-6 mb-4 mt-5"
          >
            <div class="card">
              <div class="card-body p-3">
                <div class="d-flex mt-n2">
                  <!-- Logo lesson -->
                  <div
                    class="avatar avatar-xl bg-gradient-dark border-radius-xl overflow-hidden mt-n4"
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
                        <a class="dropdown-item" href="javascript:;"
                          >Chỉnh sửa</a
                        >
                        <a
                          class="dropdown-item"
                          href="javascript:;"
                          @click="onShowModal(item.id)"
                          >Xóa</a
                        >
                        <a class="dropdown-item" href="javascript:;"
                          >Sao chép</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-100 px-0 border-radius-xl overflow-hidden mt-2"
                  style="aspect-ratio: 16 / 9"
                >
                  <img :src="item.image" alt="" class="w-100 h-100" />
                </div>
                <p class="text-sm mt-3">{{ item.title }} : {{ item.name }}</p>
                <hr class="horizontal dark" />
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
      </section>
    </div>

    <!-- Modal -->
    <div
      ref="modalShow"
      class="modal fade"
      id="modal-notification"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal-notification"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-danger modal-dialog-centered modal-"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="modal-title-notification">
              Bạn có chắc chắn muốn xóa bài học này
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="py-3 text-center">
              <i class="ni ni-bell-55 ni-3x"></i>
              <h4 class="text-gradient text-danger mt-4">Lưu ý!</h4>
              <p>Bài học sau khi xóa sẽ bị mất và không thể khôi phục.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button data-bs-dismiss="modal" type="button" class="btn btn-white">
              Quay lại
            </button>
            <button
              type="button"
              class="btn bg-gradient-danger text-white ml-auto"
              @click="deleteLessonCourse"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { formatLessonstoChapters } from "@/utils/formData";

export default {
  layout: "empty",
  data() {
    return {
      course_id: "",
      course: {},
      chapters: [],
      tabchapter: 0,
      id_lesson: "",
    };
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
    handleClickChapter(index) {
      this.tabchapter = index;
      this.chapters[index].isVisible = !this.chapters[index].isVisible;
    },

    onShowModal(idLesson) {
      // console.log(idLesson);
      this.id_lesson = idLesson;
      this.myModal.show();
    },

    deleteLessonCourse() {
      this.deleteLesson(this.id_lesson).then((response) => {
        if (response) {
          this.myModal.hide();
        } else {
          alert("Xóa bài học thất bại");
          this.myModal.hide();
        }
      });
    },
  },
  mounted() {
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modalShow);
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
        const chapterformat = formatLessonstoChapters(response);
        this.chapters = chapterformat;
        // console.log(chapterformat);
        this.chapters[0].isVisible = true;
      } else {
        this.ishavelesson = false;
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
