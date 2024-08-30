<template>
  <div class="container-fluid py-4">
    <div class="row mb-5">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <img src="~/assets/img/small-logos/logo-jira.svg" alt="" class="avatar avatar-lg">

              <div class="ms-3">
                <h4>Quản lý bài đăng</h4>
                <span class="mb-0 text-lg">Danh sách bài đăng hệ thống</span>
              </div>
            </div>
          </div>
        </div>

        <div v-for="post of posts" class="card card-body mt-3">
          <div class="row">
            <div class="d-flex align-items-center">
              <img class="avatar" :src="post.avataruser" style="border-radius: 50%"/>

              <h5 class="mb-0 ms-2 text-black" style="flex: 1">{{post.username}}</h5>

              <div class="ms-3">
                <div class="dropdown">
                  <button class="btn btn-link text-secondary ps-0 pe-2 mb-0" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-ellipsis-v text-lg" aria-hidden="true"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink" style="">
                    <a class="dropdown-item">Thông báo yêu cầu sửa nội dung</a>
                    <a class="dropdown-item" href="javascript:;">Xóa bài viết</a>
                    <a class="dropdown-item" href="javascript:;">Khóa tài khoản</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6 col-xl-8 col-md-7">
              <h5 class="ms-2 cursor-pointer" @click="nagivePost(post.id)">{{post.title}}</h5>
              <div class="ms-2 d-flex flex-column justify-content-center">
                <span class="text-secondary text-md-start">{{post.body}}</span>
              </div>
            </div>
            <div class="col-6 col-xl-4 col-md-5">
              <div class="d-flex justify-content-center align-items-center h-100">
                <img :src="post.imageLink" alt="" class="w-100">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="row">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">
                      Được phát triển bởi Nguyễn Ngọc Linh
                    </p>
                    <h5 class="font-weight-bolder">Admin Clea-Web-App</h5>
                    <p class="">
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
                <div class="col-lg-12 ms-auto text-center mt-lg-0">
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

        <div class="row mt-3">
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

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {formatPosts} from "~/utils/formData";

export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    ...mapActions("posts", {
      getListPosts: "getListPosts",
    }),
    handleInitData() {
      this.getListPosts().then(res => {
        if (res) {
          console.log("Danh sach bai dang", res);
          const listposts = formatPosts(res.data)
          this.posts = listposts;
        }
      }).catch(e => {
        console.error(e);
      })
    },
    nagivePost(postId) {
      this.$router.push(`/bai-dang/chi-tiet-bai-dang/${postId}`);
    }
  },
  created() {
    this.handleInitData();
  }
}
</script>
