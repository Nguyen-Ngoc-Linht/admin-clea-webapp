<template>
  <div ref="addStudentModal" class="modal fade" id="addStudentModal" tabindex="-1" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Thêm học viên vào khóa học</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <span class="text-dark mb-2">Id tài khoản</span>
              <input type="text" class="form-control">
            </div>
            <div class="col-6">
              <span class="text-dark mb-2">Tên học viên</span>
              <input type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn bg-gradient-info" @click="addStudent">Thêm học viên</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {


    addStudent() {
      this.modalAddStudent.hide();
      this.$notify({
        group: 'foo',
        title: 'Thêm học viên thành công',
        text: 'Bạn đã thêm học viên vào khóa học thành công!'
      });
    }
  },
  mounted() {
    this.modalAddStudent = bootstrap.Modal.getOrCreateInstance(this.$refs.addStudentModal);
  }
}
</script>
