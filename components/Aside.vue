<template>
  <aside side class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <NuxtLink to="/">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-home"></i>
            </span>
            <span>Dashboard</span>
          </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/customers">
          <span class="icon-text">
            <span class="icon">
             <i class="fas fa-users"></i>
            </span>
            <span>Clientes</span>
          </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-file-alt"></i>
            </span>
            <span>Solicitudes</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="scss" scoped>
aside {
  min-width: 200px;
}
</style>
