<template>
<div>
  <main>
    <Header/>
    <div class="dashboard container is-flex">
      <Aside/>
      <div class="dash-content is-flex-grow-1">
        <nuxt></nuxt>
      </div>
    </div>
  </main>
  <Footer/>
</div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "default",
  components: {Footer}
}
</script>

<style lang="scss" scoped>
@media(max-width: $tablet) {
  .dashboard {
    flex-direction: column;
  }
}
</style>
