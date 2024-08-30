<template>
  <div class="container-fluid">
    <div class="card card-body mt-2 bg-gradient-info">
      <div class="d-flex">
        <NuxtLink to="/users" class="text-lg text-black">Quản lý tài khoản</NuxtLink>
        <span class="ms-2 me-xxl-2 text-lg text-black">/</span>
        <span class="text-lg text-primary text-bold" style="font-style: italic">Nguyen Ngoc Linh</span>
      </div>
    </div>

    <div class="container py-3 mb-4">
      <div class="row">
        <div class="col-xl-5 col-lg-4 col-md-6">
          <div class="row w-100">
            <div class="card card-body">
              <div class="d-flex flex-column align-items-center">
                <img src="https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/454342856_122156797514167690_2464145683836794711_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGYLBaYUYbKtzsmyXGIahO0t2DVGU2yrle3YNUZTbKuV-SkErFf9I-B6-X4DfgmnltYXcRFW39LPzMiWy-yB3Rl&_nc_ohc=487oRE72fJ0Q7kNvgEvje-X&_nc_ht=scontent.fhan1-1.fna&oh=00_AYCqqtVxrlXDhy-QFWPTFdDNTIEisJnyw8l4fqYz2VNezQ&oe=66D377BE"
                     alt=""
                     class="avatar-xxl avatar"
                     style="border-radius: 50%"
                >
                <h5 class="mt-2 text-bolder">Nguyeexn Ngoc Linh</h5>
              </div>

              <div class="px-2 px-lg-3">
                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-single-02 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Tên tài khoản: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">linhnn</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-email-83 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Email: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">ngoclinhtp2002@gmail.com</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-headphones text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Số điện thoại: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">0968855491</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-square-pin text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Địa chỉ: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">Đội 2, Vĩnh Lộc, Thư Phú, Thường Tín Hà Nội</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-hat-3 text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Học vấn: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">Lớp 12</span>
                </div>

                <div class="d-flex align-items-center mt-2">
                  <div
                    class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                  >
                    <i class="ni ni-time-alarm text-sm opacity-10 text-info text-bolder"></i>
                  </div>
                  <span class="mb-0 ms-2 text-sm text-bolder text-info text-gradient">Ngày tạo: </span>
                  <span for="" class="mb-0 ms-1 text-md-start text-bold">12/08/2024</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row w-100 mt-3">
            <div class="card">
              <div class="card-header pb-2">
                <h5 class="text-info text-gradient">Danh sách khóa học đăng ký</h5>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-body pt-2">
                <div class="mt-2 d-flex w-100 py-3 px-1 bg-gradient-secondary shadow border-radius-md d-flex align-items-center">
                  <div class="ms-2">
                    <img src="" alt="" class="avatar avatar-lg">
                  </div>
                  <div class="ms-2 d-flex flex-column justify-content-center" style="flex: 1">
                    <span class="text-bolder text-primary text-gradient">Khoas hocj 1</span>
                    <label class="ms-0 mb-0 ">Tham gia: 12/08/2024</label>
                  </div>
                </div>

                <div class="mt-2 d-flex w-100 py-3 px-1 bg-gradient-secondary shadow border-radius-md d-flex align-items-center">
                  <div class="ms-2">
                    <img src="" alt="" class="avatar avatar-lg">
                  </div>
                  <div class="ms-2 d-flex flex-column justify-content-center" style="flex: 1">
                    <span class="text-bolder text-primary text-gradient">Khoas hocj 1</span>
                    <label class="ms-0 mb-0 ">Tham gia: 12/08/2024</label>
                  </div>
                </div>

                <div class="mt-2 d-flex w-100 py-3 px-1 bg-gradient-secondary shadow border-radius-md d-flex align-items-center">
                  <div class="ms-2">
                    <img src="" alt="" class="avatar avatar-lg">
                  </div>
                  <div class="ms-2 d-flex flex-column justify-content-center" style="flex: 1">
                    <span class="text-bolder text-primary text-gradient">Khoas hocj 1</span>
                    <label class="ms-0 mb-0 ">Tham gia: 12/08/2024</label>
                  </div>
                </div>

                <div class="mt-2 d-flex w-100 py-3 px-1 bg-gradient-secondary shadow border-radius-md d-flex align-items-center">
                  <div class="ms-2">
                    <img src="" alt="" class="avatar avatar-lg">
                  </div>
                  <div class="ms-2 d-flex flex-column justify-content-center" style="flex: 1">
                    <span class="text-bolder text-primary text-gradient">Khoas hocj 1</span>
                    <label class="ms-0 mb-0 ">Tham gia: 12/08/2024</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-7 col-lg-8 col-md-6">
          <div class="row">
            <div class="card px-0">
              <div class="card-header d-flex w-100 py-3 bg-gradient-info shadow border-radius-md d-flex align-items-center">
                <span class="text-bold text-black text-lg">Thao tác hệ thống</span>
              </div>

              <div class="card-body px-4">
                <div class="row">
                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Bài đăng</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-single-copy-04 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">25 bài đăng</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Lịch sử truy cập</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-world-2 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">65 lượt truy cập</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <h6 class="mb-2 ms-2">Tài liệu đã lưu</h6>
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-collection text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">46 tài liệu</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="dark horizontal mt-3" />
                <h5>Cài đặt tài khoản</h5>
                <div class="row">
                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-lock-circle-open text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Khóa tài khoản</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-secondary cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-key-25 text-sm opacity-10 text-secondary text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Phân quyền</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4 col-md-6">
                    <div class="card card-body py-3 px-3 shadow-card bg-gradient-warning cursor-pointer">
                      <div class="d-flex align-items-center">
                        <div
                          class="text-center bg-white shadow icon icon-sm border-radius-md d-flex align-items-center justify-content-center"
                        >
                          <i class="ni ni-bell-55 text-sm opacity-10 text-warning text-bolder"></i>
                        </div>
                        <span class="ms-2 text-light text-bold">Gửi cảnh báo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="card card-body mt-3">
              <h5>Tần suất truy cập</h5>
              <div>
                <GradientLineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GradientLineChart from "@/components/common/Chart/GradientLineChart.vue";

export default {
  name: 'User',
  layout: "empty",
  components: {
    GradientLineChart
  },
  data() {
    return {
      user_id: "",
    }
  },
  created() {
    this.user_id = this.$route.query.user_id;

  }
}
</script>
