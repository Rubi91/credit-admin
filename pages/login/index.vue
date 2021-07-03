<template>
  <div class="columns is-multiline">
    <div class="column is-half is-offset-one-quarter has-text-centered">
      <img src="/images/bg-circle.svg" alt="Bubbles Img Login">
    </div>
    <div class="column is-half is-offset-one-quarter">
      <div class="card">
        <div class="card-content">
            <h1 class="title has-text-centered">
              Bienvenido
            </h1>
          <p class="has-text-centered">Inicia sesión para entrar al Dashboard.</p>

          <div class="content">
            <form class="form" v-on:submit.prevent="">
              <div class="field">
                <label for="email" class="label">Email</label>
                <input id="email" class="input is-primary" placeholder="bienvenido@credito.com" type="email" name="email" v-model="email"
                       autocomplete="off" required>
              </div>

              <div class="field">
                <label for="password" class="label">Contraseña</label>
                <input id="password" type="password" placeholder="********" class="input is-primary" required name="password">
              </div>

              <div class="has-text-centered">
                <button class="button is-primary" type="submit" :disabled="loading">
                  {{ loading ? 'Enviando...' : 'Login' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="scss">
.columns {

}
</style>
