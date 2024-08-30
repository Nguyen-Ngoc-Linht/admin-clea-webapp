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
              >{{ isCreated ? "Tạo khóa học" : course.name }}</span
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
                              class="box-image border-radius-xl overflow-hidden w-100 h-100"
                            >
                              <img
                                v-if="linkImage != ''"
                                :src="linkImage"
                                alt=""
                                class="w-100 h-100"
                                style="aspect-ratio: 16/9"
                              />
                              <label
                                for=""
                                v-else
                                class="w-90 d-flex align-items-center justify-content-center"
                                style="
                                  border-style: dotted;
                                  aspect-ratio: 6 / 3;
                                "
                                >Chọn ảnh của bạn</label
                              >
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
                            accept="image/*"
                            class="form-control"
                            isRequired="false"
                            @change="previewImage"
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
                    <button type="submit" class="btn btn-primary">
                      {{ isCreated ? "Tạo khóa học" : "Lưu" }}
                    </button>
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
import {getUserInfo} from "~/utils/cookieAuthen";

export default {
  layout: "empty",
  data() {
    return {
      user: {},
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
      //
      isCreated: false,
      //Image
      urlCourse: "",
      fileImage: "",
      changeImage: false,
    };
  },
  methods: {
    ...mapActions("course", {
      createcourse: "createcourse",
      getcourse: "getcourse",
      updatecourse: "updatecourse",
    }),
    ...mapActions("upload", {
      uploadImage: "uploadImage",
    }),
    backCourse() {
      if(this.isCreated) {
        this.$router.push(`/courses`);
      } else {
        this.$router.push(`/courses/${this.course_id}`);
      }
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.fileImage = file;
      if (file) {
        this.changeImage = true;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.linkImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async submitData(event) {
      event.preventDefault(); // Ngăn chặn việc reload trang khi submit form

      const body = {
        name: this.name,
        title: this.title,
        teacherId: "66cd3afaa52089f1590b86b1",
        teacherName: this.teacherName,
        category: this.category,
        price: this.price,
        description: this.description,
        createdById: this.user.id,
        urlImage: this.urlCourse,
      };

      if (this.isupdatecourse) {
        if(this.changeImage) {
          await this.uploadImage(this.fileImage).then((res => {
            console.log("Ảnh đã đưa lên server", res);
            body.urlImage = res.path;
          }))
        }

        const data = {
          formData: body,
          course_id: this.course_id,
        };
        await this.updatecourse(data).then((response) => {
          console.log("Resss", response);
          alert("Bạn đã thay đổi thông tin khóa học thành công");
          this.$router.push(`/courses/${this.course_id}`);
        });
      } else {
        if(this.changeImage) {
          await this.uploadImage(this.fileImage).then((res => {
            console.log("Ảnh đã đưa lên server", res);
            body.urlImage = res.path;
          }))
        }
        this.createcourse(body).then((response) => {
          this.$router.push(`/courses`);
        });
      }
    },
  },
  created() {
    this.user = JSON.parse(getUserInfo());

    this.course_id = this.$route.params.course_id;
    if (this.course_id != null) {
      this.getcourse(this.course_id).then((res) => {
        if (res) {
          this.urlCourse = this.course.urlImage;
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
    } else {
      this.isCreated = true;
      this.isupdatecourse = false;
    }
  },
};
</script>
