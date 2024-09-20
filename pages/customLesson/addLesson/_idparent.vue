<template>
  <div class="w-100 customAddLesson">
    <!-- Header add lesson -->
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
              style="text-decoration: none; font-style: italic"
              @click="backCourse"
            >{{ course.name }}</span
            >
            /
            <span
              class="text-weight-bolder mb-0 ms-2 me-2 cursor-pointer"
              style="text-decoration: none; font-style: italic"
              @click="backListLesson"
            >Danh sách bài giảng</span
            >
            /
            <h5 class="ms-2 mb-0">Thêm bài học</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-3 px-4">
      <div class="row mb-5">
        <div class="col-lg-3">
          <div class="card position-sticky top-1">
            <div class="card-body">
              <h4>Chọn loại bài học cần thêm</h4>
              <ul class="nav flex-column bg-white border-radius-lg p-0">
                <li
                  class="category-lesson nav-item text-dark text-weigh d-flex align-items-center"
                  @click="tabCategory = 1"
                  :class="{ activeType: tabCategory === 1 }"
                >
                  <span class="text-lg">Video</span>
                </li>

                <li
                  class="category-lesson nav-item text-dark text-weigh d-flex align-items-center mt-2"
                  @click="tabCategory = 2"
                  :class="{ activeType: tabCategory === 2 }"
                >
                  <span class="text-lg">Livestrem</span>
                </li>

                <li
                  class="category-lesson nav-item text-dark text-weigh d-flex align-items-center mt-2"
                  @click="tabCategory = 3"
                  :class="{ activeType: tabCategory === 3 }"
                >
                  <span class="text-lg">Thảo luận</span>
                </li>

                <li
                  class="category-lesson nav-item text-dark text-weigh d-flex align-items-center mt-2"
                  @click="tabCategory = 4"
                  :class="{ activeType: tabCategory === 4 }"
                >
                  <span class="text-lg">Bài đọc</span>
                </li>

                <li
                  class="category-lesson nav-item text-dark text-weigh d-flex align-items-center mt-2"
                  @click="tabCategory = 5"
                  :class="{ activeType: tabCategory === 5 }"
                >
                  <span class="text-lg">Kiểm tra</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Thong tin -->
        <div class="col-lg-9 mt-lg-0 mt-4">
          <div class="card card-body shadow" id="profile">
            <div class="row justify-content-center align-items-center">
              <div class="col-sm-auto col-4">
                <div class="avatar avatar-xl position-relative">
                  <img
                    :src="user.avatar"
                    alt="bruce"
                    class="w-100 h-100 rounded-circle shadow-sm"
                  />
                </div>
              </div>
              <div class="col-sm-auto col-8 my-auto">
                <div class="h-100">
                  <h5 class="mb-1 font-weight-bolder">{{ user.name }}</h5>
                  <p class="mb-0 font-weight-normal text-sm">
                    Admin / Giáo viên
                  </p>
                </div>
              </div>
              <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
                <label class="form-check-label mb-0">
                  <small id="profileVisibility">Chuyển sang chế độ ẩn </small>
                </label>
                <div class="form-check form-switch ms-2 my-auto is-filled">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault23"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Type Lesson -->
          <div class="row mt-4">
            <div class="card shadow">
              <div class="card-header pb-0">
                <h5>Thông tin cơ bản</h5>
              </div>

              <!-- Video -->
              <div v-if="tabCategory === 1" class="card-body pt-1">
                <div class="text-start">
                  <div class="row">
                    <div class="col-6">
                      <label for="">Tên bài</label>
                      <div class="">
                        <input
                          v-model="nameLesson"
                          id="name"
                          type="text"
                          class="form-control"
                          name="nameLesson"
                          placeholder="Tên bài học"
                          isRequired="false"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <label for="">Tiêu đề bài học</label>
                      <div class="">
                        <input
                          v-model="titleLesson"
                          id="title"
                          type="text"
                          class="form-control"
                          name="titleLesson"
                          placeholder="Mô tả ngắn bài học của bạn"
                          isRequired="false"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-6">
                      <label for="">Content</label>
                      <div class="">
                        <input
                          v-model="contentLesson"
                          id="content"
                          type="text"
                          class="form-control"
                          name="content"
                          placeholder="Mô tả"
                          isRequired="false"
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <label for="">Chương</label>
                      <div class="">
                        <input
                          v-model="chapterLesson"
                          id="chapter"
                          type="text"
                          class="form-control"
                          name="chapter"
                          placeholder="Tên chương"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-6">
                      <div class="d-flex align-items-center mb-2">
                        <label for="" class="mb-0">Video Link </label>
                        <div class="form-check form-switch ms-2 my-auto is-filled">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault23"
                            @change="changValue"
                          />
                        </div>
                      </div>
                      <div v-if="isUpVideo" class="">
                        <input
                          v-model="linkVideoLesson"
                          id="linkvideo"
                          type="text"
                          class="form-control"
                          name="linkVideo"
                          placeholder="Đường dẫn bài học của bạn"
                        />
                      </div>
                      <div v-else class="">
                        <input type="file" accept="video/*" class="d-none" id="videoLesson" @input="changeVideo">
                        <label for="videoLesson" class="form-control mb-0 mx-0 cursor-pointer d-flex justify-content-between">
                          {{videoName}}
                        </label>
                        <div v-if="defaultChangeVideo" class="d-flex">
                          <video
                            :src="videoUrl"
                            class="rounded w-80 border-radius-xl mt-2"
                            style="aspect-ratio: 16 / 9"
                            controls
                          />
                          <button @click="upVideoServer" class="btn bg-gradient-info h-100 ms-3 mt-2">UpVideo</button>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <label for="">Ảnh bài giảng</label>
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        id="imageLesson"
                        @input="changeImage"
                      />
                      <label
                        for="imageLesson"
                        class="cursor-pointer border-primary d-flex align-items-center justify-content-center position-relative"
                        style="border-style: dotted; aspect-ratio: 6 / 3"
                      >
                        <img
                          v-if="srcImage"
                          :src="srcImage"
                          alt="Selected Image"
                          style="
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                          "
                        />
                        <span v-else>Ảnh ở đây nha</span>
                      </label>

                      <label for="imageLesson" class="btn btn-sm"
                      >Tải ảnh lên</label
                      >
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-4">
                      <button @click="commitAddLesson" class="btn bg-gradient-primary">
                        Tạo bài giảng
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Livestream -->
              <div class="card-body pt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {getUserInfo} from "@/utils/cookieAuthen";

export default {
  layout: "empty",
  data() {
    return {
      course_id: "",
      user: {},
      course: {},
      tabCategory: 1,
      nameLesson: "",
      titleLesson: "",
      contentLesson: "",
      linkVideoLesson: "",
      chapterLesson: "",
      image: "",
      // Image
      fileImage: null,
      srcImage: "",
      defaultChangeImage: false,
      //
      isUpVideo: true,
      videoName: "Tải video của bạn lên",
      fileVideo: null,
      defaultChangeVideo: false,
      videoUrl: "",
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("upload", {
      uploadImage: "uploadImage",
    }),
    ...mapActions("lesson", {
      createLesson: "createLesson",
    }),
    changValue() {
      this.isUpVideo = !this.isUpVideo;
    },
    async upVideoServer() {
      this.commonConfirm("Bạn có chắc chắn muốn tải video lên hệ thống hay không! Quá trình này sẽ mất thời gian", () => {
        const formData = new FormData();
        formData.append("video", this.fileVideo);
      }, () => {
      })
    },
    changeImage(event) {
      const file = event.target.files[0];
      this.fileImage = file;

      if (file) {
        this.defaultChangeImage = true;
        console.log(this.fileImage.name, this.defaultChangeImage);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.srcImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    changeVideo(event) {
      const file = event.target.files[0];

      if(file) {
        this.defaultChangeVideo = true;
        this.fileVideo = file;
        this.videoName = file.name;
        this.videoUrl = URL.createObjectURL(file);
        // this.videoUrl = "http://localhost:3030/video/videos/videoplayback.mp4"

        event.target.value = "";
      }
    },
    commitAddLesson() {
      this.commonConfirm("Bạn có chắc chắn muốn tạo bài học mới này hay không", () => {
        this.addLesson()
      }, () => {
      });
    },
    async addLesson() {
      this.commonLoadingPage(true);

      if (this.defaultChangeImage) {
        await this.uploadImage(this.fileImage).then((response) => {
          this.image = this.fileImage.name;
        });
      }

      const body = {
        title: this.titleLesson,
        content: this.contentLesson,
        nameLesson: this.nameLesson,
        order: 2,
        nameChapter: this.chapterLesson,
        linkVideo: this.linkVideoLesson,
        image: this.image,
      };

      console.log(body);

      this.createLesson({body: body, course_id: this.course_id}).then(
        (response) => {
          console.log("Data tra ve", response);
          this.commonConfirmOK("Tạo bài giảng thành công!", () => {
          })
          this.commonLoadingPage(false);
          this.$router.push(`/customLesson/${this.course_id}`);
        }
      ).catch(e => {
        this.commonConfirmError("Thêm bài học thất bại");
        console.log(e);
      });
    },
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
    backListLesson() {
      this.$router.push(`/customLesson/${this.course_id}`);
    }
  },
  created() {
    this.user = JSON.parse(getUserInfo());

    this.course_id = this.$route.query.course_id;

    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
      }
    });
  },
};
</script>

<style scoped lang="scss">
.customAddLesson {
  .category-lesson {
    height: 48px;
    border-radius: 12px;
    padding: 0 16px;

    &:hover {
      background-color: #f0f2f5;
    }

    &.activeType {
      background-color: #4f4f534d;
    }
  }
}
</style>
