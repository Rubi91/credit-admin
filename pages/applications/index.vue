<template>
  <div>
    <h1 class="is-size-4">Solicitudes</h1>
    <table class="table">
      <thead>
      <tr>
        <th><abbr title="Id">Id</abbr></th>
        <th>Email</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody class="text-body">
      <tr v-for="item in list">
        <th>{{ item.id }}</th>
        <td>{{ item.email }}</td>
        <td>{{ item.date }}</td>
        <td :class="item.class">{{ item.status }}</td>
        <td>
          <ul>
            <li class="is-inline mr-2">
              <NuxtLink :to="`/applications/${item.id}`" title="Editar">
                <span class="icon has-text-link">
                  <i class="fas fa-pencil-alt"></i>
                </span>
              </NuxtLink>
            </li>
            <li class="is-inline mr-2">
              <NuxtLink :to="`/applications/${item.id}`" title="Eliminar">
                <span class="icon has-text-danger">
                  <i class="far fa-trash-alt"></i>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          id: "10",
          email: "JoeHardy@dayrep.com",
          date: "10 Apr, 2020",
          status: "Approved",
          class: 'has-text-success'
        },
        {
          id: "11",
          email: "ThomasHankins@dayrep.com",
          date: "25 Jun, 2021",
          status: "Pending",
          class: 'has-text-warning-dark'
        },
        {
          id: "12",
          email: "MaryFrazier@armyspy.com",
          date: "12 Apr, 2020",
          status: "Discard",
          class: 'has-text-danger',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
