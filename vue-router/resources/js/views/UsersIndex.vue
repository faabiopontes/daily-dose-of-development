<template>
  <div class="users">
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

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
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            users: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.error = this.users = null;
            this.loading = true;
            let response = await axios.get('/api/users');
            this.loading = false;
            this.users = response.data;
        }
    }
}
</script>
