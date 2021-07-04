<template>
<header class="p-1 mb-5">
  <div class="container is-flex is-justify-content-space-between">
    <NuxtLogo/>
    <HeaderUserProfile v-if="$store.state.loggedIn"/>
  </div>
</header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
}
</style>
