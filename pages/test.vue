<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-6 d-flex flex-column">
        <label for="">Chọn ảnh</label>
        <input
          ref="ImageFile"
          id="ImageFile"
          type="file"
          accept="image/*"
          @change="previewImage"
          hidden
        />
        <label
          for="ImageFile"
          class="cursor-pointer border-primary d-flex align-items-center justify-content-center position-relative"
          style="border-style: dotted; aspect-ratio: 6 / 3"
        >
          <img
            v-if="imageSrc"
            :src="imageSrc"
            alt="Selected Image"
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            "
          />
          <span v-else>Ảnh ở đây nha</span>
          <button
            v-if="imageSrc"
            @click.stop="removeImage"
            class="btn btn-danger btn-sm position-absolute"
            style="top: 10px; right: 10px"
          >
            X
          </button>
        </label>
        <button class="btn" @click="submitFile">Luuw</button>
      </div>

      <button @click="notifycation" class="btn">Xoas</button>
    </div>

    <div>
      <div ref="chart" style="width: 600px; height: 400px;"></div>
    </div>

    <notifications group="foo" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      imageSrc: null,
      fileImage: null,
    };
  },
  methods: {
    ...mapActions("upload", {
      uploadImage: "uploadImage",
    }),
    previewImage(event) {
      const file = event.target.files[0];
      this.fileImage = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.imageSrc = null;
      this.$refs.ImageFile.value = "";
    },
    notifycation() {
      console.log("Hahaha");
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      });
    },
    submitFile() {
      this.uploadImage(this.fileImage).then((response) => {
        console.log(response);
      });
    },
    initChart() {
      const chart = this.$echarts.init(this.$refs.chart);
      const option = {
        title: {
          text: 'ECharts Example'
        },
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [
          {
            name: 'Series1',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      chart.setOption(option);
    }
  },
  mounted() {
    this.initChart();
  },
};
</script>
