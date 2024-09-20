<template>
  <div ref="mdSetRole" class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="modal-title-default">Phân quyền cho tài khoản</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center">
            <img :src="avatarUrl" class="avatar avatar-lg"/>
          </div>
          <h4 class="text-center">{{user_name}}</h4>
          <select v-model="roleUser" class="form-control" name="choices-button" id="choices-button">
            <option value="USER">Người dùng</option>
            <option value="TEACHER">Giáo viên</option>
            <option value="Choice 3">Trợ giảng</option>
            <option value="ADMIN">Quản trị viên</option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-gradient-dark" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn bg-gradient-info">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    user_id: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      roleUser: "",
    }
  },
  methods: {
    ...mapActions("user", {
      setRole: "setrole",
    }),
    async submitRole() {
      await this.setRole({userId: this.user_id, role: this.roleUser}).then((res) => {
        this.modalSetRole.hide();
      })
    }
  },
  created() {
    console.log("Nhận dữ liệu", this.user_id, this.user_name, this.role);
    this.roleUser = this.role;
  },
  mounted() {
    this.modalSetRole = bootstrap.Modal.getOrCreateInstance(this.$refs.mdSetRole);
  }
}
</script>
