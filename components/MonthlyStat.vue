<template>
  <div class="mb-4">
    <h1 class="is-size-3">Solicitudes {{ new Date().getFullYear() }}</h1>

    <div class="columns">
      <div class="card column is-4">
        <div class="card-content">
          <h3 class="is-size-4 has-text-weight-semibold my-1">
              <span data-plugin="counterup">
                <countTo :startVal="100" :endVal="4500" :duration="2000"></countTo>
              </span>
          </h3>
          <p class="has-text-success">Aprobadas</p>
        </div>
      </div>
      <div class="card column is-4">
        <div class="card-content">
          <h3 class="is-size-4 has-text-weight-semibold my-1">
              <span data-plugin="counterup">
                <countTo :startVal="100" :endVal="1584" :duration="2000"></countTo>
              </span>
          </h3>
          <p class="has-text-warning-dark">Pendientes</p>
        </div>
      </div>
      <div class="card column is-4">
        <div class="card-content">
          <h3 class="is-size-4 has-text-weight-semibold my-1">
              <span data-plugin="counterup">
                <countTo :startVal="100" :endVal="8930" :duration="2000"></countTo>
              </span>
          </h3>
          <p class="has-text-danger">Denegadas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  name: "MonthlyStat",
  components: {
    countTo
  }
}
</script>

<style scoped>

</style>
