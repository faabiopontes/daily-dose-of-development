<template>
  <div>
    <div v-if="!loaded">Loading...</div>
    <form v-else @submit.prevent="onSubmit($event)">
      <div class="form-group">
        <label for="user_name">Name</label>
        <input id="user_name" v-model="user.name" />
      </div>
      <div class="form-group">
        <label for="user_name">Email</label>
        <input id="user_email" v-model="user.email" type="email" />
      </div>
      <div class="form-group">
        <button type="submit">Update</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from "../api/users";

export default {
  data() {
    return {
      loaded: false,
      user: {
        id: null,
        name: "",
        email: ""
      }
    };
  },
  async created() {
    const response = await api.find(this.$route.params.id);
    this.loaded = true;
    this.user = response.data.data;
  },
  methods: {
    // onSubmit(event) {
    // @todo form submit event
    // }
  }
};
</script>
