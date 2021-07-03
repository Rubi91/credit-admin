<template>
<div>
  <main class="container">
    <div class="dashboard is-flex">
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

<style scoped>

</style>
