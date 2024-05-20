<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <!-- header -->
          <div class="card-header pb-0">
            <h6>Danh sách khóa học</h6>
          </div>
          <!-- body -->
          <div class="card-body px-0 pt-0 pb-0">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Khóa học
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Loại, Mô tả
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Số lượng thành viên
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Giá
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in listCourse">
                    <td>
                      <div class="d-flex px-2 py-1">
                        <!-- <div>
                          <WebAvatar
                            :img="item.avatarUrl"
                            size="sm"
                            border-radius="lg"
                            class="me-3"
                            alt="user1"
                          />
                        </div> -->
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {{ item.title }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">
                        {{ item.category }}
                      </p>
                      <p class="text-xs text-secondary mb-0">
                        {{ item.description }}
                      </p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <WebBadge color="success" variant="gradient" size="sm">{{
                        item.nbmembers
                      }}</WebBadge>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-primary text-l font-weight-bold">{{
                        item.price
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <button
                          class="btn text-secondary font-weight-bold text-xs mb-0"
                          @click="nativeAccount(item.id)"
                        >
                          Sửa
                        </button>
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
    <!--  -->

    <!-- Giới thiệu chunh  -->
    <div class="row">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">
                    Được phát triển bởi Nguyễn Ngọc Linh
                  </p>
                  <h5 class="font-weight-bolder">Admin Clea-Web-App</h5>
                  <p class="mb-5">
                    Từ nền tảng bạn sẽ theo dõi được hoạt động và doanh số trên
                    website của bạn, đưa ra chiến lược phù hợp phát triển.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Đọc thêm
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="bg-gradient-success border-radius-lg h-100">
                  <img
                    src="~/assets/img/shapes/waves-white.svg"
                    class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="w-100 position-relative z-index-2 pt-4"
                      src="~/assets/img/illustrations/rocket-white.png"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card h-100 p-3">
          <div
            class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            style="
              background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg');
            "
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 p-3 h-100">
              <div class="d-flex flex-column h-100">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  Làm việc 1 cách nhanh chóng hơn
                </h5>
                <p class="text-white mb-5">
                  Chúng tôi đem lại những giá trị hữu ích giúp cải thiện hiệu
                  quả công việc tăng nhanh doanh số.
                </p>
                <a
                  class="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                  href="javascript:;"
                >
                  Đọc thêm
                  <i
                    class="fas fa-arrow-right text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WebAvatar from "@/components/feature/WebAvatar.vue";
import WebBadge from "@/components/feature/WebBadge.vue";
export default {
  components: {
    WebAvatar,
    WebBadge,
  },
  data() {
    return {
      listCourse: [],
      accountuser: {},
    };
  },
  methods: {
    ...mapActions("course", {
      getlistcourse: "getlistcourse",
    }),
    nativeAccount(course_id) {
      this.$router.push(`/courses/${course_id}`);
    },
  },
  created() {
    this.getlistcourse().then((res) => {
      this.listCourse = res;
    });
  },
};
</script>
