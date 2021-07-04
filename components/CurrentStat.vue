<template>
  <div class="mb-4">
    <div class="columns is-multiline">
      <h1 class="is-size-3 column is-12">Solicitudes: </h1>
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
  name: "CurrentStat",
  components: {
    countTo
  }
}
</script>

<style scoped>

</style>
