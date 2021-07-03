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
  name: "default",
  components: {Footer}
}
</script>

<style scoped>

</style>
