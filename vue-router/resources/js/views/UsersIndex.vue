<template>
  <div class="users">
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">
      <p>{{ error }}</p>

      <p>
        <button @click.prevent="fetchData">Try Again</button>
      </p>
    </div>

    <ul v-if="users">
      <li v-bind:key="id" v-for="{ id, name, email } in users">
        <strong>Id:</strong>
        {{ id }},
        <strong>Name:</strong>
        {{ name }},
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
const getUsers = async (page, callback) => {
  const params = { page };

  try {
    const response = await axios.get("/api/users", { params });
    callback(null, response.data);
  } catch (error) {
    callback(error, error.response.data);
  }
};
export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null
    };
  },
  beforeRouteEnter(to, from, next) {
    const params = {
      page: to.query.page
    };

    getUsers(to.query.page, (err, data) => {
      next(vm => vm.setData(err, data));
    });
  },
  created() {
    this.fetchData();
  },
  beforeRouteUpdate(to, from, next) {
    this.users = this.links = this.meta = null;
    getUsers(to.query.page, (err, data) => {
      this.setData(err, data);
      next();
    });
  },
  methods: {
    setData(err, { data: users, links, meta }) {
      if (err) {
        this.error = err.toString();
      } else {
        this.users = users;
        this.links = links;
        this.meta = meta;
      }
    },
    async fetchData() {
      this.error = this.users = null;
      this.loading = true;
      try {
        let response = await axios.get("/api/users");
        this.users = response.data.data;
      } catch (error) {
        this.error = error.response.data.message || error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
