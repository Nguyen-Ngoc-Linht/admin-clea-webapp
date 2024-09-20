<template>
  <div class="" style="background-color: #f8f9fa; min-height: 100vh">
    <div class="container-fluid px-5 pt-3">
      <div class="card card-body bg-gradient-light">
        <div class="d-flex align-items-center px-3">
          <i @click="backHandle" class="ni ni-bold-left me-3 text-lg text-black cursor-pointer"></i>
          <p class="mb-0 text-info text-bold text-gradient text-lg">Thông tin hoạt động khóa học</p>
        </div>
      </div>
    </div>

    <div class="container-fluid px-5 mt-3">
      <div class="row">
        <div class="col-xl-4 col-md-5 col-12">
          <div class="card card-body bg-gradient-secondary">
            <h4 class="text-center">Thông tin tổng quan</h4>
            <hr class="light horizontal mb-3 mt-0" />
            <div class="box-avatar mb-3 w-100 d-flex justify-content-center">
              <img src="" alt="" class="avatar-xxl" style="border-radius: 50%">
            </div>
            <div class="d-flex justify-content-center gap-3">
              <button class="btn">
                <i class="ni ni-send text-info text-gradient me-3 text-md text-black cursor-pointer"></i>
                Gửi tin nhắn
              </button>
              <button class="btn">Gửi mail đánh giá</button>
            </div>
            <div class="row mt-2">
              <div class="col-6 d-flex align-content-start">
                <label class="w-20 mb-0 text-sm text-black">Id:</label>
                <p class="mb-0 text-light text-sm">16166235</p>
              </div>
              <div class="col-6 d-flex align-content-start">
                <label class="w-40 mb-0 text-sm text-black">email:</label>
                <p class="mb-0 text-light text-sm">16166235</p>
              </div>
              <div class="col-6 d-flex align-content-start">
                <label class="w-20 mb-0 text-sm text-black">Tên:</label>
                <p class="mb-0 text-light text-sm">Nguyễn Ngọc Linh</p>
              </div>
              <div class="col-6 d-flex align-content-start">
                <label class="w-40 mb-0 text-sm text-black">Ngày tham gia:</label>
                <p class="mb-0 text-light text-sm">16166235</p>
              </div>
            </div>
          </div>

          <div class="card card-body bg-gradient-light mt-3">
            <h4 class="text-center">Thống kê hoạt động</h4>
            <hr class="light horizontal mb-3 mt-0" />
            <div class="d-flex justify-content-end">
              <div class="box-option">
                <button class="button-new" :class="{ 'bg-gradient-info text-white': selectTab === 'day' }">Hôm nay</button>
                <button class="button-new" :class="{ 'bg-gradient-info text-white': selectTab === 'week' }">Tuần này</button>
                <button class="button-new" :class="{ 'bg-gradient-info text-white': selectTab === 'month' }">Tháng</button>
                <button class="button-new" :class="{ 'bg-gradient-info text-white': selectTab === 'year' }">Năm</button>
              </div>
            </div>

            <div class="table-responsive w-100 mt-3">
              <table class="table align-items-center mb-0">
                <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Thống kê</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Chỉ số</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-book-bookmark text-warning text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Truy cập khóa học</td>
                  <td class="text-sm text-black text-center text-bold">5</td>
                </tr>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-button-play text-danger text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Số bài học hoàn thành</td>
                  <td class="text-sm text-black text-center text-bold">5</td>
                </tr>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-watch-time text-success text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Thời gian học</td>
                  <td class="text-sm text-black text-center text-bold">5</td>
                </tr>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-chat-round text-info text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Bình luận</td>
                  <td class="text-sm text-black text-center text-bold">5</td>
                </tr>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-single-copy-04 text-primary text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Bài kiểm tra đã thực hiện</td>
                  <td class="text-sm text-black text-center text-bold">5</td>
                </tr>
                <tr>
                  <td class="text-sm text-black text-center">
                    <i class="ni ni-folder-17 text-warning text-gradient"></i>
                  </td>
                  <td class="text-sm text-black text-bold">Bài kiểm tra miss</td>
                  <td class="text-black text-bold text-sm text-center">5</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-xl-8 col-md-7 col-12">
          .
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      course_id: "",
      user_id: "",
      user: {},
      selectTab: "week",
    }
  },
  methods: {
    backHandle() {
      this.$router.back();
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    this.user_id = this.$route.query.user_id;
    console.log(this.user_id, this.course_id);
  }
}
</script>

<style scoped lang="scss">
.box-option {
  gap: 0;
}

.button-new {
  display: inline-block;
  font-weight: 700;
  line-height: 1.4;
  color: #67748e;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0 solid transparent;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  border-radius: 0;
  transition: all 0.15s ease-in;
  letter-spacing: -0.025rem;
  text-transform: none;
  box-shadow: 0 4px 7px -1px rgba(0, 0, 0, 0.11), 0 2px 4px -1px rgba(0, 0, 0, 0.07);
  background-size: 150%;
  background-position-x: 25%;
  margin: 0;
}

.active {

}
</style>
