<template>
  <div>
    <main class="container">
      <nuxt></nuxt>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "auth",
  components: {Footer},
  mounted() {
    document.body.classList.add("authentication-bg");
  }
}
</script>

<style scoped>

</style>
