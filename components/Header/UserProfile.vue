<template>
  <div class="user">
    <span class="icon-text is-flex is-align-items-center">
      <span class="icon has-text-primary">
        <i class="far fa-lg fa-user"></i>
      </span>
     <div class="ml-3">
       <span class="is-size-7">{{ $store.state.userMail }}</span>
       <span class="is-block is-size-7 user-logout" @click="logout">Salir</span>
     </div>
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "UserProfile",
  methods: {
    ...mapMutations({
      setLoggedIn: 'setLoggedIn'
    }),

    logout() {
      this.setLoggedIn(false)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  &-icon {
    font-size: 2rem;
  }

  &-logout {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>
