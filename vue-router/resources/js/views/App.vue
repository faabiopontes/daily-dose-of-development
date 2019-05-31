<template>
  <div>
    <h1>Vue Router Demo App</h1>

    <p>
      <router-link :to="{ name: 'home' }">Home</router-link>|
      <router-link :to="{ name: 'hello' }">Hello World</router-link>
    </p>

    <div class="container">
      <!-- Inside the router-view is where the component that matches the route will be rendered  -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
