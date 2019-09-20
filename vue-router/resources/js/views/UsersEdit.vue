<template>
  <div>
    <div v-if="message" class="alert">{{ message }}</div>
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
        <button type="submit" :disabled="saving">Update</button>
      </div>
    </form>
  </div>
</template>
<script>
import api from "../api/users";

export default {
  data() {
    return {
      message: null,
      loaded: false,
      saving: false,
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
    async showMessage(message, miliseconds = 2000) {
      this.message = message;
      setTimeout(() => (this.message = null), miliseconds);
    },
    async onSubmit() {
      this.saving = true;

      const updatedUserData = {
        name: this.user.name,
        email: this.user.email
      };
      try {
        const response = await api.update(this.user.id, updatedUserData);
        this.user = response.data.data;
        this.showMessage("User Updated!");
      } catch (error) {
        console.log(error);
      } finally {
        this.saving = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$red: lighten(red, 30%);
$darkRed: darken($red, 50%);
.form-group label {
  display: block;
}
.alert {
  background: $red;
  color: $darkRed;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 50%;
  border: 1px solid $darkRed;
  border-radius: 5px;
}
</style>
