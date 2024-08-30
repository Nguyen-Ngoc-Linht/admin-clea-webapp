<template>
  <div class="container">
    <button @click="handleOpen">Hey</button>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      post_id: "",
    }
  },
  methods: {
    handleOpen() {
      this.commonConfirm("Bạn có muốn xoa chứ!", () => {}, () => {});
    }
  },
  created() {
    this.post_id = this.$route.params.post_id;
    console.log("id nhận được", this.post_id)
  }
}
</script>
