<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h4 class="card-title mb-4">Solicitudes de crédito 2020</h4>
        <apexchart class="apex-charts" height="350" type="bar" dir="ltr" :series="columnChart.series"
                   :options="columnChart.chartOptions"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationStatus",
  data() {
    return {
      columnChart: {
        series: [
          {
            name: "Pendientes",
            data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
          },
          {
            name: "Denegadas",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
          },
          {
            name: "Aprobadas",
            data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
          }
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "45%",
              endingShape: "rounded"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          colors: ['#f1b44c', '#f46a6a', '#34c38f'],
          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct"
            ]
          },
          grid: {
            borderColor: "#f1f1f1"
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " Solicitudes";
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
