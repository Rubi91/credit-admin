<template>
  <footer>
    <div class="content has-text-centered">
      <p class="text-info">
        © {{ new Date().getFullYear() }} Rubi Vega
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
