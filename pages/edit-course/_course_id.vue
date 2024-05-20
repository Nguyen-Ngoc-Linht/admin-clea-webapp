<template>
  <div class="w-100">
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
            <h5 class="ms-2 mb-0">Chỉnh sửa thông tin</h5>
          </div>
        </div>
      </div>

      <!-- body -->
      <div class="row mt-3">
        <div class="col-12">
          <div class="card">
            <div class="card-header pt-4 pb-0">
              <h3>Thông tin khóa học</h3>
            </div>

            <!-- card body -->
            <div class="card-body pt-1">
              <form role="form" class="text-start" @submit.prevent="submitData">
                <div class="row">
                  <div class="col-lg-5">
                    <div class="card mt-4">
                      <div class="card-body px-3 pt-0">
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="box-image border-radius-xl overflow-hidden"
                            >
                              <img
                                :src="linkImage"
                                alt=""
                                class="w-100 h-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-7">
                    <div class="row">
                      <div class="col-12">
                        <label for="" class="text-lg">Tên khóa học</label>
                        <div class="">
                          <input
                            v-model="name"
                            id="email"
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="User1"
                            isRequired="false"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mt-4">
                      <div class="col-12">
                        <label for="" class="text-lg">Tiêu đề</label>
                        <div class="">
                          <input
                            v-model="title"
                            id="email"
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="User1"
                            isRequired="false"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mt-4">
                      <div class="col-12">
                        <label for="imageCourse" class="text-lg"
                          >Chọn ảnh</label
                        >
                        <div class="">
                          <input
                            ref="imageCourse"
                            id="imageCourse"
                            type="file"
                            class="form-control"
                            isRequired="false"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12 col-lg-6">
                    <label for="" class="text-lg">Giá</label>
                    <div class="">
                      <input
                        v-model="price"
                        id="price"
                        type="number"
                        class="form-control"
                        name="price"
                        placeholder="User1"
                        isRequired="false"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <label for="" class="text-lg">Giáo viên</label>
                    <div class="">
                      <input
                        v-model="teacherName"
                        id="teacherName"
                        type="text"
                        class="form-control"
                        name="teacherName"
                        placeholder="User1"
                        isRequired="false"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12 col-lg-6">
                    <label for="" class="text-lg">Loại</label>
                    <div class="">
                      <input
                        v-model="category"
                        id="category"
                        type="text"
                        class="form-control"
                        name="email"
                        placeholder="User1"
                        isRequired="false"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12">
                    <label for="" class="text-lg">Mô tả</label>
                    <div class="">
                      <textarea
                        v-model="description"
                        id="description"
                        class="form-control"
                        name="description"
                        isRequired="false"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div
                    class="col-12 d-flex justify-content-flex-start align-items-center"
                  >
                    <button type="submit" class="btn btn-primary">Lưu</button>
                  </div>
                </div>
              </form>
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
      linkImage: "",
      name: "",
      title: "",
      price: "",
      description: "",
      teacherName: "",
      category: "",
      isupdatecourse: true,
    };
  },
  methods: {
    ...mapActions("course", {
      createcourse: "createcourse",
      getcourse: "getcourse",
      updatecourse: "updatecourse",
    }),
    backCourse() {
      this.$router.push(`/courses/${this.course_id}`);
    },
    async submitData(event) {
      event.preventDefault(); // Ngăn chặn việc reload trang khi submit form
      // Tạo đối tượng FormData
      const formData = new FormData();
      // Thêm các dữ liệu khác vào FormData
      formData.append("name", this.name);
      formData.append("title", this.title);
      formData.append("teacherId", "66273b4991ee597c0f7fcace");
      formData.append("teacherName", this.teacherName);
      formData.append("category", this.category);
      formData.append("course_id", this.course_id);
      formData.append("price", this.price);
      // Thêm file vào FormData nếu file đã được chọn
      if (this.$refs.imageCourse.files.length > 0) {
        const file = this.$refs.imageCourse.files[0];
        formData.append("images", file);
      }
      if (this.isupdatecourse) {
        const data = {
          formData: formData,
          course_id: this.course_id,
        };
        await this.updatecourse(data).then((response) => {
          console.log("Resss", response);
          alert("Bạn đã thay đổi thông tin khóa học thành công");
          this.$router.push(`/courses/${this.course_id}`);
        });
      } else {
        this.createcourse(formData).then((response) => {
          console.log("Dữ liệu trả về", response);
        });
      }
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    this.getcourse(this.course_id).then((res) => {
      if (res) {
        this.course = res;
        this.linkImage = `${process.env.baseUrl}${this.course.urlImage}`;
        this.name = res.name;
        this.title = res.title;
        this.teacherName = res.teacherName;
        this.description = res.description;
        this.price = res.price;
        this.category = res.category;
      }
    });
  },
};
</script>
