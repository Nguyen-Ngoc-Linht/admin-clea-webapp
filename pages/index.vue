<template>
  <div class="py-4 container-fluid">
    <!-- Thông báo chung -->
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniStatisticsCard
          title="Doanh thu hôm nay"
          value="10.000.000 VNĐ"
          :percentage="{
            value: '+505%',
            color: 'text-success',
          }"
          :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>

      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniStatisticsCard
          title="Số lượng truy cập hôm nay"
          value="2,300"
          :percentage="{
            value: '+3%',
            color: 'text-success',
          }"
          :icon="{
            component: ' ni ni-world',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>

      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <MiniStatisticsCard
          title="Số khách hàng mới"
          value="+3,462"
          :percentage="{
            value: '-2%',
            color: 'text-danger',
          }"
          :icon="{
            component: 'ni ni-paper-diploma',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>

      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <MiniStatisticsCard
          title="Doanh số"
          value="35M VNĐ"
          :percentage="{
            value: '+5%',
            color: 'text-success',
          }"
          :icon="{
            component: 'ni ni-cart',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>
    </div>

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

    <!-- Chart -->
    <div class="mt-4 row"></div>
  </div>
</template>

<script>
import MiniStatisticsCard from "~/components/common/cards/MiniStatisticsCard.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      iconBackground: "bg-gradient-success",
      // faCreditCard,
      // faScrewdriverWrench,
      // faUsers,
      // faHandPointer,
      // sales: {
      //   us: {
      //     country: "United States",
      //     sales: 2500,
      //     value: "$230,900",
      //     bounce: "29.9%",
      //     flag: US,
      //   },
      //   germany: {
      //     country: "Germany",
      //     sales: "3.900",
      //     value: "$440,000",
      //     bounce: "40.22%",
      //     flag: DE,
      //   },
      //   britain: {
      //     country: "Great Britain",
      //     sales: "1.400",
      //     value: "$190,700",
      //     bounce: "23.44%",
      //     flag: GB,
      //   },
      //   brasil: {
      //     country: "Brasil",
      //     sales: "562",
      //     value: "$143,960",
      //     bounce: "32.14%",
      //     flag: BR,
      //   },
      // },
    };
  },
  components: {
    MiniStatisticsCard,
  },
};
</script>
