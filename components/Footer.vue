<template>
  <footer>
    <div class="content has-text-centered">
      <p>
        © {{ new Date().getFullYear() }} <i class="fas fa-tv text-info"></i> Rubi Vega
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem;
}
</style>
