<template>
  <div>
    <h1>clients</h1>
    <table class="table">
      <thead>
      <tr>
        <th><abbr title="Id">Id</abbr></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>

      </tr>
      </thead>
      <tbody class="text-body">
      <tr v-for="customer in customersData">
        <th>{{ customer.id }}</th>
        <td> {{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.date }}</td>
        <td>{{ customer.status }}</td>
        <td>
          <ul>
            <li class="is-inline mr-2">
              <NuxtLink :to="`/customers/${customer.id}`" title="Editar">
                <span class="icon has-text-link">
                  <i class="fas fa-pencil-alt"></i>
                </span>
              </NuxtLink>
            </li>
            <li class="is-inline mr-2">
              <NuxtLink :to="`/customers/${customer.id}`" title="Eliminar">
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
  head() {
    return {
      title: `${this.title} | Credit Admin Dashboard`,
    };
  },
  data() {
    return {
      title: "Customers",
      items: [{
        text: "Ecommerce",
      },
        {
          text: "Customers",
          active: true,
        },
      ],
      customersData: [{
        id: "123",
        name: "William Shipp",
        email: "WilliamShipp@jourrapide.com",
        date: "14 Apr, 2020",
        status: "Active",
      },
        {
          id: "122",
          name: "Joe Hardy",
          email: "JoeHardy@dayrep.com",
          date: "14 Apr, 2020",
          status: "Active",
        },
        {
          id: "121",
          name: "Thomas Hankins",
          email: "ThomasHankins@dayrep.com",
          date: "13 Apr, 2020",
          status: "Active",
        },
        {
          id: "120",
          name: "Mary Frazier",
          email: "MaryFrazier@armyspy.com",
          date: "12 Apr, 2020",
          status: "Deactive",
        },
        {
          id: "119",
          name: "Sam Perry",
          email: "SamPerry@rhyta.com",
          date: "12 Apr, 2020",
          status: "Active",
        },
        {
          id: "118",
          name: "Muriel Myers",
          email: "MurielMyers@rhyta.com",
          date: "09 Apr, 2020",
          status: "Deactive",
        },
        {
          id: "117",
          name: "Jessie Jacobs",
          email: "Jessie Jacobs@teleworm.com",
          date: "09 Apr, 2020",
          status: "Active",
        },
        {
          id: "116",
          name: "Edward King",
          email: "EdwardKing@teleworm.com",
          date: "08 Apr, 2020",
          status: "Active",
        },
        {
          id: "115",
          name: "Stacy Webster",
          email: "StacyWebster@rhyta.com",
          date: "07 Apr, 2020",
          status: "Active",
        },
        {
          id: "114",
          name: "Amy McDonald",
          email: "AmyMcDonald@rhyta.com",
          date: "05 Apr, 2020",
          status: "Active",
        },
        {
          id: "113",
          name: "Terry Brown",
          email: "TerryBrown@rhyta.com",
          date: "02 Apr, 2020",
          status: "Active",
        },
        {
          id: "112",
          name: "Crissy Holland",
          email: "CrissyHolland@rhyta.com",
          date: "23 Mar, 2020",
          status: "Deactive",
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [{
        key: "check",
        label: "",
      },
        {
          key: "id",
          label: "Customer ID",
        },
        {
          key: "name",
          label: "Customer",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "date",
          label: "Join Date",
          sortable: true,
        },
        {
          key: "status",
          label: "Status",
          sortable: true
        },
        "action",
      ],
    };
  },
}
</script>

<style scoped>

</style>
