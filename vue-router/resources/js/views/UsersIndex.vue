<template>
  <div class="users">
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">
        <p>{{ error }}</p>

        <p>
            <button @click.prevent="fetchData">
                Try Again
            </button>
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
export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.error = this.users = null;
      this.loading = true;
      try {
        let response = await axios.get("/api/users");
        this.users = response.data;
      } catch (error) {
        this.error = error.response.data.message || error.message;
      } finally {
        this.loading = false;
      }

    }
  }
};
</script>
