<template>
  <div class="users">
    <div v-if="loading" class="loading">Loading...</div>

    <p>
      <button @click.prevent="refreshPage">Try Again</button>
    </p>

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <ul v-if="users">
      <li v-for="{ id, name, email } in users" :key="id">
        <strong>Id:</strong>
        {{ id }},
        <strong>Name:</strong>
        {{ name }},
        <strong>Email:</strong>
        {{ email }} |
        <router-link :to="{ name: 'users.edit', params: { id } }">
          Edit
        </router-link>
      </li>
    </ul>

    <div class="pagination">
      <button :disabled="!prevPage" @click.prevent="goToPrev">Previous</button>
      {{ paginationCount }}
      <button :disabled="!nextPage" @click.prevent="goToNext">Next</button>
    </div>
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
      users: null,
      meta: null,
      links: {
        first: null,
        last: null,
        next: null,
        prev: null
      },
      error: null
    };
  },
  computed: {
    nextPage() {
      if (!this.meta || this.meta.current_page === this.meta.last_page) {
        return;
      }

      return this.meta.current_page + 1;
    },
    prevPage() {
      if (!this.meta || this.meta.current_page === 1) {
        return;
      }

      return this.meta.current_page - 1;
    },
    paginationCount() {
      if (!this.meta) {
        return;
      }

      const { current_page, last_page } = this.meta;

      return `${current_page} of ${last_page}`;
    },
    loading() {
      return this.users === null;
    }
  },
  beforeRouteEnter(to, from, next) {
    getUsers(to.query.page, (err, data) => {
      next(vm => vm.setData(err, data));
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.users = this.links = this.meta = null;

    getUsers(to.query.page, (err, data) => {
      this.setData(err, data);
      next();
    });
  },
  methods: {
    goToNext() {
      this.$router.push({
        query: {
          page: this.nextPage
        }
      });
    },
    goToPrev() {
      this.$router.push({
        query: {
          page: this.prevPage
        }
      });
    },
    refreshPage() {
      this.$router.push({
        query: {
          page: this.meta.current_page
        }
      });
    },
    setData(err, { data: users, links, meta }) {
      if (err) {
        this.error = err.toString();
      } else {
        this.users = users;
        this.links = links;
        this.meta = meta;
      }
    }
  }
};
</script>
