<template>
  <div class="container-fuild px-2 teacher-page">
    <div class="row mt-3">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <h4 class="w-100 text-center">Lịch làm việc của bạn</h4>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-body">
            <FullCalendar ref="fullCalendar" :options="calendarOptions" />
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <div class="card">
              <div class="card-header p-3 py-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="material-icons text-white opacity-10"> Icon </i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Khóa học của bạn</p>
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
            <div class="card">
              <div class="card-header p-3 py-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="material-icons text-white opacity-10"> Icons </i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Lương của bạn</p>
                  <h4 class="mb-0">2.000.000 VNĐ</h4>
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
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <div class="card">
              <div class="card-header p-3 py-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="material-icons text-white opacity-10">
                    account_circle
                  </i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Users Active</p>
                  <h4 class="mb-0">1,600</h4>
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
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-12 mb-4">
            <div class="card">
              <div class="card-header p-3 py-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-info shadow text-center border-radius-xl mt-n4 position-absolute"
                >
                  <i class="material-icons text-white opacity-10">
                    account_circle
                  </i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Users Active</p>
                  <h4 class="mb-0">1,600</h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <button @click="showData" class="btn">Search</button>
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
.fc {
  width: 100%;
}

.fc-scroller {
  overflow: hidden !important; /* Tắt thanh cuộn bên trái */
}

/* Đảm bảo rằng lịch vừa khung màn hình nhỏ hơn */
@media (max-width: 768px) {
  .fc-dayGridMonth-view {
    table-layout: fixed; /* Đảm bảo các ngày trong tháng có kích thước đều nhau */
  }

  .fc-col-header-cell,
  .fc-day {
    font-size: 0.75rem; /* Giảm kích thước chữ cho màn hình nhỏ */
  }
  .fc-scroller {
    overflow: hidden !important; /* Tắt thanh cuộn bên trái */
  }
}
</style>
