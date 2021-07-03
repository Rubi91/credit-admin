<template>
  <Tutorial/>
</template>

<script>
export default {
  middleware: [
    function ({ store, redirect }) {
      if (!store.state.loggedIn) {
        redirect('/login')
      }
    }
  ]
}
</script>
