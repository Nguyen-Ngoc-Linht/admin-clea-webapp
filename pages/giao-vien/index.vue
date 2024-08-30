<template>
  <div class="container-fuild px-4 teacher-page">
    <div class="row mt-3">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header bg-gradient-success py-3">
            <h4 class="w-100 text-center text-white text-3xl mb-0">Lịch giảng dạy của bạn</h4>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-body">
            <FullCalendar ref="fullCalendar" :options="calendarOptions" />
          </div>
        </div>
      </div>

      <div class="col-lg-4 box-left">
        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <div class="card cursor-pointer">
              <div class="card-header px-4 py-2">
                <div
                  class="icon icon-lg d-flex justify-content-center align-items-center bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="ni ni-collection text-white opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Khóa học giảng dạy</p>
                  <h4 class="mb-0">3 khóa</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder"
                    >30% </span
                  >Hoàn thành
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <NuxtLink to="/giao-vien/lich-cham-cong" class="card cursor-pointer">
              <div class="card-header px-4 py-2">
                <div
                  class="icon icon-lg d-flex justify-content-center align-items-center bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="ni ni-calendar-grid-58 text-white opacity-10" style="font-size: 24px"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Lịch chấm công</p>
                  <h4 class="mb-0">Theo dõi tiến độ giảng dạy của bạn</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder"
                    >+55% </span
                  >than lask week
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <NuxtLink to="/giao-vien/nhan-tin" class="card cursor-pointer">
              <div class="card-header px-4 py-2">
                <div
                  class="icon icon-lg d-flex justify-content-center align-items-center bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="ni ni-chat-round text-white opacity-10" style="font-size: 24px"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Tương tác</p>
                  <h4 class="mb-0">Gửi tin nhắn</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder"
                    >+55% </span
                  >than lask week
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <NuxtLink to="/giao-vien/tai-khoan" class="card cursor-pointer">
              <div class="card-header px-4 py-2">
                <div
                  class="icon icon-lg d-flex justify-content-center align-items-center bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="ni ni-single-02 text-white opacity-10" style="font-size: 24px"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Tài khoản</p>
                  <h4 class="mb-0">Trang cá nhân</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0" />
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder"
                    >+55% </span
                  >than lask week
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

<!--    <button @click="showData" class="btn">Search</button>-->
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid"; // Import dayGrid plugin
import timeGridPlugin from "@fullcalendar/timegrid"; // Import timeGrid plugin
import viLocale from "@fullcalendar/core/locales/vi"; // Import ngôn ngữ tiếng Việt
import listPlugin from "@fullcalendar/list"; // Import list plugin

export default {
  components: {
    FullCalendar,
  },
  data() {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    return {
      listEvent: [
        {
          title: "Nice Event",
          start: today,
          id: "Nice",
          classNames: ["bg-gradient-success"],
        },
        {
          title: "Meeting",
          start: new Date(y, m, d, 10, 30),
          allDay: false,
          classNames: ["bg-gradient-info"],
        },
      ],
      calendarOptions: {},
      newEvent: {
        title: "",
        start: null,
        classNames: "bg-gradient-success",
      },
    };
  },
  methods: {
    showData() {
      let calendarApi = this.$refs.fullCalendar.getApi();
      console.log("Hihi", calendarApi.getEventById("Nice").start);
    },
    handleDateClick(info) {
      this.newEvent.start = info.date;
      $("#eventModal").modal("show");
    },
    addEvent() {
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.addEvent(this.newEvent);
      this.newEvent = {
        title: "",
        start: null,
        classNames: "bg-gradient-success",
      };
      $("#eventModal").modal("hide");
    },
  },
  created() {
    this.calendarOptions = {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listYear",
      },
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      nowIndicator: true,
      editable: true,
      droppable: true,
      locale: viLocale,
      events: this.listEvent,
      dateClick: this.handleDateClick,
    };
  },
};
</script>

<style scoped lang="scss">
.box-left {
  .card {
    transition: transform 0.2s ease;
    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>
