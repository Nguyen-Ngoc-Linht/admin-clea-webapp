import Vue from "vue";
import swal from 'sweetalert2';
import {mapActions, mapMutations, mapGetters} from "vuex";

Vue.mixin(
  {
    data() {
      return {}
    },
    computed: {
      ...mapGetters('mixin', {
        glbCountLoadingApi: 'glbCountLoadingApi',
      })
    },
    methods: {
      ...mapActions('mixin', {
        UPDATE_COUNT_LOADING_API: 'UPDATE_COUNT_LOADING_API',
      }),
      // commonNotifyVue(message, type) {
      //   if (message === '') {
      //     return;
      //   }
      //   // alert(message);
      //   this.$notify({
      //     text: message,
      //     type: type // info | warn | danger | success | primary
      //   });
      // },
      commonConfirm(message, callbackYes, callbackNo) {
        if (message === undefined) {
          message = 'Lỗi không có thông báo!';
        }

        swal.fire({
          title: '',
          html: message,
          icon: 'question',
          showCloseButton: true,
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn bg-gradient-success me-2',
            cancelButton: 'btn bg-gradient-danger'
          },
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            if (typeof callbackYes === "function") {
              callbackYes();
            }
          } else {
            if (typeof callbackNo === "function") {
              callbackNo();
            }
          }
        }).catch(swal.noop);
      },
      async commonConfirmOK(message, callbackYes) {
        if (message === undefined) {
          message = 'Lỗi không có thông báo!';
        }

        swal.fire({
          title: '',
          html: message,
          icon: 'success',
          showCloseButton: true,
          showCancelButton: false,
          customClass: {
            confirmButton: 'btn bg-gradient-success me-2',
            cancelButton: 'btn bg-gradient-danger'
          },
          confirmButtonText: 'Đồng ý',
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            if (typeof callbackYes === "function") {
              callbackYes();
            }
          }
        }).catch(swal.noop);
      },
      commonConfirmWarning(message, callbackYes) {
        if (message === undefined) {
          message = 'Lỗi không có thông báo!';
        }

        swal.fire({
          title: '',
          html: message,
          icon: 'warning',
          showCloseButton: true,
          showCancelButton: false,
          customClass: {
            confirmButton: 'btn bg-gradient-success me-2',
            cancelButton: 'btn bg-gradient-danger'
          },
          confirmButtonText: 'Đồng ý',
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            if (typeof callbackYes === "function") {
              callbackYes();
            }
          }
        }).catch(swal.noop);
      },
      commonConfirmError(message, callbackYes) {
        if (message === undefined) {
          message = 'Lỗi không có thông báo!';
        }

        swal.fire({
          title: '',
          html: message,
          icon: 'error',
          showCloseButton: true,
          showCancelButton: false,
          customClass: {
            confirmButton: 'btn bg-gradient-success me-2',
            cancelButton: 'btn bg-gradient-danger'
          },
          confirmButtonText: 'Đồng ý',
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            if (typeof callbackYes === "function") {
              callbackYes();
            }
          }
        }).catch(swal.noop);
      },
      commonConfirmInput(message, callbackYes, callbackNo) {
        if (message === undefined) {
          message = 'Lỗi không có thông báo!';
        }

        swal.fire({
          title: '',
          html: message,
          icon: 'warning',
          input: 'textarea',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn bg-gradient-success me-2',
            cancelButton: 'btn bg-gradient-danger'
          },
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
          buttonsStyling: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          preConfirm: (value) => {
            if (!value) {
              swal.showValidationMessage('Vui lòng nhập vào trường này');
            }
          }
        }).then((result) => {
          if (result.isConfirmed) {
            if (typeof callbackYes === "function") {
              callbackYes(result);
            }
          } else {
            if (typeof callbackNo === "function") {
              callbackNo();
            }
          }
        }).catch(swal.noop);
      },
      commonCheckPhoneNumber(phoneNumber) {
        let pattern = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
        if (isNaN(phoneNumber))
          return false;
        else if (phoneNumber < 0)
          return false;
        else if (!pattern.test(phoneNumber))
          return false;
        else
          return true;
      },
      validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      },
      commonLoadingPage(flag, count = 0) {
        this.$nextTick(() => {
          if (flag) {
            if (count > 0) {
              console.log('commonLoadingPage init: ', count);
              this.UPDATE_COUNT_LOADING_API(count);
            }

            this.$nuxt.$loading.start();
          } else {
            let countApiDone = this.glbCountLoadingApi;
            console.log('commonLoadingPage done: ', countApiDone);

            if (this.glbCountLoadingApi === 0) {
              this.$nuxt.$loading.finish();
            } else {
              countApiDone--;
              this.UPDATE_COUNT_LOADING_API(countApiDone);
            }
          }
        });
      },
      commonGetArrRangeDate(type, fromDate, toDate) {
        // type => hour | day | month | year
        let objData = {
          arrRangeX: [],
          arrRangeVal: []
        };

        let currentDate = new Date(
          fromDate.getFullYear(),
          fromDate.getMonth(),
          fromDate.getDate()
        );

        if (type === 'hour') {
          let count = 0;
          while (count <= 23) {
            objData.arrRangeX.push(count);
            objData.arrRangeVal.push(0);

            count++;
          }
        } else if (type === 'day') {
          while (currentDate <= toDate) {
            objData.arrRangeX.push(this.$moment(currentDate).format('YYYY-MM-DD'));
            objData.arrRangeVal.push(0);

            currentDate = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1
            );
          }
        } else if (type === 'month') {
          while (currentDate.getMonth() <= toDate.getMonth()) {
            objData.arrRangeX.push(this.$moment(currentDate).format('YYYY-MM'));
            objData.arrRangeVal.push(0);

            currentDate = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              currentDate.getDate()
            );
          }
        } else if (type === 'year') {
          while (currentDate.getFullYear() <= toDate.getFullYear()) {
            objData.arrRangeX.push(this.$moment(currentDate).format('YYYY'));
            objData.arrRangeVal.push(0);

            currentDate = new Date(
              currentDate.getFullYear() + 1,
              currentDate.getMonth(),
              currentDate.getDate(),
            );
          }
        }

        return objData;
      },
    }
  },
);
