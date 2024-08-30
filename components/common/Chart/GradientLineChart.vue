<template>
  <client-only placeholder="Loading...">
    <LineChart
      :chart-data="doughChartData"
      :chart-options="doughChartOptions"
      height="280px"
    />
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      gradientStroke: {},
      doughChartData: {
        labels: [
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12',
        ],
        datasets: [
          {
            label: 'Toán',
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            //backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
          {
            label: 'Văn',
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#3A416F",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            //backgroundColor: gradientStroke1,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6,
          },
        ],
      },
      doughChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      }
    }
  }
}
</script>
